import "./ProductsPage.jsx"
import {NavLink} from "react-router-dom";
import style from "./ProductsPage.module.css";
import {useEffect, useState} from "react";
import axios from "axios";

function Products({image}) {
    const [wool, setWool] = useState([]);
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);

    useEffect(() => {
        void fetchWool();
    }, []);


    async function fetchWool() {
        toggleError(false);
        toggleLoading(true);
        try {
            const response = await axios.get("http://localhost:8080/wools");
            setWool(response.data);
            console.log(response.data)
        } catch (e) {
            console.error(e);
            toggleError(true);
        }
        toggleLoading(false)
    }

    return (
        <>
            {wool.map((wool) => (
            <div className={style["products__container"]} key={wool.id}>
                <figure className={style["products__figure"]}>
                    <img src={image} alt={wool.name}/>
                </figure>
                <p>{wool.name}</p>
                <p>{wool.blend}</p>
                <p>{wool.color}</p>
                <NavLink className={style.link} to="/products-detail">More info</NavLink>
                </div>
            ))}
        </>
    );

}

export default Products;