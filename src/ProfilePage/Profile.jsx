import style from "./Profile.module.css"
import Navigation from "../NavbarPage/Navigation.jsx";
import {useEffect, useState} from "react";
import axios from "axios";

function Profile() {
    const [profile, setProfile] = useState([]);
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);
    const [product, setProduct] = useState([]);
    const [formState, setFormState] = useState('');

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
            console.log(response.data)
        } catch (e) {
            console.error(e);
            toggleError(true);
        }
        toggleLoading(false)
    }
    async function deleteProduct() {
        console.log(formState)
        try {
            const response = await axios.delete(`http://localhost:8080/product/${formState}`);
            console.log(response)
        } catch (e) {
            console.error(e);
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
                    <>
                        <p key={profile.id}>First name: {profile.firstName}</p>
                        <p>Last name: {profile.lastName}</p>
                        <p>Email: {profile.email}</p>
                    </>
                ))}
            </div>
            <form >
                <select name="productId" onChange={handleInputChange}>
                    <option value="">Select a product</option>
                    {product &&
                        product.map((product) => { return (
                        <option key={product.id} value={product.id}>{product.name}</option>)})}
                </select>

                <button type="button" onClick={deleteProduct}>Delete product</button>
            </form>

        </>
    )
}

export default Profile;