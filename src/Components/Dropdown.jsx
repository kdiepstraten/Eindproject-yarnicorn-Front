import style from "../Pages/ProfilePage/Profile.module.css"
import Button from "./Button.jsx";

export function Dropdown({onSubmit, onChange, input, state, value, btn_type, btn_text}) {
    return (
        <form onSubmit={(e) => onSubmit(e)}>
            <select
                name="productId"
                onChange={(e) => onChange(e)}>
                <option value="">{input}</option>
                {state &&
                    state.map((item) => {
                        return (
                            <option
                                key={item.id}
                                value={item.id}>{item[value]}</option>);
                    })}
            </select>

            <Button
                type={btn_type}
                text={btn_text}/>

        </form>
    )
}
export default Dropdown;