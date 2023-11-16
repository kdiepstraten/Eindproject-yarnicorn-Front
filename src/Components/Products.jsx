import "../Pages/ProductsPage/ProductsPage.jsx"
import {NavLink} from "react-router-dom";
import style from "../Pages/ProductsPage/ProductsPage.module.css";
import {useContext, useEffect, useState} from "react";
import axios from "axios";
import {AuthContext} from "../Context/AuthContext.jsx";


function Products({image, category}) {
    const [product, setProduct] = useState([]);
    const [categoryName, setCategoryName] = useState([]);
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);
    const {token} = useContext(AuthContext);

    useEffect(() => {
        void fetchProduct();
        void fetchCategory()
    }, []);

    async function fetchProduct() {
        toggleError(false);
        toggleLoading(true);
        try {
            const response = await axios.get('http://localhost:8080/product', {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `${token}`
                }
                });
            setProduct(response.data);
        } catch (e) {
            console.error(e);
            console.error("Error status:", e.response.status);
            console.error("Error data:", e.response.data);
            toggleError(true);
        }
        toggleLoading(false)
    }

    async function fetchCategory(){

        try {
            const result = await axios.get(`http://localhost:8080/product/byCategory?category=${category}`, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `${token}`
                }
                })
            setCategoryName(result.data);
        }catch (e) {
            console.error(e)
            console.error("Error status:", e.response.status);
            console.error("Error data:", e.response.data);
        }
    }

    return (
        <>
            {category === "leeg" ?
                product.map((product) => (
                        <div className={style["products__container"]} key={product.id}>
                            <figure className={style["products__figure"]}>
                                <img src={image} alt={product.name}/>
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
                            <img src={image} alt={category.name}/>
                        </figure>
                        <p>{category.name}</p>
                        <p>{category.blend}</p>
                        <p>{category.color}</p>

                        <NavLink className={style.link} to={`/products-detail/${category.id}`}>More info</NavLink>
                    </div>
                ))}
        </>
    );

}

export default Products;