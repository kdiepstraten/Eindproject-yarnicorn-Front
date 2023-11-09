import Reservation from "../ReservationPage/Reservation.jsx";
import axios from "axios";
import {useEffect, useState} from "react";
import style from "./ReservationList.module.css"
function ReservationList() {
    const [reservation, setReservation] = useState([]);
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);

    useEffect(() => {
        void fetchReservation();
    }, []);
    async function fetchReservation() {
        toggleError(false);
        toggleLoading(true);
        try {
            const response = await axios.get('http://localhost:8080/reservation');
            setReservation(response.data);
            console.log(response.data)
        } catch (e) {
              console.error(e);
            console.error("Error status:", e.response.status);
            console.error("Error data:", e.response.data);

            toggleError(true);
        }
        toggleLoading(false)
    }

  return (
    <>
        {reservation.map((res) => (
        <div className={style.container} key={res.id}>
            <p>Full name: {res.fullName}</p>
            <p>email:{res.email}</p>
            <p>Street:{res.street}</p>
            <p>Street number:{res.StreetNumber}</p>
            <p>Zipcode:{res.zipcode}</p>
            <p>City:{res.city}</p>
            <p>Amount:{res.amount}</p>
            <p>Comment:{res.comment}</p>
            <p>ProductId:{res.productId}</p>
        </div>))}
    </>
  )
}
export default ReservationList;