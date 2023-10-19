import style from "./ProductDetail.module.css"
import Navigation from "../NavbarPage/Navigation.jsx";
import ProductDetailsContainer from "./ProductDetailsContainer.jsx";
import product from "../assets/Products/Isager trio power pink.jpg"

function ProductDetail() {
    return (
        <>
            <div className={style.background}>
                <Navigation/>
                <div className={style.header}></div>
                <ProductDetailsContainer
                    image={product}
                    image_text="Pretty in pink"
                    description="50% alpaca, 50% wool"
                    name="Isager eco soft "
                    brand="Isager"
                    color="Blue"
                    blend="50% alpaca, 50% wool"
                    needlesize="4mm"
                    length="150m"
                    gauge="10 x 10 = 17 st x 22 rows"
                    />
            </div>

        </>
    )
}

export default ProductDetail;