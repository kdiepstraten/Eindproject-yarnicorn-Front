import style from "./Login.module.css"
import {useForm} from 'react-hook-form';
import NavigationHome from "../NavigationHomePage/NavigationHome.jsx";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import Button from "../../Components/Button.jsx";
import {useContext} from "react";
import {AuthContext} from "../../Context/AuthContext.jsx";
import {LoadingContext} from "../../Context/LoadingContext.jsx";
import Spinner from "../../Components/Spinner.jsx";
import {ErrorContext} from "../../Context/ErrorContext.jsx";
function Login() {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const navigate = useNavigate();
    const {login} = useContext(AuthContext);
    const {startLoading, stopLoading, loading} = useContext(LoadingContext);
    const {error, handleError, clearError} = useContext(ErrorContext);
    async function handleFormSubmit(data) {

        try {
            clearError();
            startLoading(<Spinner/>);
            const response = await axios.post("http://localhost:8080/auth", data);
            navigate("/products/leeg");

            login(response.data.Authorization[0]);

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
                                    message: "A username is required",
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
                                    message: "A password is required"
                                }
                            })}
                        />
                        <Button
                            type="submit"
                            text={loading ? 'Logging in...' : 'Login'}
                            />
                    </form>
                    {error && (<p className={style.error}>Er is iets mis gegaan....Herlaad de pagina. Of neem contact op met de eigenaar.</p>)}
                </div>
            </div>}
        </>
    )
}

export default Login;