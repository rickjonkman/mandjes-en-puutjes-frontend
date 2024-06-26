


const IconButton = ({ buttonClass, onClickHandler, children }) => {
    return (
        <button
            className={buttonClass}
            type="button"
            onClick={onClickHandler}>

            {children}

        </button>
    );
};

export default IconButton;