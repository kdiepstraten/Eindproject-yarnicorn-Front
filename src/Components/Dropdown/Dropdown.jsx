import Button from "../Button/Button.jsx";
import PropTypes from "prop-types";
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

Dropdown.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    input: PropTypes.string.isRequired,
    state: PropTypes.array.isRequired,
    value: PropTypes.string.isRequired,
    btn_type: PropTypes.string.isRequired,
    btn_text: PropTypes.string.isRequired,
};
export default Dropdown;