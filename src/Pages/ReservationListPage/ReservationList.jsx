import Navigation from "../NavbarPage/Navigation.jsx";
import axios from "axios";
import {useContext, useEffect, useState} from "react";
import style from "./ReservationList.module.css"
import {AuthContext} from "../../Context/AuthContext.jsx";
import {LoadingContext} from "../../Context/LoadingContext.jsx";
import Spinner from "../../Components/Spinner.jsx";

function ReservationList() {
    const [reservation, setReservation] = useState([]);
    const [error, toggleError] = useState(false);
    const {token} = useContext(AuthContext);
    const {startLoading, stopLoading, loading} = useContext(LoadingContext);

    useEffect(() => {
        void fetchReservation();
    }, []);

    async function fetchReservation() {
        toggleError(false);
        startLoading(<Spinner/>);
        try {
            const response = await axios.get('http://localhost:8080/reservation', {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `${token}`
                }
            });
            setReservation(response.data);

        } catch (e) {
            console.error(e);
            console.error("Error status:", e.response.status);
            console.error("Error data:", e.response.data);

            toggleError(true);
        } finally {
            stopLoading();
        }
    }

    return (
        <>
            {loading ? <Spinner/>
                :
                <>
                    <Navigation/>
                    <div className={style.header}></div>
                    <div className={style.container}>
                        {reservation.map((res) => (
                            <div className={style.entry} key={res.id}>
                                <p>Full name: {res.fullName}</p>
                                <p>Email: {res.email}</p>
                                <p>Street: {res.street}</p>
                                <p>Street number: {res.streetNumber}</p>
                                <p>Zipcode: {res.zipcode}</p>
                                <p>City: {res.city}</p>
                                <p>Amount: {res.amount}</p>
                                <p>Comment: {res.comment}</p>
                                <p>ProductId: {res.productId}</p>
                            </div>))}
                    </div>
                </>
            }
        </>
    )
}

export default ReservationList;