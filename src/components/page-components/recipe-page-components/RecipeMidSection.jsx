import RecipeIngredients from "./RecipeIngredients.jsx";
import pageContent from "../../../constants/pageContent.json";
import {useContext} from "react";
import {LanguageContext} from "../../../context/LanguageContext.jsx";

const RecipeMidSection = ({ recipe }) => {

    const { language } = useContext(LanguageContext);
    const { title } = pageContent[language].recipePage.recipeMidSection.ingredients;
    const { servings, ingredients } = recipe;

    return (
        <div className="recipe-page__mid-section">

            <div className="recipe-page__left-narrow">

                <RecipeIngredients
                    sectionTitle={title}
                    servings={servings}
                    ingredients={ingredients}
                />

            </div>

        </div>
    );
};

export default RecipeMidSection;