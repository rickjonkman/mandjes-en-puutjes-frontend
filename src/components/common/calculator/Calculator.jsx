
import IconButton from "../../ui/buttons/IconButton.jsx";
import MinusIcon from "../../../assets/icons/minus-icon.svg";
import PlusIcon from "../../../assets/icons/plus-icon.svg";

const Calculator = ({ amount, description, minusClickHandler, plusClickHandler, minusDescription, plusDescription }) => {



    return (
        <section className="calculator-container">

            <span>{amount}</span>
            <p>{description}</p>

            <div className="calculator-buttons">

                <IconButton
                    buttonClass="calculator-btn"
                    buttonIconId="calculator-btn__icon"
                    onClickHandler={minusClickHandler}
                    iconSrc={MinusIcon}
                    iconDescription={minusDescription}
                />

                <IconButton
                    buttonClass="calculator-btn"
                    buttonIconId="calculator-btn__icon"
                    onClickHandler={plusClickHandler}
                    iconSrc={PlusIcon}
                    iconDescription={plusDescription}
                />

            </div>

        </section>
    );
};

export default Calculator;