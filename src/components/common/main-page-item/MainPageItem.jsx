import Button from "../../ui/buttons/Button.jsx";

const MainPageItem = ({title, subtitle, buttonClass, buttonText, onButtonClick}) => {
    return (
        <article className="main-page__block-item">

            <div className="main-page__item--title-section">
                <h2>{title}</h2>
                <h3>{subtitle}</h3>
            </div>
            <Button
                buttonClass={`main-page__button ${buttonClass}`}
                buttonText={buttonText}
                onClickHandler={onButtonClick}
            />

        </article>
    );
};

export default MainPageItem;