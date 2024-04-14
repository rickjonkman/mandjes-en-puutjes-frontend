import BackArrow from "../icons/backArrow.jsx";


const IconButton = ({ buttonClass, onClickHandler }) => {
    return (
        <button
            className={buttonClass}
            type="button"
            onClick={onClickHandler}>

            <BackArrow fill="#F8FDFBFF" backArrowClass="icon__go-back" />

        </button>
    );
};

export default IconButton;