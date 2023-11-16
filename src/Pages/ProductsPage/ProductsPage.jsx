import style from "./ProductsPage.module.css"
import Navigation from "../NavbarPage/Navigation.jsx";
import Products from "../../Components/Products.jsx";
import isager1 from "../../assets/Products/Isager eco soft .jpg"
import myVideo from "../../assets/video/1106913_1080p_Craft_Detail_1920x1080.mp4"
import {NavLink, useParams} from "react-router-dom";
import {useContext} from "react";
import {AuthContext} from "../../Context/AuthContext.jsx";
import {LoadingContext} from "../../Context/LoadingContext.jsx";
import Spinner from "../../Components/Spinner.jsx";


function    ProductsPage() {
    const {categoryName} = useParams();
    const { isAuthenticated } = useContext(AuthContext);
    const { loading } = useContext(LoadingContext);
    return (
        <>
            {loading ? <Spinner/>
                :
            <div className={style.background}>
                <Navigation/>
                <div className={style.header}></div>

                <video className={style.video} width="1000px" autoPlay loop muted>
                    <source className={style.video} src={myVideo} type="video/mp4"/>
                </video>

                {isAuthenticated ? (
                <div className={style.products}>
                    <Products
                        image={isager1}
                        category={categoryName}
                    />
                </div>
                ) : <h1 className={style.login}>Please login to see our products. <NavLink className={style["link-products"]} to={"/login"}>Click here</NavLink></h1>}
            </div>}
        </>
    )
}

export default ProductsPage;