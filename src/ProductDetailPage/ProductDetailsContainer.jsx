import style from "./ProductDetail.module.css"
import {useNavigate} from "react-router-dom";
function ProductDetailsContainer({image, image_text, description, name, brand, color, blend, needlesize, length, gauge}){
    const navigate = useNavigate();

    function onClick(){
        navigate("/reservation");
    }
    return(
        <>
            <div className={style.container}>
                <div className={style["container__left"]}>
                    <figure className={style["container__img"]}>
                        <img src={image} alt={image_text}/>
                    </figure>
                    <div className={style["container__info"]}>{description}</div>
                </div>
                <div className={style["container__right"]}>
                    <p>Name: {name}</p>
                    <p>Brand: {brand}</p>
                    <p>Color: {color}</p>
                    <p>Blend: {blend}</p>
                    <p>Needlesize: {needlesize}</p>
                    <p>Length: {length}</p>
                    <p>Gauge: {gauge}</p>
                    <button type="button" onClick={onClick} className={style.btn}>Reserve</button>
                </div>
            </div>
        </>
    )
}
export default ProductDetailsContainer;