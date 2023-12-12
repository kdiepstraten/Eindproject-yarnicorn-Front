import "../../Pages/ProductsPage/ProductsPage.jsx"
import {NavLink} from "react-router-dom";
import style from "./Products.module.css";
import {useEffect, useState} from "react";
import axios from "axios";

import Spinner from "../Spinner/Spinner.jsx";

function Products({category}) {
    const [product, setProduct] = useState([]);
    const [categoryName, setCategoryName] = useState([]);

    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        void fetchProduct();
        void fetchCategory();
    }, []);

    // Get products
    async function fetchProduct() {
        try {
            setError(false);
            setLoading(true);
            const response = await axios.get('http://localhost:8080/product');
            setProduct(response.data);
            console.log(response.data)
        } catch (e) {
            console.error(e);
            console.error("Error status:", e.response.status);
            console.error("Error data:", e.response.data);
            setError(true);
        } finally {
            setLoading(false);
        }
    }

    // Get products by category
    async function fetchCategory() {

        try {
            setError(false);
            setLoading(true);
            const result = await axios.get(`http://localhost:8080/product/byCategory?category=${category}`)
            setCategoryName(result.data);
        } catch (e) {
            console.error(e)
            console.error("Error status:", e.response.status);
            console.error("Error data:", e.response.data);
            setError(true);
        } finally {
            setLoading(false);
        }
    }

    return (
        <>{loading ? <Spinner/>
            :
            <>
                {category === "leeg" ?
                    product.map((product) => (
                        <div className={style["products__container"]} key={product.id}>
                            <figure className={style["products__figure"]}>
                                <img src={`data:image/png;base64,${product.docFile}`} alt={product.name}/>
                            </figure>
                            <p>{product.name}</p>
                            <p>{product.blend}</p>
                            <p>{product.color}</p>
                            <NavLink className={style.link} to={`/products-detail/${product.id}`}>More info</NavLink>
                        </div>
                    ))
                    :
                    categoryName.map((category) => (

                        <div className={style["products__container"]} key={category.id}>
                            <figure className={style["products__figure"]}>
                                <img src={`data:image/png;base64,${category.docFile}`} alt={category.name}/>
                            </figure>
                            <p>{category.name}</p>
                            <p>{category.blend}</p>
                            <p>{category.color}</p>

                            <NavLink className={style.link} to={`/products-detail/${category.id}`}>More info</NavLink>
                        </div>
                    ))}
                {error && (
                    <p className={style.error}>Er is iets mis gegaan....Herlaad de pagina. Of neem contact op met de
                        eigenaar.</p>)}
            </>}
        </>
    );

}

export default Products;