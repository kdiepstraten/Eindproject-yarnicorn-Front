import style from "./Button.module.css";


export function Button({text, type, click, disabled}) {
    return (
        <button
            className={style.btn}
            type={type}
            onClick={click}
            disabled={disabled}
            >
            {text}
        </button>
    );
}

export default Button;