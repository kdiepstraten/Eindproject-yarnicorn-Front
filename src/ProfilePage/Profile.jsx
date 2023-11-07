import style from "./Profile.module.css"
import Navigation from "../NavbarPage/Navigation.jsx";
import {useEffect, useState} from "react";
import axios from "axios";

function Profile() {
    const [profile, setProfile] = useState([]);
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);
    const [formState, setFormState] = useState({
        ProductId: ''
    });

    useEffect(() => {
        void fetchProfile();
    }, []);

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
        try {
            const response = await axios.delete('http://localhost:8080/product/${formState.productId}');
            console.log(response.data)
        } catch (e) {
            console.error(e);
        }
    }

    const handleInputChange = (event) => {
        setFormState({
            ...formState,
            [event.target.name]: event.target.value
        })

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
                <input
                    type="text"
                    name="productId"
                    placeholder="Product Id"
                    value={formState.productId}
                    onChange={handleInputChange}
                />
                <button type="button" onClick={deleteProduct}>Delete product</button>
            </form>

        </>
    )
}

export default Profile;