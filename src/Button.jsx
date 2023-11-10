import style from "./Button.module.css";


export function Button({text, type, click}) {
    return (
        <button
            className={style.btn}
            type={type}
            onClick={click}
            >
            {text}
        </button>
    );
}

export default Button;