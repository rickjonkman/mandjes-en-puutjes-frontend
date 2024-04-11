

const IconButton = ({ buttonClass, onClickHandler, iconSrc, iconDescription, buttonIconId }) => {
    return (
        <button
            className={buttonClass}
            type="button"
            onClick={onClickHandler}>

            <img
                src={iconSrc}
                alt={iconDescription}
                id={buttonIconId}
            />

        </button>
    );
};

export default IconButton;