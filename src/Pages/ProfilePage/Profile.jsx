import style from "./Profile.module.css"
import Navigation from "../NavbarPage/Navigation.jsx";
import {useContext, useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import Button from "../../Components/Button.jsx";
import {AuthContext} from "../../Context/AuthContext.jsx";
import Spinner from "../../Components/Spinner.jsx";

function Profile() {

    const [product, setProduct] = useState([]);
    const [formState, setFormState] = useState('');
    const navigate = useNavigate();
    const {token} = useContext(AuthContext);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);


    useEffect(() => {
        void fetchProduct();
    }, []);

    async function fetchProduct() {
        const token = localStorage.getItem("token")
        setError(false);
        setLoading(true);
        try {
            const response = await axios.get('http://localhost:8080/product', {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `${token}`
                }
            });
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

    async function handleSubmit(e) {
        e.preventDefault();
        setError(false);
        setLoading(true);
        try {
            const response = await axios.delete(`http://localhost:8080/product/${formState}`, {
                headers: {
                    'Content-Type': 'application/json',
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

    const handleInputChange = (e) => {
        setFormState(e.target.value)
    }


    return (
        <>
            {loading ? <Spinner/>
                :
                <>
                    <Navigation/>
                    <div className={style.header}></div>


                    <h3>Only available for Admin:</h3>
                    <form onSubmit={handleSubmit}>
                        <select
                            name="productId"
                            onChange={handleInputChange}>
                            <option value="">Select a product</option>
                            {product &&
                                product.map((product) => {
                                    return (
                                        <option
                                            key={product.id}
                                            value={product.id}>{product.name}</option>)
                                })}
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
                    {error && (<p className={style.error}>Er is iets mis gegaan....Herlaad de pagina. Of neem contact op met de eigenaar.</p>)}
                </>}

        </>
    )
}

export default Profile;