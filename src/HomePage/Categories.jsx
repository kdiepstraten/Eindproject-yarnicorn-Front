import style from "./home.module.css"
import {useNavigate} from "react-router-dom";

function Categories() {
    const navigate = useNavigate();

    function clickHandler() {
        navigate("/products")
    }

    return (
        <>
            <div className={style.container}>
                <article className={`${style.categorie} ${style.sheep}`} onClick={clickHandler}></article>
                <article className={`${style.categorie} ${style.alpaca}`} onClick={clickHandler}></article>
                <article className={`${style.categorie} ${style.yak}`} onClick={clickHandler}></article>
                <article className={`${style.categorie} ${style.cotton}`} onClick={clickHandler}></article>
                <article className={`${style.categorie} ${style.plant}`} onClick={clickHandler}></article>
                <article className={`${style.categorie} ${style.exotic}`} onClick={clickHandler}></article>
            </div>
        </>
    )
}

export default Categories;