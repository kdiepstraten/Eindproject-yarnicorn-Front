import {useContext, useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import style from "../Pages/HomePage/home.module.css";
import axios from "axios";
import Button from "./Button.jsx";
import {AuthContext} from "../Context/AuthContext.jsx";


function Review() {
    const[review, toggleReview] = useState(false);
    const[data, setData] = useState([]);
    const {register, handleSubmit, formState: {errors}} = useForm();
    const [error, toggleError] = useState(false);
    const { token } = useContext(AuthContext);


    useEffect(() => {
        void getReviews()
    }, [review]);
    async function handleFormSubmit(data) {
        console.log("Token after submit: ", token);
        try {
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
            toggleError(true);
        }
    }


    async function getReviews() {
        try {
            const response = await axios.get('http://localhost:8080/review',{
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `${token}`
                }
                });
            setData(response.data);
            // console.log(response.data);
        } catch (e) {
            console.error(e);
            console.error("Error status:", e.response.status);
            console.error("Error data:", e.response.data);
            toggleError(true);
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit(handleFormSubmit)}>

                {data.map((review) => (
                    <div className={style["review-box"]} key={review.id}>
                        <h2>{review.fullName}</h2>
                        <p>{review.review}</p>
                    </div>
                ))}

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
        </>
    )
}

export default Review;