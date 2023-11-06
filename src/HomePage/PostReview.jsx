import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import style from "../HomePage/home.module.css";
import axios from "axios";

function PostReview() {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const [error, toggleError] = useState(false);

    async function handleFormSubmit(data) {
        console.log(data)
        try {
            const response = await axios.post("http://localhost:8080/review", data, {
                headers: {
//TODO: useContext toevoegen voor toegang tot de back.
                }
            });
            console.log(response.data);
        } catch (e) {
            console.error(e);
            toggleError(true);
        }

    }

    return (
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
                            message: "PostReview is required"
                        }
                    })}
                />

                <button type="submit" className={style.button}>Submit</button>
            </form>
        </>
    )
}

export default PostReview;