import style from "./Profile.module.css"
import Navigation from "../NavbarPage/Navigation.jsx";
import {useContext, useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import Button from "../../Components/Button/Button.jsx";
import {AuthContext} from "../../Context/AuthContext.jsx";
import Spinner from "../../Components/Spinner/Spinner.jsx";
import {Dropdown} from "../../Components/Dropdown/Dropdown.jsx";
import ProductForm from "../../Components/ProductForm/ProductForm.jsx";

function Profile() {

    const [product, setProduct] = useState([]);
    const [formState, setFormState] = useState('');
    const navigate = useNavigate();
    const {token} = useContext(AuthContext);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [profile, setProfile] = useState([]);
    const [profileState, setProfileState] = useState('');
    const [change, setChange] = useState('');
    const [oneProduct, setOneProduct] = useState([]);

    useEffect(() => {
        void fetchProduct();
        void fetchProfile();
    }, []);

    // Get products
    async function fetchProduct() {
        setError(false);
        setLoading(true);
        try {
            const response = await axios.get('http://localhost:8080/product');
            setProduct(response.data);
        } catch (e) {
            console.error(e);
            console.error("Error status:", e.response.status);
            console.error("Error data:", e.response.data);
            setError(true);
        } finally {
            setLoading(false);
        }
    }

    // Delete product
    async function handleSubmit(e) {
        e.preventDefault();
        setError(false);
        setLoading(true);
        try {
            const response = await axios.delete(`http://localhost:8080/product/${formState}`, {
                headers: {
                    Authorization: `${token}`
                }
            });
            await fetchProduct()
        } catch (e) {
            console.error(e);
            console.error("Error status:", e.response.status);
            console.error("Error data:", e.response.data);
            setError(true);
        } finally {
            setLoading(false);
        }
    }

    // Get profiles
    async function fetchProfile() {
        const token = localStorage.getItem("token")
        setError(false);
        setLoading(true);
        try {
            const response = await axios.get('http://localhost:8080/profile', {
                headers: {
                    Authorization: `${token}`
                }
            });
            setProfile(response.data);
        } catch (e) {
            console.error(e);
            console.error("Error status:", e.response.status);
            console.error("Error data:", e.response.data);
            setError(true);
        } finally {
            setLoading(false);
        }
    }

    // Delete profile
    async function handleSubmitProfile(e) {
        e.preventDefault();
        setError(false);
        setLoading(true);
        try {
            const response = await axios.delete(`http://localhost:8080/profile/${profileState}`, {
                headers: {
                    Authorization: `${token}`
                }
            });

            await fetchProfile()
        } catch (e) {
            console.error(e);
            console.error("Error status:", e.response.status);
            console.error("Error data:", e.response.data);
            setError(true);
        } finally {
            setLoading(false);
        }
    }

    // Change product
    async function handleChange(e) {
        e.preventDefault();
        setError(false);
        setLoading(true);
        try {
            const response = await axios.get(`http://localhost:8080/product/${change}`, {
                headers: {
                    Authorization: `${token}`
                }
            });
            setOneProduct(response.data);
        } catch (e) {
            console.error(e);
            console.error("Error status:", e.response.status);
            console.error("Error data:", e.response.data);
            setError(true);
        } finally {
            setLoading(false);
        }
    }

    // Handle input change for product
    const handleInputChange = (e) => {
        setFormState(e.target.value)
    }

    // Handle input change for profile
    const handleInputChangeProfile = (e) => {
        setProfileState(e.target.value)
    }

    // Handle change product
    const handleProductChange = (e) => {
        setChange(e.target.value)
    }

    return (
        <>
            {loading ? <Spinner/>
                :
                <>
                    <Navigation/>

                    <header className={style.header}></header>

                    <main className={style.main}>
                        <p className={style.title}>Change Product</p>

                        <Dropdown
                            onSubmit={handleChange}
                            onChange={handleProductChange}
                            input={"Select a product"}
                            state={product}
                            value="name"
                            btn_type={"submit"}
                            btn_text={"Select product"}
                        />
                        <ProductForm product={oneProduct}/>

                        <p className={style.title}>Delete a product</p>
                        <Dropdown
                            onSubmit={handleSubmit}
                            onChange={handleInputChange}
                            input={"Select a product"}
                            state={product}
                            value="name"
                            btn_type={"submit"}
                            btn_text={"Delete product"}
                        />

                        <p className={style.title}>Delete profile</p>
                        <Dropdown
                            onSubmit={handleSubmitProfile}
                            onChange={handleInputChangeProfile}
                            input={"Select a profile"}
                            state={profile}
                            value="firstName"
                            btn_type={"submit"}
                            btn_text={"Delete profile"}
                        />

                        <p className={style.title}>List with reservations</p>
                        <Button
                            type="button"
                            text="Reserve list"
                            click={() => navigate("/reservation-list")}
                        />

                        {error && (
                            <p className={style.error}>Er is iets mis gegaan....Herlaad de pagina. Of neem contact op
                                met de
                                eigenaar.</p>)}
                    </main>
                </>}

        </>
    )
}

export default Profile;