import style from "./Registration.module.css"
import NavigationHome from "../NavigationHomePage/NavigationHome.jsx";
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";

function Registration() {
    const {register, handleSubmit} = useForm();
    const navigate = useNavigate();
    function handleFormSubmit(data) {
        console.log(data);
        navigate("/login");
    }

    return (
        <>
            <div className={style.background}>
                <div className={style.container}>
                    <NavigationHome/>
                    <form className={style.form}
                          onSubmit={handleSubmit(handleFormSubmit)}>

                        <h1 className={style.title}>Welcome</h1>


                        <input
                            className={style.input}
                            type="text"
                            id="firstName"
                            placeholder="First name"
                            {...register("firstName", {
                                required: {
                                    value: true,
                                    message: "First name is required"
                                }
                            })}
                        />


                        <input
                            className={style.input}
                            type="text"
                            id="lastName"
                            placeholder="Last name"
                            {...register("lastName", {
                                required: {
                                    value: true,
                                    message: "Last name is required"
                                }
                            })}

                        />


                        <input
                            className={style.input}
                            type="email"
                            id="email"
                            placeholder="Email"
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: "Email is required"
                                },
                                validate: (value) => value.includes('@') || "Email requires an @ "
                            })}
                        />


                        <input
                            className={style.input}
                            type="password"
                            id="password"
                            placeholder="Password (min 8 characters"
                            {...register("password", {
                                required: {
                                    value: true,
                                    message: "Password is required"
                                }
                            })}
                        />


                        <input
                            className={style.input}
                            type="password"
                            id="confirmPassword"
                            placeholder="Confirm password"
                            {...register("confirmPassword", {
                                required: {
                                    value: true,
                                    message: "Passwords needs to be the same"
                                }
                            })}
                        />

                        <div className={style["radio-container"]}>
                        <div className={style.radio}>
                            <input
                                type="radio"
                                id="admin"
                                name="role"
                                value="admin"
                                {...register("radio", {
                                    required: {
                                        type: "radio",
                                        message: "One is required"
                                    }
                                })}
                            />
                            <label className={style.label}>Admin</label>
                        </div>
                        <div className={style.radio}>
                            <input
                                type="radio"
                                id="user"
                                name="role"
                                value="user"
                                {...register("radio", {
                                    required: {
                                        type: "radio",
                                        message: "One is required"
                                    }
                                })}
                            />
                            <label className={style.label}>User</label>
                        </div>
                        </div>

                        <div className={style["checkbox-container"]}>
                            <input
                                type="checkbox"
                                className="checkbox"
                                {...register("radio", {
                                    required: {
                                        type: "checkbox",
                                        message: "One is required"
                                    }
                                })}
                            />
                            <label className={style.label}>I agree with the terms.</label>
                        </div>

                        <button className={style.btn}
                                type="submit">Submit</button>

                    </form>
                </div>
            </div>
        </>
    )
}

export default Registration;