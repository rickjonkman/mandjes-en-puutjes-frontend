

const SubmitButton = ({ buttonClass, buttonText }) => {



    return (
        <button className={buttonClass} type="submit">
            <span>{buttonText}</span>
        </button>
    );
};

export default SubmitButton;