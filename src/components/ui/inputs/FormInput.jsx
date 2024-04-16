const FormInput = ({inputId, inputLabel, inputType, inputName, inputValue, onChangeHandler}) => {
    return (
        <label htmlFor={inputId}>
            <span>{inputLabel}</span>
            <input
                type={inputType}
                id={inputId}
                name={inputName}
                value={inputValue}
                onChange={onChangeHandler}
            />
        </label>
    );
};

export default FormInput;