import style from "./ProductDetail.module.css"
import {useNavigate, useParams} from "react-router-dom";


import axios from "axios";
function ProductDetailsContainer({product, image }){
    const navigate = useNavigate();


    function onClick(){
        navigate("/reservation");
    }
    return(
        <>
            <div className={style.container}>
                <div className={style["container__left"]}>
                    <figure className={style["container__img"]}>
                        <img src={image} alt={product.name}/>
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

                    <button type="button" onClick={onClick} className={style.btn}>Reserve</button>
                </div>
            </div>
        </>
    )
}
export default ProductDetailsContainer;