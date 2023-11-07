import style from "./Login.module.css"
import {useForm} from 'react-hook-form';
import NavigationHome from "../NavigationHomePage/NavigationHome.jsx";
import {useNavigate} from "react-router-dom";
import axios from "axios";

function Login() {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const navigate = useNavigate();
    function handleFormSubmit(formData) {
        console.log(formData);
        void postRegistration;
        navigate("/products");
    }

    async function postRegistration(data) {
        try {
            const response = await axios.post("http://localhost:8080/auth", data);
            console.log(response.data);
        } catch (e) {
            console.error(e);
        }
    }
//TODO: handleFormSubmit aanpassen zodat de login button werkt.
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
                                    message: "An username is required",
                                },
                                validate: (value) => value.includes('@') || "Email requires an @ "
                            })}
                        />
                        {errors.name && <p>{errors.name.message}</p>}

                        <input
                            className={style.input}
                            type="password"
                            id="password"
                            placeholder="Password"
                            {...register("password", {
                                required: {
                                    value: true,
                                    message: "An password is required"
                                }
                            })}
                        />

                        <button className={style.button}
                                type="submit">Login</button>

                    </form>

                </div>
            </div>
        </>
    )
}

export default Login;