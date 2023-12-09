import style from "./ProductDetailsContainer.module.css";
import {NavLink, useNavigate} from "react-router-dom";
import axios from "axios";
import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../../Context/AuthContext.jsx";
import Spinner from "../Spinner/Spinner.jsx";
import Button from "../Button/Button.jsx";


function ProductDetailsContainer({product}) {
    const navigate = useNavigate();
    const [image, setImage] = useState('');
    const {isAuthenticated} = useContext(AuthContext);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {


        async function fetchImage() {

            try {
                setError(false);
                setLoading(true);
                const response = await axios.get(`http://localhost:8080/downloadFromDB/${product.name}.jpg`);
                setImage(response.data)
            } catch (e) {
                console.error(e);
                console.error("Error status:", e.response.status);
                console.error("Error data:", e.response.data);
                setError(true);
            } finally {
                setLoading(false);
            }
        }

        void fetchImage()

    }, []);

    function onClick() {
        navigate("/reservation");
    }

    function products() {
        navigate("/products/leeg");
    }

    return (
        <>
            {loading ? <Spinner/>
                :
                <div className={style.container}>
                    <div className={style["container__left"]}>
                        <figure className={style["container__img"]}>
                            <img src={`data:image/png;base64,${image}`} alt={product.name}/>
                        </figure>
                        <div className={style["container__info"]}>{product.description}</div>
                    </div>
                    <div className={style["container__right"]}>
                        <p>Product ID: {product.id}</p>
                        <p>Name: {product.name}</p>
                        <p>Brand: {product.brand}</p>
                        <p>Color: {product.color}</p>
                        <p>Blend: {product.blend}</p>
                        <p>Needlesize: {product.needleSize}</p>
                        <p>Length: {product.length}</p>
                        <p>Gauge: {product.gauge}</p>
                        {isAuthenticated ? (
                            <button type="button" onClick={onClick} className={style.btn}>
                                Reserve
                            </button>) : <h1>Please login to reserve a product. <NavLink
                            className={style["link-products"]} to={"/login"}>Click here to login</NavLink></h1>}
                        <Button
                            type="button"
                            text="Back to products"
                            click={products}/>
                        {error && (
                            <p className={style.error}>Er is iets mis gegaan....Herlaad de pagina. Of neem contact op met de
                                eigenaar.</p>)}
                    </div>
                </div>}
        </>
    );
}

export default ProductDetailsContainer;

