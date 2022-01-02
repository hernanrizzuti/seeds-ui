
const TextInput = (props) => {

return (
        <div>
            <label>{props.displayName}: </label>
            <input
                type="text"
                className="input"
                placeholder={props.placeholder}
                name={props.fieldName}
                value={props.value}
                onChange={props.onChange}
                aria-label={props.fieldName}
            />
        </div>
    )
}

export default TextInput;