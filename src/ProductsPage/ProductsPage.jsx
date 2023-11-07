import style from "./ProductsPage.module.css"
import Navigation from "../NavbarPage/Navigation.jsx";
import Products from "./Products.jsx";
import isager1 from "../assets/Products/Isager eco soft .jpg"
import isager2 from "../assets/Products/Isager eco soft e7s.jpg"
import isager3 from "../assets/Products/Isager eco soft grey.jpg"
import isager4 from "../assets/Products/Isager trio bordeaux.jpg"
import isager5 from "../assets/Products/Isager trio lemon.jpg"
import isager6 from "../assets/Products/Isager trio navy.jpg"
import Converter from "./Converter.jsx";
import myVideo from "../assets/video/1106913_1080p_Craft_Detail_1920x1080.mp4"
import {useEffect, useState} from "react";
import axios from "axios";

function ProductsPage() {


    return (
        <>
            <div className={style.background}>
                <Navigation/>
                <div className={style.header}></div>

                <video className={style.video} width="1000px" autoPlay loop muted>
                    <source className={style.video} src={myVideo} type="video/mp4"/>
                </video>

                <div className={style.products}>
                    <Products
                        image={isager1}
                    />

                </div>
                <Converter/>
            </div>

        </>
    )
}

export default ProductsPage;