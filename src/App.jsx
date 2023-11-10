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
import ReservationList from "./ReservationListPage/ReservationList.jsx";
import Footer from "./HomePage/Footer.jsx";


function App() {


    return (
        <>
            <div className={style["app--container"]}>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/addproducts" element={<AddProducts/>}/>
                    <Route path="/products/:categoryName" element={<ProductsPage/>}/>
                    <Route path="/products-detail/:productId" element={<ProductDetail/>}/>
                    <Route path="/aboutus" element={<Aboutus/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/reservation" element={<Reservation/>}/>
                    <Route path="/registration" element={<Registration/>}/>
                    <Route path="/reservation-list" element={<ReservationList/>}/>
                    <Route path="*" element={<Error/>}/>
                </Routes>
                <Footer/>
            </div>
        </>
    )
}

export default App
