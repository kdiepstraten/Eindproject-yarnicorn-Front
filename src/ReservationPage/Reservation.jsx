import style from "./Reservation.module.css"
import {useForm} from "react-hook-form";
import NavigationHome from "../NavigationHomePage/NavigationHome.jsx";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import Button from "../Button.jsx";


function Reservation() {
    const {register, handleSubmit} = useForm();
    const navigate = useNavigate();



    async function handleFormSubmit(data) {
        console.log(data);
        try {
            const response = await axios.post('http://localhost:8080/reservation', data);
            console.log(response.data)
            navigate("/products/leeg");
        } catch (e) {
            console.error(e);
        }
    }
    return (
        <>
            <div className={style.background}>

                <div className={style.container}>
                    <NavigationHome/>
                    <form onSubmit={handleSubmit(handleFormSubmit)} className={style.form}>

                        <h1>Welcome</h1>
                        <p className={style.text}>Please fill out this form</p>

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
                        />


                        <textarea
                            className={`${style["input"]} ${style["reservation-text-area"]}`}
                            id="comment"
                            placeholder="Comment"
                            rows="6"
                            {...register("comment")}
                        />

                        <Button
                            type="submit"
                            text="Submit"/>
                    </form>
                </div>

            </div>
        </>
    )
}

export default Reservation;