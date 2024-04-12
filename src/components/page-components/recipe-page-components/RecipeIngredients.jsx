import {useContext, useState} from 'react';
import Calculator from "../../common/calculator/Calculator.jsx";
import pageContent from "../../../constants/pageContent.json";
import {LanguageContext} from "../../../context/LanguageContext.jsx";
import IngredientList from "./IngredientList.jsx";

const RecipeIngredients = ({ sectionTitle, servings, ingredients }) => {

    const [servingsAmount, setServingsAmount] = useState(servings);
    const { language } = useContext(LanguageContext);
    const {description, minusDescription, plusDescription } = pageContent[language].recipePage.recipeMidSection.calculator;

    const minusServings = () => {
        if (servingsAmount > 1) {
            setServingsAmount(servingsAmount - 1);
        }
    }

    return (
        <aside className="recipe-page__ingredients-section">

            <h3>{sectionTitle}</h3>

            <Calculator
                amount={servingsAmount}
                minusClickHandler={minusServings}
                plusClickHandler={() => setServingsAmount(servingsAmount + 1)}
                minusDescription={minusDescription}
                plusDescription={plusDescription}
                description={description}
            />

            <IngredientList
                ingredients={ingredients}
                servingsInput={servingsAmount}
            />

        </aside>
    );
};

export default RecipeIngredients;