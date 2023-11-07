import style from "./Registration.module.css"
import NavigationHome from "../NavigationHomePage/NavigationHome.jsx";
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import axios from "axios";

function Registration() {
    const {register, handleSubmit} = useForm();
    const navigate = useNavigate();

    function handleFormSubmit(data) {
        console.log(data);
        void postRegistration(data);
        navigate("/login");
    }

    async function postRegistration(data) {
        try {
            const response = await axios.post("http://localhost:8080/profile", data);
            console.log(response.data);
        } catch (e) {
            console.error(e);
        }
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
                            id="username"
                            placeholder="Username"
                            {...register("username", {
                                required: {
                                    value: true,
                                    message: "Username is required"
                                }
                            })}
                        />

                        <input
                            className={style.input}
                            type="password"
                            id="password"
                            placeholder="Password"
                            {...register("password", {
                                required: {
                                    value: true,
                                    message: "Password is required"
                                }
                            })}
                        />

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

                        <div className={style["radio-container"]}>
                        <div className={style.radio}>
                            <input
                                type="radio"
                                id="admin"
                                name="role"
                                value="ADMIN"
                                {...register("roles", {
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
                                value="USER"
                                {...register("roles", {
                                    required: {
                                        type: "radio",
                                        message: "One is required"
                                    }
                                })}
                            />
                            <label className={style.label}>User</label>
                        </div>
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