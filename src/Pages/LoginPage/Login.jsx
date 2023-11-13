import style from "./Login.module.css"
import {useForm} from 'react-hook-form';
import NavigationHome from "../NavigationHomePage/NavigationHome.jsx";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import Button from "../../Components/Button.jsx";
import {useContext} from "react";
import {AuthContext} from "../../Context/AuthContext.jsx";

function Login() {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const navigate = useNavigate();
    const {login} = useContext(AuthContext);

    function showErrors(errorMessage) {
        alert(errorMessage);

    }
    async function handleFormSubmit(data) {

        try {
            const response = await axios.post("http://localhost:8080/auth", data);

            console.log(response.data.Authorization[0]);
            navigate("/products/leeg");

            login(response.data.Authorization[0]);

        } catch (e) {
            console.error(e);
            console.error("Error status:", e.response.status);
            console.error("Error data:", e.response.data);
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
                            text="Login"/>
                    </form>

                </div>
            </div>
        </>
    )
}

export default Login;