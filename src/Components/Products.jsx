import "../Pages/ProductsPage/ProductsPage.jsx"
import {NavLink} from "react-router-dom";
import style from "../Pages/ProductsPage/ProductsPage.module.css";
import {useContext, useEffect, useState} from "react";
import axios from "axios";
import {AuthContext} from "../Context/AuthContext.jsx";
import Spinner from "./Spinner.jsx";
import image2 from "../assets/Products/Isager eco soft grey.jpg"

function Products({ category}) {
    const [product, setProduct] = useState([]);
    const [categoryName, setCategoryName] = useState([]);
    const {token} = useContext(AuthContext);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [image, setImage] = useState('');

    useEffect(() => {
        void fetchProduct();
        void fetchCategory();
        // void fetchImage();
    }, []);

    async function fetchProduct() {

        try {
            setError(false);
            setLoading(true);
            const response = await axios.get('http://localhost:8080/product');
            console.log(response.data)
            setProduct(response.data);
        } catch (e) {
            console.error(e);
            console.error("Error status:", e.response.status);
            console.error("Error data:", e.response.data);
            setError(true);
        } finally {
            setLoading(false);
        }

    }

    async function fetchCategory(){

        try {
            setError(false);
            setLoading(true);
            const result = await axios.get(`http://localhost:8080/product/byCategory?category=${category}`, {
                headers: {
                    Authorization: `${token}`
                }
                })
            setCategoryName(result.data);
        }catch (e) {
            console.error(e)
            console.error("Error status:", e.response.status);
            console.error("Error data:", e.response.data);
            setError(true);
        } finally {
            setLoading(false);
        }
    }

    // async function fetchImage() {
    //     try {
    //         setError(false);
    //         setLoading(true);
    //         const response = await axios.get(`http://localhost:8080/downloadFromDB/${product.name}.jpg`);
    //         console.log(response.data)
    //         console.log(product.name)
    //         setImage(response.data)
    //     } catch (e) {
    //         console.error(e);
    //         console.error("Error status:", e.response.status);
    //         console.error("Error data:", e.response.data);
    //         setError(true);
    //     } finally {
    //         setLoading(false);
    //     }
    // }
// TODO: Fix product.name. Not one product but all product names.
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
                            <img src={`data:image/png;base64,${product.docFile}`} alt={category.name}/>
                        </figure>
                        <p>{category.name}</p>
                        <p>{category.blend}</p>
                        <p>{category.color}</p>

                        <NavLink className={style.link} to={`/products-detail/${category.id}`}>More info</NavLink>
                    </div>
                ))}
                {error && (<p className={style.error}>Er is iets mis gegaan....Herlaad de pagina. Of neem contact op met de eigenaar.</p>)}
            </>}
        </>
    );

}

export default Products;