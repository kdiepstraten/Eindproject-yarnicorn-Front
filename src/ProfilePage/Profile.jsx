import style from "./Profile.module.css"
import Navigation from "../NavbarPage/Navigation.jsx";

function Profile(){
    return(
        <>
            <Navigation/>
        <div className={style.background}>
            <p>test</p>
        </div>
        </>
    )
}
export default Profile;