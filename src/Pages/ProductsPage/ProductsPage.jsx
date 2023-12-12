import style from "./ProductsPage.module.css"
import Navigation from "../NavbarPage/Navigation.jsx";
import Products from "../../Components/Products/Products.jsx";
import isager1 from "../../assets/Products/Isager eco soft .jpg"
import myVideo from "../../assets/video/1106913_1080p_Craft_Detail_1920x1080.mp4"
import { useParams} from "react-router-dom";
import { useState} from "react";



function    ProductsPage() {
    const {categoryName} = useParams();
    const [error, setError] = useState(false);
    return (
        <>


            <div className={style.background}>
                <Navigation/>
                <header className={style.header}></header>

                <video className={style.video} width="1000px" autoPlay loop muted>
                    <source className={style.video} src={myVideo} type="video/mp4"/>
                </video>

                <main className={style.products}>
                    <Products
                        image={isager1}
                        category={categoryName}
                    />
                </main>
                {error && (<p className={style.error}>Er is iets mis gegaan....Herlaad de pagina. Of neem contact op met de eigenaar.</p>)}
            </div>


        </>
    )
}

export default ProductsPage;