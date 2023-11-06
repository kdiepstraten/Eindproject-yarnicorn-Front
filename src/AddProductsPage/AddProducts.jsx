import style from "./AddProducts.module.css"
import {useForm} from "react-hook-form";
import NavigationHome from "../NavigationHomePage/NavigationHome.jsx";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {useState} from "react";

function AddProducts() {

    const {register, handleSubmit} = useForm();
    const navigate = useNavigate();
    const [wool, setWool] = useState('');
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);

    function handleFormSubmit(data) {
        console.log(data);
        navigate("/products")
        void postWool();
    }

    async function postWool() {
        toggleError(false);
        toggleLoading(true);
        try {
            const response = await axios.post("http://localhost:8080/wools");
            setWool(response.data);
            console.log(response.data)
        } catch (e) {
            console.error(e);
            toggleError(true);
        }
        toggleLoading(false)
    }

    return (
        <>
            <div className={style.background}>
                <div className={style.container}>
                    <NavigationHome/>
                    <form className={style.form}
                          onSubmit={handleSubmit(handleFormSubmit)}>

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
                            placeholder="Category"
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

                        <div className={style.flex}>
                            <input
                                className={style.input}
                                type="text"
                                id="needle-size"
                                placeholder="Needle Size"
                                {...register("needle-size", {
                                    required: {
                                        value: true,
                                        message: "Needle size is required"
                                    }
                                })}
                            />

                            <input
                                className={style.input}
                                type="text"
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
                        {/*TODO: form maken voor image. Functie schrijven om die naar een ander endpoint te sturen.*/}
                        <input
                            className={style.input}
                            type="file"
                            name="image"
                            accept="image/*"
                            id="image"
                            placeholder="Image"
                            {...register("image")}
                        />
                        <button
                            type="submit"
                            className={style.btn}>Submit
                        </button>

                    </form>

                </div>
            </div>

        </>
    )
}

export default AddProducts;