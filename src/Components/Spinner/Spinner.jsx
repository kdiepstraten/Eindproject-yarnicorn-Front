import React from 'react';

import style from "./Spinner.module.css";

function Spinner() {
    return (
        <div className={style["spinner-container"]}>
            <div className={style.spinner}></div>
        </div>
    )
}

export default Spinner;