

const BlockItemButton = ({ blockItemButtonClass, buttonText, onButtonClick }) => {
    return (
        <button className={blockItemButtonClass} type="button" onClick={onButtonClick}>
            {buttonText}
        </button>
    );
};

export default BlockItemButton;