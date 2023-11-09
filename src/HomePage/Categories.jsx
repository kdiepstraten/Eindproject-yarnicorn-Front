import style from "./home.module.css"
import {useNavigate} from "react-router-dom";

function Categories() {
    const navigate = useNavigate();

    function clickHandler(animal) {
        navigate(`/products/${animal}`)
    }

    return (
        <>
            <div className={style.container}>
                <article className={`${style.categorie} ${style.sheep}`} onClick={() => clickHandler('Sheep')}></article>
                <article className={`${style.categorie} ${style.alpaca}`} onClick={() => clickHandler('Alpaca')}></article>
                <article className={`${style.categorie} ${style.yak}`} onClick={() => clickHandler('Yak')}></article>
                <article className={`${style.categorie} ${style.cotton}`} onClick={() => clickHandler('Cotton')}></article>
                <article className={`${style.categorie} ${style.plant}`} onClick={() => clickHandler('Plant')}></article>
                <article className={`${style.categorie} ${style.exotic}`} onClick={() => clickHandler('Exotic')}></article>
            </div>
        </>
    )
}

export default Categories;