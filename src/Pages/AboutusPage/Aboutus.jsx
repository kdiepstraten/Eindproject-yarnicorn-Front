import style from "./Aboutus.module.css"
import Navigation from "../NavbarPage/Navigation.jsx";
import {useContext} from "react";
import {LoadingContext} from "../../Context/LoadingContext.jsx";
import Spinner from "../../Components/Spinner.jsx";

function Aboutus() {
    const {loading} = useContext(LoadingContext);
    return (
        <>  {loading ? <Spinner/>
            :
            <>
                <Navigation/>
                <div className={style.background}>
                    <div className={style.container}>
                        <h1>Learn more about the founder off Yarnicorn</h1>
                    </div>
                    <div className={style.flex}>
                        <p className={style["text-box"]}>
                            <h1>"My Yarn Journey"</h1>

                            Welcome to My Yarn Journey, where every strand of yarn tells a story. My love for yarn began
                            as a simple curiosity and quickly blossomed into a passion for craft and creativity.
                            Together, let's embark on a journey through the beautiful world of yarn, where each fiber is
                            an adventure in itself. Join me in weaving, knitting, and crocheting as we explore the
                            unique texture of every thread.
                        </p>

                        <p className={`${style["align"]} ${style["text-box"]}`}>
                            <h1>"Mission and Goal"</h1>
                            At My Yarn Journey, our mission is straightforward: we aim to provide high-quality yarn and
                            wool products that enhance the creativity and inspiration of every knitter and crocheter. We
                            believe in sharing warmth and comfort through artisanal handiwork. Our goal is to build a
                            community where enthusiastic makers come together, share ideas, and find inspiration in the
                            versatility of yarn. Let's celebrate the art of crafting together!
                        </p>

                        <div className={style["text-box"]}>
                            <h1>"Contact Info"</h1>
                            Do you have questions, suggestions, or just feel like having a cozy chat about yarn? We're
                            always open to connecting! Reach out to us using the contact details below.
                            <p className={style["contact-top"]}>E-mail: info@mijnwolreis.nl</p>
                            <p>Phone: +31 623 456 789</p>
                            <p className={style["contact-bttm"]}>Address: Kensington 123, Londen, UK</p>
                            Feel free to get in touch. We look forward to hearing from you and sharing our love for yarn
                            together!
                        </div>
                    </div>
                </div>
            </>}
        </>
    )
}

export default Aboutus;