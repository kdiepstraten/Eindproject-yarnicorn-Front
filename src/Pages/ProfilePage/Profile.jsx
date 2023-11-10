import style from "./Profile.module.css"
import Navigation from "../NavbarPage/Navigation.jsx";
import {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import Button from "../../Components/Button.jsx";
function Profile() {

    const [profile, setProfile] = useState([]);
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);
    const [product, setProduct] = useState([]);
    const [formState, setFormState] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        void fetchProfile();
        void fetchProduct();

    }, []);

    async function fetchProduct() {
        toggleError(false);
        toggleLoading(true);
        try {
            const response = await axios.get('http://localhost:8080/product');
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
            const response = await axios.get('http://localhost:8080/profile');
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
            const response = await axios.delete(`http://localhost:8080/product/${formState}`);
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