import {useContext, useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import style from "../Pages/HomePage/home.module.css";
import axios from "axios";
import Button from "./Button.jsx";
import {AuthContext} from "../Context/AuthContext.jsx";
import Spinner from "./Spinner.jsx";



function Review() {
    const [review, toggleReview] = useState(false);
    const [data, setData] = useState([]);
    const {register, handleSubmit, formState: {errors}} = useForm();
    const {token, role} = useContext(AuthContext);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        void getReviews()

    }, [review]);


     async function handleFormSubmit(data) {

        try {
            setError(false);
            setLoading(true);
            const response = await axios.post('http://localhost:8080/review', data, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `${token}`
                }
            });

            console.log(response.data);
            toggleReview(!review)

        } catch (e) {
            console.error(e);
            console.error("Error status:", e.response.status);
            console.error("Error data:", e.response.data);
            setError(true);
        } finally {
            setLoading(false);
        }
    }

    async function getReviews() {
        try {
            setError(false);
            setLoading(true);
            const response = await axios.get('http://localhost:8080/review', {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `${token}`
                }
            });
            setData(response.data);

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
                <>
                    {data.map((review) => (
                        <div className={style["review-box"]} key={review.id}>
                            <h2>{review.fullName}</h2>
                            <p>{review.review}</p>
                        </div>
                    ))}
                    {role === 'ROLE_ADMIN' && (
                        <>
                    <form onSubmit={handleSubmit(handleFormSubmit)}>



                        <input
                            className={style.input}
                            type="text"
                            name="fullName"
                            placeholder="Full name"
                            {...register("fullName", {
                                required: {
                                    value: true,
                                    message: "Name is required"
                                }
                            })}
                        />

                        <textarea
                            className={style.input}
                            name="review"
                            id="review"
                            placeholder="Post here a review"
                            rows="10"
                            {...register("review", {
                                required: {
                                    value: true,
                                    message: "Review is required"
                                }
                            })}
                        />

                        <Button
                            type="submit"
                            text="Submit"/>
                    </form>
                    {error && (
                        <p className={style.error}>Er is iets mis gegaan....Herlaad de pagina. Of neem contact op met de
                            eigenaar.</p>)}
                </>)}

                </>}
        </>
    )
}

export default Review;