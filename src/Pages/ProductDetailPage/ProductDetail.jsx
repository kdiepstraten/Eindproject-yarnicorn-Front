import style from "./ProductDetail.module.css"
import Navigation from "../NavbarPage/Navigation.jsx";
import ProductDetailsContainer from "../../Components/ProductDetailsContainer.jsx";
import {useParams} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import axios from "axios";

import {LoadingContext} from "../../Context/LoadingContext.jsx";
import Spinner from "../../Components/Spinner.jsx";


function ProductDetail() {
    const { productId } = useParams();
    const [product, setProduct] = useState({});
    const [error, toggleError] = useState(false);
    const { startLoading, stopLoading, loading } = useContext(LoadingContext);


    useEffect(() => {
        void fetchProductDetails();
    }, []);

    async function fetchProductDetails() {
     const token = localStorage.getItem("token")
        startLoading(<Spinner/>);
        toggleError(false);
        try {
            const response = await axios.get(`http://localhost:8080/product/${productId}`, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `${token}`
                }
                });
            setProduct(response.data);
            console.log(response.data);
        } catch (error) {
            console.error(error);
            toggleError(true);
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
            </div>}

        </>
    )
}

export default ProductDetail;