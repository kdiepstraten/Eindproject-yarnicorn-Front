import style from "./NavigationHome.module.css"
import {NavLink} from "react-router-dom";

function NavigationHome(){
    return(
        <nav className={`${style["home-link"]}${style.link}`}>
            <NavLink className={style["link"]} to="/">Home</NavLink>
        </nav>
    )
}
export default NavigationHome;