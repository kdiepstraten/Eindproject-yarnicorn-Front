import style from "./Error.module.css"
import {NavLink} from "react-router-dom";
import wool from "../assets/Error/animation wool.gif"

function Error(){
    return(
        <>
            <div className={style.container}>
                <figure className={style.figure}>
                    <img src={wool} alt="wool"/>
                </figure>
                <p className={style.message}>The ball of yarn rolled the other way...</p>
                <NavLink className="nav-link" to="/">Click here to go back to Home</NavLink>
            </div>
        </>
    )
}
export default Error;