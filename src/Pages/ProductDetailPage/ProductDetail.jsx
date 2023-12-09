import style from "./ProductDetail.module.css"
import Navigation from "../NavbarPage/Navigation.jsx";
import ProductDetailsContainer from "../../Components/ProductDetailsContainer/ProductDetailsContainer.jsx";
import {useParams} from "react-router-dom";
import { useEffect, useState} from "react";
import axios from "axios";
import Spinner from "../../Components/Spinner/Spinner.jsx";



function ProductDetail() {
    const { productId } = useParams();
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);


    useEffect(() => {
        void fetchProductDetails();
    }, []);

    async function fetchProductDetails() {
     const token = localStorage.getItem("token")
        setError(false);
        setLoading(true);
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
            setError(true);
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            {loading ? <Spinner/>
                :
            <main className={style.background}>
                <Navigation/>
                <div className={style.header}></div>
                {Object.keys(product).length > 0 &&
                    <ProductDetailsContainer
                        product={product}
                    />
                }
                {error && (<p className={style.error}>Er is iets mis gegaan....Herlaad de pagina. Of neem contact op met de eigenaar.</p>)}
            </main>}

        </>
    )
}

export default ProductDetail;