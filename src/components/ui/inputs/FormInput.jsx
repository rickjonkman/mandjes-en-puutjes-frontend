

const FormInput = ({ inputId, inputLabel, inputType, inputName, inputRef }) => {
    return (
        <label htmlFor={inputId}>
            <span>{inputLabel}</span>
            <input
                type={inputType}
                id={inputId}
                name={inputName}
                ref={inputRef}
            />
        </label>
    );
};

export default FormInput;