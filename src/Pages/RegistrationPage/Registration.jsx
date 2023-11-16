import style from "./Registration.module.css"
import NavigationHome from "../NavigationHomePage/NavigationHome.jsx";
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import Button from "../../Components/Button.jsx";
import {useContext, useState} from "react";
import {LoadingContext} from "../../Context/LoadingContext.jsx";
import Spinner from "../../Components/Spinner.jsx";
import {ErrorContext} from "../../Context/ErrorContext.jsx";

function Registration() {
    const {register, handleSubmit} = useForm();
    const navigate = useNavigate();
    const {startLoading, stopLoading, loading} = useContext(LoadingContext);
    const {error, handleError, clearError} = useContext(ErrorContext);

    async function handleFormSubmit(data) {
        const rolesArray = data.roles ? [data.roles] : [];
        const newData = {...data, roles: rolesArray};
        clearError();
        try {
            startLoading(<Spinner/>);
            const response = await axios.post('http://localhost:8080/users', newData,);
            console.log(response.data);
            navigate("/login");
        } catch (e) {
            console.error(e);
            console.error("Error status:", e.response.status);
            console.error("Error data:", e.response.data);
            handleError();
        } finally {
            stopLoading();
        }
    }

    return (
        <>
            {loading ? <Spinner/>
                :
                <div className={style.background}>
                    <div className={style.container}>
                        <NavigationHome/>
                        <form className={style.form}
                              onSubmit={handleSubmit(handleFormSubmit)}>

                            <h1 className={style.title}>Welcome</h1>
                            <p className={style.required}>All fields are required</p>

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
                                        value='ADMIN'
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
                                        value='USER'
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
                            <Button
                                type="submit"
                                text={loading ? 'Submitting...' : 'Submit'}
                            />
                        </form>
                        {error && (
                            <p className={style.error}>Er is iets mis gegaan....Herlaad de pagina. Of neem contact op
                                met de eigenaar.</p>)}
                    </div>
                </div>}
        </>
    )
}

export default Registration;