import style from "./home.module.css"
function Introduction({image_1, alt_1, alt_2, text_1, text_2, image_2}){
    return(
        <>
            <figure className={style["introduction-image-1"]}>
                <img src={image_1} alt={alt_1}/>
            </figure>

            <article className={style["introduction-text-container"]}>
                <p className={style["introduction-text_1"]}>{text_1}</p>
                <p className={style["introduction-text_2"]}>{text_2}</p>
            </article>

            <figure className={style["introduction-image-2"]}>
                <img  src={image_2} alt={alt_2}/>
            </figure>

        </>
    )
}
export default Introduction;