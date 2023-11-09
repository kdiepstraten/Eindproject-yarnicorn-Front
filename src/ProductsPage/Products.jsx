import "./ProductsPage.jsx"
import {NavLink} from "react-router-dom";
import style from "./ProductsPage.module.css";
import {useEffect, useState} from "react";
import axios from "axios";

function Products({image, category}) {
    const [product, setProduct] = useState([]);
    const [categoryName, setCategoryName] = useState([]);
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);

    useEffect(() => {
        void fetchProduct();
        void fetchCategory()
    }, []);


    async function fetchProduct() {
        toggleError(false);
        toggleLoading(true);
        try {
            const response = await axios.get('http://localhost:8080/product');
            setProduct(response.data);
            // console.log(response.data)
        } catch (e) {
            console.error(e);
            toggleError(true);
        }
        toggleLoading(false)
    }

    async function fetchCategory(){

        try {
            const result = await axios.get(`http://localhost:8080/product/byCategory?category=${category}`)
            setCategoryName(result.data);
            // console.log(result)
        }catch (e) {
            console.error(e)
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
                            <NavLink className={style.link} to={`/products/${product.id}`}>More info</NavLink>
                        </div> //TODO: product.id is not a valid path
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
                        {console.log(category.id)}
                        <NavLink className={style.link} to={`/products/${category.id}`}>More info</NavLink>
                    </div>
                ))}


        </>
    );

}

export default Products;