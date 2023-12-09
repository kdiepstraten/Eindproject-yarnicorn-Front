import './App.css'
import {Route, Routes} from "react-router-dom";
import Home from "./Pages/HomePage/Home.jsx";
import AddProducts from "./Pages/AddProductsPage/AddProducts.jsx";
import ProductsPage from "./Pages/ProductsPage/ProductsPage.jsx";
import Aboutus from "./Pages/AboutusPage/Aboutus.jsx";
import Profile from "./Pages/ProfilePage/Profile.jsx";
import Error from "./Pages/Error/Error.jsx";
import Login from "./Pages/LoginPage/Login.jsx";
import Reservation from "./Pages/ReservationPage/Reservation.jsx";
import Registration from "./Pages/RegistrationPage/Registration.jsx";
import ProductDetail from "./Pages/ProductDetailPage/ProductDetail.jsx";
import ReservationList from "./Pages/ReservationListPage/ReservationList.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import {useContext} from "react";
import {AuthContext} from "./Context/AuthContext.jsx";



function App() {

    const {role} = useContext(AuthContext);

    return (
        <>
            <div className="app--container">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/addproducts" element={ role === "ROLE_ADMIN" ? <AddProducts/> : <Error/>}/>
                    <Route path="/products/:categoryName" element={<ProductsPage/>}/>
                    <Route path="/products-detail/:productId" element={<ProductDetail/>}/>
                    <Route path="/aboutus" element={<Aboutus/>}/>
                    <Route path="/profile" element={  role === "ROLE_ADMIN" ? <Profile/> : <Error/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/reservation" element={<Reservation/>}/>
                    <Route path="/registration" element={<Registration/>}/>
                    <Route path="/reservation-list"  element={ role === "ROLE_ADMIN" ? <ReservationList/> : <Error/> } />
                    <Route path="*" element={<Error/>}/>
                </Routes>
                <Footer/>
            </div>
        </>
    )
}

export default App
