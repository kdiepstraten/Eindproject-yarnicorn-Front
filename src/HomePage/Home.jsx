import style from "./home.module.css"
import Introduction from "./Introduction.jsx";
import hands_1 from "../assets/Home/one-woman-knitting-warm-multi-colored-winter-clothing-generated-by-ai (1).jpg";
import hands_2 from "../assets/Home/one-woman-knitting-wool-sweater-generated-by-ai (1).jpg";
import Categories from "./Categories.jsx";
import PostReview from "./PostReview.jsx";
import Navigation from "../NavbarPage/Navigation.jsx";
function Home(){
    return(
        <>
            <Navigation/>
            <Introduction
                image_1={hands_1}
                alt_1="Woman knitting a scarf"
                image_2={hands_2}
                alt_2="woman setting up stitches"
                text_1=" Stap binnen in de betoverende wereld van wol en garen, waar ambacij [Jouw Website Naam] geloven we in de magie van garen - het eeuwenoude ambacht dat generaties heeft verbonden en verhalen heeft geweven in elke steek."
                text_2="Of je nu een doorgewinterde breier bent, een gepassioneerde haker, een textielkunstenaar in de maak of gewoon nieuwsgierig bent nht en creativiteit samenkomen om prachtige en warme meesterwerken te creëren. Baar de wereld van vezelkunst, hier vind je een schat aan inspiratie, kennis en hoogwaardige materialen om je projecten tot leven te brengen."
                />
            <Categories/>
            <PostReview/>
        </>
    )
}
export default Home;