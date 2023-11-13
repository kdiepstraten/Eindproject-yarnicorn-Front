import style from "./ProductDetail.module.css"
import Navigation from "../NavbarPage/Navigation.jsx";
import ProductDetailsContainer from "../../Components/ProductDetailsContainer.jsx";
import {useParams} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import axios from "axios";
import {AuthContext} from "../../Context/AuthContext.jsx";


function ProductDetail() {
    const { productId } = useParams();
    const [product, setProduct] = useState({});
    const [error, toggleError] = useState(false);
    const [image, setImage] = useState(null);
    const { token } = useContext(AuthContext);
    useEffect(() => {
        void fetchProductDetails();
        // void getImage();
    }, []);

    async function fetchProductDetails() {
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
        }
    }
    // async function getImage() {
    //     const image = product.name;
    //     try {
    //         const response = await axios.get(`http://downloadFromDB/${image}`);
    //         setImage(response.data);
    //     }catch (e){
    //         console.error(e);
    //         console.error("Error status:", e.response.status);
    //         console.error("Error data:", e.response.data);
    //     }
    // }
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