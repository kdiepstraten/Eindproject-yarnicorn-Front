import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import style from "../HomePage/home.module.css";

function Review(){
    const {register, handleSubmit, formState: {errors}} = useForm();
    const[star, setStar] = useState();

    function handleFormSubmit(data, e) {
        console.log(data);
        e.preventDefault()
    }
    return(
        <>
            <form onSubmit={handleSubmit(handleFormSubmit)}>

                <input
                    type="text"
                    name="fullname"
                    placeholder="Full name"
                    {...register("fullname", {
                        required: {
                            value: true,
                            message: "Name is required"
                        }
                    })}
                />

                <textarea
                    name="review"
                    id="review"
                    placeholder="Review"
                    rows="10"
                    {...register("review",{
                        required: {
                            value: true,
                            message: "Review is required"
                        }
                    })}
                />
                <input
                    className={style.star}
                    type="radio"
                    id="star"
                    name="role"
                    value="1"
                    {...register("radio", {
                        required: {
                            type: "radio",
                            message: "One is required"
                        }
                    })}
                />
                <label htmlFor="star"></label>
                <input
                    type="radio"
                    id="admin"
                    name="role"
                    value="2"
                    {...register("radio", {
                        required: {
                            type: "radio",
                            message: "One is required"
                        }
                    })}
                />
                <input
                    type="radio"
                    id="admin"
                    name="role"
                    value="3"
                    {...register("radio", {
                        required: {
                            type: "radio",
                            message: "One is required"
                        }
                    })}
                />
                <input
                    type="radio"
                    id="admin"
                    name="role"
                    value="4"
                    {...register("radio", {
                        required: {
                            type: "radio",
                            message: "One is required"
                        }
                    })}
                />
                <input
                    type="radio"
                    id="admin"
                    name="role"
                    value="5"
                    {...register("radio", {
                        required: {
                            type: "radio",
                            message: "One is required"
                        }
                    })}
                />
                <button className={style.btn}>Submit</button>
            </form>
        </>
    )
}
export default Review;