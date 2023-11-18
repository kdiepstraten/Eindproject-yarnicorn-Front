import style from "../Pages/ProductDetailPage/ProductDetail.module.css";
import {NavLink, useNavigate} from "react-router-dom";
import axios from "axios";
import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../Context/AuthContext.jsx";
import Spinner from "./Spinner.jsx";



function ProductDetailsContainer({product}) {
    const navigate = useNavigate();
    const [image, setImage] = useState('');
    const [imageTwo, setImageTwo] = useState('');
    const {token} = useContext(AuthContext);
    const {isAuthenticated} = useContext(AuthContext);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {



        async function fetchImage() {

            try {
                setError(false);
                setLoading(true);
                const response = await axios.get(`http://localhost:8080/downloadFromDB/${product.name}.jpg`, {
                    headers: {
                        Authorization: `${token}`
                    }
                });
                console.log(response.data)
                const blob = new Blob([response.data], {type: 'image/jpeg'});
                const imageUrl = URL.createObjectURL(blob);
                console.log(imageUrl)
                let reader = new FileReader();
                setImageTwo(imageUrl)
                reader.readAsDataURL(blob);
                reader.onloadend = function () {
                    let base64data = reader.result;
                    setImage(base64data);
                }
                // Convert the arraybuffer to a base64-encoded data URL
                // const base64Image = `data:image/png;base64,${Buffer.from(response.data, 'binary').toString('base64')}`;
                //

                // console.log(blob)
                // let reader = new FileReader();
                // reader.readAsDataURL(blob);

                // // Set the image state
                // console.log(`${imageUrl.slice(5)}`)
                // // const base64 = `data:image/png;base64, ${imageUrl.slice(27)}.jpg`;
                // // console.log(base64)
                //

            } catch (e) {
                console.error(e);
                console.error("Error status:", e.response.status);
                console.error("Error data:", e.response.data);
                setError(true);
            } finally {
                setLoading(false);
            }
        }

        void fetchImage()

    }, []);

    function onClick() {
        navigate("/reservation");
    }

    return (
        <>
            {loading ? <Spinner/>
            :
            <div className={style.container}>
                <div className={style["container__left"]}>
                    <figure className={style["container__img"]}>
                        {/*<img src={atob(image)} alt={product.name}/>*/}
                        <img src={(imageTwo)} alt={product.name}/>
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
                    {isAuthenticated ? (
                        <button type="button" onClick={onClick} className={style.btn}>
                            Reserve
                        </button>) : <h1 className={style.login}>Please login to see our products. <NavLink
                        className={style["link-products"]} to={"/login"}>Click here</NavLink></h1>}
                </div>
                {/*{error && (<p className={style.error}>Er is iets mis gegaan....Herlaad de pagina. Of neem contact op met de eigenaar.</p>)}*/}
            </div>}
        </>
    );
}

export default ProductDetailsContainer;

