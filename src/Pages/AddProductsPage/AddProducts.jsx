import style from "./AddProducts.module.css"
import {useForm} from "react-hook-form";
import NavigationHome from "../../Components/NavigationHome/NavigationHome.jsx";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {useContext, useState} from "react";
import Button from "../../Components/Button/Button.jsx";
import {AuthContext} from "../../Context/AuthContext.jsx";
import Spinner from "../../Components/Spinner/Spinner.jsx";

function AddProducts() {

    const [file, setFile] = useState([]);
    const {register, handleSubmit} = useForm();
    const {token} = useContext(AuthContext);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    async function handleFormSubmit(data) {
        try {
            setError(false);
            setLoading(true);
            const response = await axios.post('http://localhost:8080/product', data, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `${token}`
                }
            });
            setData(response.data);
            // navigate("/products/leeg");
        } catch (e) {
            console.error(e);
            console.error("Error status:", e.response.status);
            console.error("Error data:", e.response.data);
            setError(true);
        } finally {
            setLoading(false);
        }
    }

    function handleImageChange(e) {
        setFile(e.target.files[0])
    }


    async function handleImageSubmit() {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("productId", data.id);
        try {
            setError(false);
            setLoading(true);
            const response = await axios.post('http://localhost:8080/single/uploadDB', formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: `${token}`
                }
            });
            navigate("/products/leeg");
        } catch (e) {
            console.error(e);
            console.error("Error status:", e.response.status);
            console.error("Error data:", e.response.data);
            setError(true);
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            {loading ? <Spinner/>
                :
                <>
                    <div className={style.background}>
                        <main className={style.container}>
                            <NavigationHome/>
                            <form className={style.form}
                                  onSubmit={handleSubmit(handleFormSubmit)}>
                                <h1 className={style.title}>Add a product</h1>
                                <p className={style.required}>All fields are required</p>
                                <input
                                    className={style.input}
                                    type="text"
                                    id="name"
                                    placeholder="Name"
                                    {...register("name", {
                                        required: {
                                            value: true,
                                            message: "Name is required"
                                        }
                                    })}
                                />

                                <input
                                    className={style.input}
                                    type="text"
                                    id="brand"
                                    placeholder="Brand"
                                    {...register("brand", {
                                        required: {
                                            value: true,
                                            message: "Brand is required"
                                        }
                                    })}
                                />

                                <input
                                    className={style.input}
                                    type="text"
                                    id="color"
                                    placeholder="Color"
                                    {...register("color", {
                                        required: {
                                            value: true,
                                            message: "Color is required"
                                        }
                                    })}
                                />

                                <input
                                    className={style.input}
                                    type="text"
                                    id="blend"
                                    placeholder="Blend"
                                    {...register("blend", {
                                        required: {
                                            value: true,
                                            message: "Blend is required"
                                        }
                                    })}
                                />

                                <input
                                    className={style.input}
                                    type="text"
                                    id="category"
                                    placeholder="Category. Hoofdletter gevoelig. bv. Alpaca"
                                    {...register("category", {
                                        required: {
                                            value: true,
                                            message: "Category is required"
                                        }
                                    })}
                                />

                                <input
                                    className={style.input}
                                    type="text"
                                    id="gauge"
                                    placeholder="Gauge (bv. 10x10cm = 22stx24rows)"
                                    {...register("gauge", {
                                        required: {
                                            value: true,
                                            message: "Gauge is required"
                                        }
                                    })}
                                />

                                <div className={style.numbers}>
                                    <input
                                        className={style.input}
                                        type="number"
                                        id="needleSize"
                                        placeholder="Needle Size"
                                        {...register("needleSize", {
                                            required: {
                                                value: true,
                                                message: "Needle size is required"
                                            }
                                        })}
                                    />

                                    <input
                                        className={style.input}
                                        type="number"
                                        id="length"
                                        placeholder="Length"
                                        {...register("length", {
                                            required: {
                                                value: true,
                                                message: "Length is required"
                                            }
                                        })}
                                    />
                                </div>
                                <textarea
                                    className={`${style.input} ${style.area}`}
                                    id="description"
                                    placeholder="Description"
                                    rows="10"
                                    {...register("description", {
                                        required: {
                                            value: true,
                                            message: "Description is required"
                                        }
                                    })}
                                />

                                <Button
                                    type="submit"
                                    text="Submit"
                                />
                            </form>
                            <div className={style["image-container"]}>

                                <input className="text-color"
                                       id="file"
                                       type="file"
                                       title=" "
                                       onChange={handleImageChange}
                                />

                                <Button
                                    type='submit'
                                    click={handleImageSubmit}
                                    text='Send'
                                />

                            </div>
                        </main>
                        {error && (
                            <p className={style.error}>Er is iets mis gegaan....Herlaad de pagina. Of neem contact op
                                met de eigenaar.</p>)}
                    </div>
                </>}
        </>
    )
}

export default AddProducts;