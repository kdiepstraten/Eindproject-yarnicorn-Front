import {NavLink} from "react-router-dom";
import "./Navigation.css"
function Navigation(){
    return(
        <nav className="navigation">
            <ul>
                <li><NavLink className={({isActive}) => isActive ? 'active' : 'default'} to="/">Home</NavLink></li>
                <li><NavLink className={({isActive}) => isActive ? 'active' : 'default'} to="/products">Products</NavLink></li>
                <li><NavLink className={({isActive}) => isActive ? 'active' : 'default'} to="/aboutus">About us</NavLink></li>
                <li><NavLink className={({isActive}) => isActive ? 'active' : 'default'} to="/addproducts">Add Product</NavLink></li>
                <li><NavLink className={({isActive}) => isActive ? 'active' : 'default'} to="/registration">Registrate</NavLink></li>
                <li><NavLink className={({isActive}) => isActive ? 'active' : 'default'} to="/login">Login</NavLink></li>
            </ul>
        </nav>
    )
}
export default Navigation;