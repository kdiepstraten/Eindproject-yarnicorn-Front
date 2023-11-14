import style from "./Profile.module.css"
import Navigation from "../NavbarPage/Navigation.jsx";
import {useContext, useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import Button from "../../Components/Button.jsx";
import {AuthContext} from "../../Context/AuthContext.jsx";

function Profile() {

    const [profile, setProfile] = useState([]);
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);
    const [product, setProduct] = useState([]);
    const [formState, setFormState] = useState('');
    const navigate = useNavigate();
    const { token } = useContext(AuthContext);

    useEffect(() => {
        void fetchProfile();
        void fetchProduct();

    }, []);

    async function fetchProduct() {
        toggleError(false);
        toggleLoading(true);
        try {
            const response = await axios.get('http://localhost:8080/product', {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `${token}`
                }
                });
            setProduct(response.data);
            console.log(response.data)
        } catch (e) {
            console.error(e);
            console.error("Error status:", e.response.status);
            console.error("Error data:", e.response.data);
            toggleError(true);
        }
        toggleLoading(false)
    }

    async function fetchProfile() {
        toggleError(false);
        toggleLoading(true);
        try {
            const response = await axios.get('http://localhost:8080/profile', {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `${token}`
                }
                });
            setProfile(response.data);

        } catch (e) {
            console.error(e);
            console.error("Error status:", e.response.status);
            console.error("Error data:", e.response.data);
            toggleError(true);
        }
        toggleLoading(false)
    }
    async function handleSubmit(e) {
        e.preventDefault()
        try {
            const response = await axios.delete(`http://localhost:8080/product/${formState}`, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `${token}`
                }
                });
            console.log(response)

            await fetchProduct()
        } catch (e) {
            console.error(e);
            console.error("Error status:", e.response.status);
            console.error("Error data:", e.response.data);
        }
    }

    const handleInputChange = (e) => {
        setFormState(e.target.value)
    }

    // if (!isAuth) {
    //     return <div>Please log in</div>;
    // }

    return (
        <>
            <Navigation/>
            <div className={style.header}></div>
            <div className={style.background}>
                {profile.map((profile) => (
                    <div key={profile.id} className={style.profile}>
                        <p>First name: {profile.firstName}</p>
                        <p>Last name: {profile.lastName}</p>
                        <p>Email: {profile.email}</p>
                    </div>
                ))}
            </div>

            <h3>Only available for Admin:</h3>
            <form onSubmit={handleSubmit}>
                <select
                    name="productId"
                    onChange={handleInputChange}>
                    <option value="">Select a product</option>
                    {product &&
                        product.map((product) => { return (
                        <option
                            key={product.id}
                            value={product.id}>{product.name}</option>)})}
                </select>

                <Button
                    type="submit"
                    text="Delete product"/>

            </form>


            <Button
                type="button"
                text="Reserve list"
                click={() => navigate("/reservation-list")}
                />
        </>
    )
}

export default Profile;