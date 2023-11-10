import style from "./ProductsPage.module.css"
import Navigation from "../NavbarPage/Navigation.jsx";
import Products from "../../Components/Products.jsx";
import isager1 from "../../assets/Products/Isager eco soft .jpg"
import myVideo from "../../assets/video/1106913_1080p_Craft_Detail_1920x1080.mp4"
import {useParams} from "react-router-dom";


function ProductsPage() {
    const {categoryName} = useParams();

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
                        category={categoryName}
                    />

                </div>
            </div>

        </>
    )
}

export default ProductsPage;