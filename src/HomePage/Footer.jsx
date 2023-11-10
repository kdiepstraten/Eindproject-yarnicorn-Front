import github from "../assets/icons/github (2).svg";
import facebook from "../assets/icons/facebook (3).svg";
import insta from "../assets/icons/instagram (2).svg";
import {NavLink} from "react-router-dom";
import style from "./home.module.css";


function Footer(){
    return(
        <>
        <div className={style.footer} >
            <NavLink to="https://github.com/kdiepstraten?tab=repositories" target="_blank"><img className={style.icon} src={github} alt="github"/></NavLink>
            <NavLink to="https://facebook.com/" target="_blank"><img className={style.icon} src={facebook} alt="github"/></NavLink>
            <NavLink to="https://www.instagram.com/koen_eugene/?next=%2F" target="_blank"><img className={style.icon} src={insta} alt="github"/></NavLink>
        </div>
        <p>All rights reserved</p>
        </>
    )
}
export default Footer;