import style from "./ProductDetail.module.css"
import Navigation from "../NavbarPage/Navigation.jsx";
import ProductDetailsContainer from "./ProductDetailsContainer.jsx";
import image from "../assets/Products/Isager trio power pink.jpg"
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";


function ProductDetail() {
    const { productId } = useParams();
    const [product, setProduct] = useState({});
    const [error, toggleError] = useState(false);

    useEffect(() => {
        void fetchProductDetails();
    }, [productId]);

    async function fetchProductDetails() {
        toggleError(false);
        try {
            const response = await axios.get(`http://localhost:8080/product/${productId}`);
            setProduct(response.data);
            console.log(response.data);
        } catch (error) {
            console.error(error);
            toggleError(true);
        }
    }
    return (
        <>
            <div className={style.background}>
                <Navigation/>
                <div className={style.header}></div>
                <ProductDetailsContainer
                    product={product}
                    image={image}
                    />
            </div>

        </>
    )
}

export default ProductDetail;