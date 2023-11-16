import style from "./ProductDetail.module.css"
import Navigation from "../NavbarPage/Navigation.jsx";
import ProductDetailsContainer from "../../Components/ProductDetailsContainer.jsx";
import {useParams} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import axios from "axios";

import {LoadingContext} from "../../Context/LoadingContext.jsx";
import Spinner from "../../Components/Spinner.jsx";
import {ErrorContext} from "../../Context/ErrorContext.jsx";
import {AuthContext} from "../../Context/AuthContext.jsx";


function ProductDetail() {
    const { productId } = useParams();
    const [product, setProduct] = useState({});
    const { startLoading, stopLoading, loading } = useContext(LoadingContext);
    const {error, handleError, clearError} = useContext(ErrorContext);


    useEffect(() => {
        void fetchProductDetails();
    }, []);

    async function fetchProductDetails() {
     const token = localStorage.getItem("token")
        startLoading(<Spinner/>);
        clearError();
        try {
            const response = await axios.get(`http://localhost:8080/product/${productId}`, {
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
            handleError();
        } finally {
            stopLoading();
        }
    }

    return (
        <>
            {loading ? <Spinner/>
                :
            <div className={style.background}>
                <Navigation/>
                <div className={style.header}></div>
                {Object.keys(product).length > 0 &&
                    <ProductDetailsContainer
                        product={product}
                    />
                }
                {/*{error && (<p className={style.error}>Er is iets mis gegaan....Herlaad de pagina. Of neem contact op met de eigenaar.</p>)}*/}
            </div>}

        </>
    )
}

export default ProductDetail;