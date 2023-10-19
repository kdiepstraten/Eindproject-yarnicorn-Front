import style from './App.module.css'
import {Route, Routes} from "react-router-dom";
import Home from "./HomePage/Home.jsx";
import AddProducts from "./AddProductsPage/AddProducts.jsx";
import ProductsPage from "./ProductsPage/ProductsPage.jsx";
import Aboutus from "./AboutusPage/Aboutus.jsx";
import Profile from "./ProfilePage/Profile.jsx";
import Error from "./Error/Error.jsx";
import Login from "./LoginPage/Login.jsx";
import Reservation from "./ReservationPage/Reservation.jsx";
import Registration from "./RegistrationPage/Registration.jsx";
import ProductDetail from "./ProductDetailPage/ProductDetail.jsx";


function App() {


    return (
        <>
            <div className={style["app--container"]}>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/addproducts" element={<AddProducts/>}/>
                    <Route path="/products" element={<ProductsPage/>}/>
                    <Route path="/products-detail" element={<ProductDetail/>}/>
                    <Route path="/aboutus" element={<Aboutus/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/reservation" element={<Reservation/>}/>
                    <Route path="/registration" element={<Registration/>}/>
                    <Route path="*" element={<Error/>}/>
                </Routes>
            </div>
        </>
    )
}

export default App
