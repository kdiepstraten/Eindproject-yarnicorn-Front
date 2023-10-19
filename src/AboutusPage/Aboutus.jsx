import style from "./Aboutus.module.css"
import Navigation from "../NavbarPage/Navigation.jsx";

function Aboutus() {
    return (
        <>
            <Navigation/>
            <div className={style.background}>
                <div className={style.container}>
                    <h1>Learn more about the founder off Yarnicorn</h1>
                </div>
                <div className={style.flex}>
                <p className={style["text-box"]}>My Yarn Journey
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aperiam beatae nisi soluta vero! Ab ad, aliquid assumenda commodi consectetur cum cumque eaque earum enim excepturi facere fuga in iste magni modi molestiae molestias nam nemo nihil obcaecati omnis optio placeat praesentium quae quibusdam quod, repudiandae, saepe sit tempora voluptate?</p>

                <p className={`${style["align"]} ${style["text-box"]}`}>Mission and goal
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, debitis dicta dolor dolore dolores eligendi eveniet exercitationem expedita inventore iure iusto laudantium maiores molestias nulla optio perferendis repudiandae sequi similique soluta tempore ullam vel voluptas voluptatum. Amet ea eaque impedit quidem repudiandae unde! Consequatur ducimus omnis ratione tempore tenetur veritatis!</p>

                <p className={style["text-box"]}>Contact info
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid autem deserunt, ducimus, earum, fugit id ipsa magni minima neque nesciunt obcaecati omnis placeat provident quaerat quas quod rem ullam! Doloribus earum hic minus nihil quis? Asperiores assumenda culpa earum, est magnam numquam obcaecati officiis perferendis, possimus quas, repudiandae sed vero!</p>
                </div>
            </div>
        </>
    )
}

export default Aboutus;