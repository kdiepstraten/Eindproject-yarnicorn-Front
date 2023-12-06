import style from '../Pages/ProfilePage/Profile.module.css'
import Spinner from "./Spinner.jsx";
import {useContext, useState} from "react";
import axios from "axios";
import Button from "./Button.jsx";
import {AuthContext} from "../Context/AuthContext.jsx";

function ProductForm({product}) {
    const [data, setData] = useState({
        name: product.name,
        brand: product.brand,
        color: product.color,
        blend: product.blend,
        needleSize: product.needleSize,
        length: product.length,
        description: product.description,
        gauge: product.gauge,
        category: product.category,
        fileUrl: product.fileUrl

    });
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const {token} = useContext(AuthContext);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value }));
    };

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const response = await axios.put(`http://localhost:8080/product/${product.id}`, data, {
                headers: {
                    Authorization: `${token}`
                }
            });
            console.log(response.data);
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
                <form onSubmit={handleSubmit}>

                    <input
                        className={style.input}
                        type="text"
                        name="name"
                        placeholder="Product name"
                        value={data.name}
                        onChange={handleInputChange}

                    />
                    <input
                        className={style.input}
                        type="text"
                        name="brand"
                        placeholder="Brand"
                        value={data.brand}
                        onChange={handleInputChange}
                    />
                    <input
                        className={style.input}
                        type="text"
                        name="color"
                        placeholder="Color"
                        value={data.color}
                        onChange={handleInputChange}
                    />
                    <input
                        className={style.input}
                        type="text"
                        name="blend"
                        placeholder="Blend"
                        value={data.blend}
                        onChange={handleInputChange}
                    />
                    <input
                        className={style.input}
                        type="text"
                        name="needleSize"
                        placeholder="Needlesize"
                        value={data.needleSize}
                        onChange={handleInputChange}
                    />
                    <input
                        className={style.input}
                        type="number"
                        name="length"
                        placeholder="Length"
                        value={data.length}
                        onChange={handleInputChange}
                    />
                    <input
                        className={style.input}
                        type="text"
                        name="description"
                        placeholder="Description"
                        value={data.description}
                        onChange={handleInputChange}
                    />
                    <input
                        className={style.input}
                        type="text"
                        name="gauge"
                        placeholder="Gauge"
                        value={data.gauge}
                        onChange={handleInputChange}
                    />
                    <input
                        className={style.input}
                        type="text"
                        name="category"
                        placeholder="Category"
                        value={data.category}
                        onChange={handleInputChange}
                    />

                    <input
                        className={style.input}
                        type="text"
                        name="fileUrl"
                        placeholder="fileUrl"
                        value={data.fileUrl}
                        onChange={handleInputChange}
                    />
                    <Button
                        type="submit"
                        text="Change product"
                        />
                </form>}
        </>
    )
}

export default ProductForm;