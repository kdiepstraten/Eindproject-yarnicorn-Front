import style from "./ProductDetail.module.css"
import Navigation from "../NavbarPage/Navigation.jsx";
import ProductDetailsContainer from "./ProductDetailsContainer.jsx";
import image from "../assets/Products/Isager trio power pink.jpg"
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";

function ProductDetail() {
    const [product, setProduct] = useState('');
    const {productId} = useParams();
    const [error, toggleError] = useState(false)

    useEffect(() => {
        void updateProduct();
    }, []);
    async function updateProduct(){
        try {
            const response = await axios.get(`http://localhost:3000/product/${productId}`)
            setProduct((response.data));
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
                    image={image}
                    image_text="Pretty in pink"
                    description="50% alpaca, 50% wool"
                    name="Isager eco soft "
                    brand="Isager"
                    color="Blue"
                    blend="50% alpaca, 50% wool"
                    needlesize="4mm"
                    length="150m"
                    gauge="10 x 10 = 17 st x 22 rows"
                    />
            </div>

        </>
    )
}

export default ProductDetail;