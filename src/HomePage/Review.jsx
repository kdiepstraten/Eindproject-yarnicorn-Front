import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import style from "../HomePage/home.module.css";
import axios from "axios";

function Review() {
    const[review, toggleReview] = useState(false);
    const[data, setData] = useState([]);
    const {register, handleSubmit, formState: {errors}} = useForm();
    const [error, toggleError] = useState(false);

    useEffect(() => {
        void getReviews()
    }, [review]);

    async function handleFormSubmit(data) {

        try {
            const response = await axios.post('http://localhost:8080/review', data
//TODO: useContext toevoegen voor toegang tot de back.
            );
            console.log(response.data);
            toggleReview(!review)
        } catch (e) {
            console.error(e);
            toggleError(true);
        }

    }

    async function getReviews() {
        try {
            const response = await axios.get('http://localhost:8080/review')
            setData(response.data);
            // console.log(response.data);
        } catch (e) {
            console.error(e);
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

                <button type="submit" className={style.button}>Submit</button>
            </form>
        </>
    )
}

export default Review;