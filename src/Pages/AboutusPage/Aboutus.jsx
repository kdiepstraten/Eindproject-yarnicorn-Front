import  style from "./Aboutus.module.css"
import Navigation from "../NavbarPage/Navigation.jsx";




function Aboutus() {
    return (
        <>
            <Navigation/>
            <div className={style.background}>
                    <header className={style.container}>
                        <h1>Learn more about the founder off Yarnicorn</h1>
                    </header>
                    <main className={style.flex}>
                        <article className={style["text-box"]}>
                            <h1>"My Yarn Journey"</h1>

                            Welcome to My Yarn Journey, where every strand of yarn tells a story. My love for yarn began
                            as a simple curiosity and quickly blossomed into a passion for craft and creativity.
                            Together, let's embark on a journey through the beautiful world of yarn, where each fiber is
                            an adventure in itself. Join me in weaving, knitting, and crocheting as we explore the
                            unique texture of every thread.
                        </article>

                        <article className={`${style["align"]} ${style["text-box"]}`}>
                            <h1>"Mission and Goal"</h1>
                            At My Yarn Journey, our mission is straightforward: we aim to provide high-quality yarn and
                            wool products that enhance the creativity and inspiration of every knitter and crocheter. We
                            believe in sharing warmth and comfort through artisanal handiwork. Our goal is to build a
                            community where enthusiastic makers come together, share ideas, and find inspiration in the
                            versatility of yarn. Let's celebrate the art of crafting together!
                        </article>

                        <article className={style["text-box"]}>
                            <h1>"Contact Info"</h1>
                            Do you have questions, suggestions, or just feel like having a cozy chat about yarn? We're
                            always open to connecting! Reach out to us using the contact details below.
                            <p className={style["contact-top"]}>E-mail: info@mijnwolreis.nl</p>
                            <p>Phone: +31 623 456 789</p>
                            <p className={style["contact-bttm"]}>Address: Kensington 123, Londen, UK</p>
                            Feel free to get in touch. We look forward to hearing from you and sharing our love for yarn
                            together!
                        </article>
                    </main>
                </div>


        </>
    )
}

export default Aboutus;