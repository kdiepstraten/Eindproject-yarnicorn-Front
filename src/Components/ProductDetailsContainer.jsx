import style from "../Pages/ProductDetailPage/ProductDetail.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../Context/AuthContext.jsx";


function ProductDetailsContainer({ product }) {
    const navigate = useNavigate();
    const [image, setImage] = useState(null);
    const { token } = useContext(AuthContext);
    useEffect(() => {
        // Fetch and set the image when the component mounts
        void fetchImage();
    }, []);

    async function fetchImage() {
        const image1 = product.name;
        try {
            const response = await axios.get(`http://localhost:8080/downloadFromDB/${image1}`, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `${token}`
                }
                }, {
                responseType: 'arraybuffer', // Specify the response type as arraybuffer
            });

            console.log("Image response", response);
            // Convert the arraybuffer to a base64-encoded data URL
            const base64Image = `data:image/png;base64,${Buffer.from(response.data, 'binary').toString('base64')}`;

            // Set the image state
            setImage(base64Image);
            console.log(base64Image);
        } catch (e) {
            console.error(e);
            console.error("Error status:", e.response ? e.response.status : "unknown");
            console.error("Error data:", e.response ? e.response.data : "unknown");
        }
    }

    function onClick() {
        navigate("/reservation");
    }

    return (
        <>
            <div className={style.container}>
                <div className={style["container__left"]}>
                    <figure className={style["container__img"]}>
                        <img src={image} alt={product.name} />
                    </figure>
                    <div className={style["container__info"]}>{product.description}</div>
                </div>
                <div className={style["container__right"]}>
                    <p>Product ID: {product.id}</p>
                    <p>Name: {product.name}</p>
                    <p>Brand: {product.brand}</p>
                    <p>Color: {product.color}</p>
                    <p>Blend: {product.blend}</p>
                    <p>Needlesize: {product.needleSize}</p>
                    <p>Length: {product.length}</p>
                    <p>Gauge: {product.gauge}</p>
                    <button type="button" onClick={onClick} className={style.btn}>
                        Reserve
                    </button>
                </div>
            </div>
        </>
    );
}

export default ProductDetailsContainer;

// import style from "./ProductDetail.module.css"
// import {useNavigate, useParams} from "react-router-dom";
// import axios from "axios";
// import {useEffect, useState} from "react";
// import Button from "../Button.jsx";
//
// function ProductDetailsContainer({product}) {
//     const navigate = useNavigate();
//     const [formState, setFormState] = useState('');
//     const [image, setImage] = useState(null);
//
//     async function handleSubmit(e) {
//         e.preventDefault()
//         try {
//             const response = await axios.get(`http://downloadFromDB/${formState}`);
//             setImage(response.data);
//             console.log(response)
//
//
//         } catch (e) {
//             console.error(e);
//             console.error("Error status:", e.response.status);
//             console.error("Error data:", e.response.data);
//         }
//     }
//
//     const handleInputChange = (e) => {
//         const selectedValue = e.target.value;
//         setFormState(selectedValue);
//     }
//
//     function onClick() {
//         navigate("/reservation");
//     }
//
//     return (
//         <>
//             <div className={style.container}>
//                 <div className={style["container__left"]}>
//                     <form onSubmit={handleSubmit}>
//                         <figure className={style["container__img"]}>
//                             <img src={image} alt={product.name}/>
//                         </figure>
//                         <select
//                             name="image-name"
//                             onChange={handleInputChange}>
//                             <option value="">Select a product</option>
//
//                                 <option key={product.id} value={product.name}>
//                                     {product.name}
//                                 </option>
//
//                         </select>
//                         <Button
//                             type="submit"
//                             text="upload picture"/>
//                     </form>
//                     <div className={style["container__info"]}>{product.description}</div>
//                 </div>
//                 <div className={style["container__right"]}>
//                     <p>Product ID: {product.id}</p>
//                     <p>Name: {product.name}</p>
//                     <p>Brand: {product.brand}</p>
//                     <p>Color: {product.color}</p>
//                     <p>Blend: {product.blend}</p>
//                     <p>Needlesize: {product.needleSize}</p>
//                     <p>Length: {product.length}</p>
//                     <p>Gauge: {product.gauge}</p>
//                     <button type="button" onClick={onClick} className={style.btn}>Reserve</button>
//                 </div>
//             </div>
//         </>
//     )
// }
//
// export default ProductDetailsContainer;