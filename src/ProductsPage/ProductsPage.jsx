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
                    {/*<Products*/}
                    {/*    image={isager2}*/}
                    {/*    />*/}
                    {/*<Products*/}
                    {/*    image={isager1}*/}
                    {/*    image__text={wool[0].name}*/}
                    {/*    name={wool[0].name}*/}
                    {/*    blend={wool[0].blend}*/}
                    {/*    color={wool[0].color}*/}
                    {/*/>*/}
                    {/*<Products*/}
                    {/*    image={isager2}*/}
                    {/*    image__text="Isager eco soft"*/}
                    {/*    name="Isager eco soft"*/}
                    {/*    blend=" Alpaca 50%, Cotton 48 %, nylon 2%"*/}
                    {/*    color="Beige"*/}
                    {/*/>*/}
                    {/*<Products*/}
                    {/*    image={isager3}*/}
                    {/*    image__text="Isager eco soft"*/}
                    {/*    name="Isager eco soft"*/}
                    {/*    blend=" Alpaca 50%, Cotton 48 %, nylon 2%"*/}
                    {/*    color="Grey"*/}
                    {/*/>*/}
                    {/*<Products*/}
                    {/*    image={isager4}*/}
                    {/*    image__text="Isager eco soft"*/}
                    {/*    name="Isager eco soft"*/}
                    {/*    blend=" Alpaca 50%, Cotton 48 %, nylon 2%"*/}
                    {/*    color="Mauve"*/}
                    {/*/>*/}
                    {/*<Products*/}
                    {/*    image={isager5}*/}
                    {/*    image__text="Isager eco soft"*/}
                    {/*    name="Isager eco soft"*/}
                    {/*    blend=" Alpaca 50%, Cotton 48 %, nylon 2%"*/}
                    {/*    color="Beige"*/}
                    {/*/>*/}
                    {/*<Products*/}
                    {/*    image={isager6}*/}
                    {/*    image__text="Isager eco soft"*/}
                    {/*    name="Isager eco soft"*/}
                    {/*    blend=" Alpaca 50%, Cotton 48 %, nylon 2%"*/}
                    {/*    color="Grey"*/}
                    {/*/>*/}
                </div>
                <Converter/>
            </div>

        </>
    )
}

export default ProductsPage;