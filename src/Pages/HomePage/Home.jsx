import Introduction from "../../Components/Introduction.jsx";
import hands_1 from "../../assets/Home/one-woman-knitting-warm-multi-colored-winter-clothing-generated-by-ai (1).jpg";
import hands_2 from "../../assets/Home/one-woman-knitting-wool-sweater-generated-by-ai (1).jpg";
import Categories from "../../Components/Categories.jsx";
import Review from "../../Components/Review.jsx";
import Navigation from "../NavbarPage/Navigation.jsx";
import {useContext} from "react";
import {LoadingContext} from "../../Context/LoadingContext.jsx";
import Spinner from "../../Components/Spinner.jsx";
import {ErrorContext} from "../../Context/ErrorContext.jsx";
import style from "./home.module.css";

function Home() {
    const {loading} = useContext(LoadingContext);
    const {error} = useContext(ErrorContext);
    return (
        <>


                    <Navigation/>
                    <Introduction
                        image_1={hands_1}
                        alt_1="Woman knitting a scarf"
                        image_2={hands_2}
                        alt_2="woman setting up stitches"
                        text_1="Betreed de magische wereld van wol en garen bij Yarnicorn. Wij geloven in de wonderen van garen, een eeuwenoud ambacht dat generaties heeft samengebracht en verhalen heeft geweven in elke steek."
                        text_2="Of je nu een ervaren breister, een enthousiaste haakster, een opkomend textielkunstenaar bent, of gewoon nieuwsgierig naar waar creativiteit en vakmanschap samenkomen om prachtige en warme meesterwerken te creëren, hier, in de wereld van vezelkunst, zul je een schat aan inspiratie, kennis en hoogwaardige materialen ontdekken om je projecten tot leven te brengen."
                    />
                    <Categories/>
                    <Review/>
                    {error && (<p className={style.error}>Er is iets mis gegaan....Herlaad de pagina. Of neem contact op met de eigenaar.</p>)}

        </>
    )
}

export default Home;