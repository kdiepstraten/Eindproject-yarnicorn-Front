import {NavLink} from "react-router-dom";
import "./Navigation.css"
import {AuthContext} from "../../Context/AuthContext.jsx";
import {useContext} from "react";


function Navigation(){
    const { isAuthenticated, logout, user } = useContext(AuthContext);

    return(
        <>

        <nav className="navigation">

            <ul>
                <li><NavLink className={({isActive}) => isActive ? 'active' : 'default'} to="/">Home</NavLink></li>
                <li><NavLink className={({isActive}) => isActive ? 'active' : 'default'} to={`/products/leeg`}>Products</NavLink></li>
                <li><NavLink className={({isActive}) => isActive ? 'active' : 'default'} to="/aboutus">About us</NavLink></li>
                {isAuthenticated && (
                <li><NavLink className={({isActive}) => isActive ? 'active' : 'default'} to="/addproducts">Add Product</NavLink></li>
                )}
                {!isAuthenticated && (
                <li><NavLink className={({isActive}) => isActive ? 'active' : 'default'} to="/registration">Register</NavLink></li>
                )}
                {!isAuthenticated && (
                <li><NavLink className={({isActive}) => isActive ? 'active' : 'default'} to="/login">Login</NavLink></li>
                )}
                {isAuthenticated && (
                <li><NavLink className={({isActive}) => isActive ? 'active' : 'default'} to="/profile">Profile</NavLink></li>
                )}
                {isAuthenticated && (
                <li><NavLink className="default"
                             onClick={logout}
                             to="/">Logout</NavLink></li>
                    )}
                {isAuthenticated && (<p className="welcome">Welcome: {user.username}</p>)}
            </ul>
        </nav>
        </>
    )
}
export default Navigation;