import "./ProductsPage.jsx"
import {NavLink} from "react-router-dom";
import style from "./ProductsPage.module.css";
import {useEffect, useState} from "react";
import axios from "axios";

function Products({image}) {
    const [product, setProduct] = useState([]);
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);

    useEffect(() => {
        void fetchProduct();
    }, []);


    async function fetchProduct() {
        toggleError(false);
        toggleLoading(true);
        try {
            const response = await axios.get("http://localhost:8080/product");
            setProduct(response.data);
            console.log(response.data)
        } catch (e) {
            console.error(e);
            toggleError(true);
        }
        toggleLoading(false)
    }

    return (
        <>
            {product.map((product) => (
            <div className={style["products__container"]} key={product.id}>
                <figure className={style["products__figure"]}>
                    <img src={image} alt={product.name}/>
                </figure>
                <p>{product.name}</p>
                <p>{product.blend}</p>
                <p>{product.color}</p>
                <NavLink className={style.link} to="/products-detail">More info</NavLink>
                </div>
            ))}
        </>
    );

}

export default Products;