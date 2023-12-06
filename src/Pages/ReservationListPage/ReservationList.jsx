import Navigation from "../NavbarPage/Navigation.jsx";
import axios from "axios";
import {useContext, useEffect, useState} from "react";
import style from "./ReservationList.module.css"
import {AuthContext} from "../../Context/AuthContext.jsx";
import Spinner from "../../Components/Spinner.jsx";
import Dropdown from "../../Components/Dropdown.jsx";


function ReservationList() {
    const [reservation, setReservation] = useState([]);
    const {token} = useContext(AuthContext);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [formState, setFormState] = useState('');

    useEffect(() => {
        void fetchReservation();
    }, []);

    async function fetchReservation() {
        setError(false);
        setLoading(true);
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
            setError(true);
        } finally {
            setLoading(false);
        }
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setError(false);
        setLoading(true);
        try {
            const response = await axios.delete(`http://localhost:8080/reservation/${formState}`, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `${token}`
                }
            });

            await fetchReservation();
        } catch (e) {
            console.error(e);
            console.error("Error status:", e.response.status);
            console.error("Error data:", e.response.data);
            setError(true);
        } finally {
            setLoading(false);
        }
    }

    const handleInputChange = (e) => {
        setFormState(e.target.value)
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

                                <p>Delete Reservation</p>
                                <Dropdown
                                    onSubmit={handleSubmit}
                                   onChange={handleInputChange}
                                    input={"Select a reservation"}
                                    state={reservation}
                                    value="fullName"
                                    btn_type={"submit"}
                                    btn_text={"Delete reservation"}
                                />

                            </div>

                    {error && (
                        <p className={style.error}>Er is iets mis gegaan....Herlaad de pagina. Of neem contact op met de
                            eigenaar.</p>)}
                </>
            }
        </>
    )
}

export default ReservationList;