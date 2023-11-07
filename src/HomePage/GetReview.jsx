import style from "../HomePage/home.module.css";
import {useEffect, useState} from "react";
import axios from "axios";

function GetReview() {
    const [data, setData] = useState([]);
    const [error, toggleError] = useState(false);

    useEffect(() => {
        void getReviews()
    }, []);

    async function getReviews() {
        try {
            const response = await axios.get('http://localhost:8080/review')
            setData(response.data);
            // console.log(response.data);
        } catch (e) {
            console.error(e);
            toggleError(true);
        }
    }

    return (
        <>
            {data.length > 0 ? (
                data.map((review) => (
                    <div className={style["review-box"]} key={review.id}>
                        <h2>{review.fullName}</h2>
                        <p>{review.review}</p>
                    </div>
                ))
            ) : (
                <p>No reviews available.</p>
            )}
        </>
    )
}

export default GetReview;