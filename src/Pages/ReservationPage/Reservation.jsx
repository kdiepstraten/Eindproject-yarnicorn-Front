import style from "./Reservation.module.css"
import {useForm} from "react-hook-form";
import NavigationHome from "../../Components/NavigationHome/NavigationHome.jsx";
import {useLocation, useNavigate} from "react-router-dom";
import axios from "axios";
import Button from "../../Components/Button/Button.jsx";

import Spinner from "../../Components/Spinner/Spinner.jsx";
import {useContext, useState} from "react";
import {AuthContext} from "../../Context/AuthContext.jsx";

function Reservation() {

    const {register, handleSubmit} = useForm();
    const navigate = useNavigate();
    const { token } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const location = useLocation();
    const productDetails = location.state;


    async function handleFormSubmit(data) {

        try {
            setError(false);
            setLoading(true);
            const response = await axios.post('http://localhost:8080/reservation', data, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `${token}`
                }
                });
            navigate("/products/leeg");
        } catch (e) {
            console.error(e);
            console.error("Error status:", e.response.status);
            console.error("Error data:", e.response.data);
            setError(true);
        } finally {
            setLoading(false);

        }
    }

    return (
        <>
            {loading ? <Spinner/>
            :
            <div className={style.background}>

                <main className={style.container}>
                    <NavigationHome/>
                    <form onSubmit={handleSubmit(handleFormSubmit)} className={style.form}>

                        <h1>Welcome</h1>
                        <p className={style.text}>Please fill out this form</p>
                        <p className={style.required}>All fields are required</p>
                        <input
                            className={style.input}
                            type="text"
                            id="fullName"
                            placeholder="Full name"
                            {...register("fullName", {
                                required: {
                                    value: true,
                                    message: "Full name is required"
                                }
                            })}
                        />

                        <input
                            className={style.input}
                            type="text"
                            id="email"
                            placeholder="Email"
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: "Email is required"
                                }
                            })}
                        />

                        <input
                            className={style.input}
                            type="text"
                            id="street"
                            placeholder="Street name"
                            {...register("street", {
                                required: {
                                    value: true,
                                    message: "Street is required"
                                }
                            })}
                        />

                        <input
                            className={style.input}
                            type="text"
                            id="streetNumber"
                            placeholder="Street number"
                            {...register("streetNumber", {
                                required: {
                                    value: true,
                                    message: "Street number is required"
                                }
                            })}
                        />

                        <input
                            className={style.input}
                            type="text"
                            id="zipcode"
                            placeholder="Zipcode"
                            {...register("zipcode", {
                                required: {
                                    value: true,
                                    message: "zipcode is required"
                                }
                            })}
                        />

                        <input
                            className={style.input}
                            type="text"
                            id="city"
                            placeholder="City"
                            {...register("city", {
                                required: {
                                    value: true,
                                    message: "City is required"
                                }
                            })}
                        />

                        <input
                            className={style.input}
                            type="number"
                            id="amount"
                            placeholder="Amount of yarn"
                            {...register("amount", {
                                required: {
                                    value: true,
                                    message: "City is required"
                                }
                            })}
                        />

                        <input
                            className={style.input}
                            type="number"
                            id="productid"
                            placeholder="Procuct id"
                            {...register("productId", {
                                required: {
                                    value: true,
                                    message: "Product id is required"
                                }
                            })}
                            defaultValue={productDetails.id}
                        />


                        <textarea
                            className={`${style["input"]} ${style["reservation-text-area"]}`}
                            id="comment"
                            placeholder="Comment"
                            rows="6"
                            {...register("comment", {
                                required: {
                                    value: true,
                                    message: "Product id is required"
                                }
                            })}
                        />

                        <Button
                            type="submit"
                            text={loading ? 'Submitting...' : 'Submit'}
                            />
                    </form>
                    {error && (<p className={style.error}>Er is iets mis gegaan....Herlaad de pagina. Of neem contact op met de eigenaar.</p>)}
                </main>

            </div>}
        </>
    )
}

export default Reservation;