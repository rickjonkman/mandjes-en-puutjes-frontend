import RecipeIngredients from "./RecipeIngredients.jsx";
import pageContent from "../../../constants/pageContent.json";
import {useContext} from "react";
import {LanguageContext} from "../../../context/LanguageContext.jsx";
import SaveCurrentRecipe from "./SaveCurrentRecipe.jsx";

const RecipeMidSection = ({recipe}) => {

    const {language} = useContext(LanguageContext);
    const {title} = pageContent[language].recipePage.recipeMidSection.ingredients;
    const {servings, ingredients, instructions, savedByUsers} = recipe;

    console.log(recipe)

    return (
        <div className="recipe-page__mid-section">

            <div className="recipe-page__left-narrow">

                <SaveCurrentRecipe savedByUsers={savedByUsers} />

                <RecipeIngredients
                    sectionTitle={title}
                    servings={servings}
                    ingredients={ingredients}
                />

            </div>

            <div className="recipe-page__right-wide">

                <div className="instructions__list">
                    {
                        instructions.map((instruction) => (
                            <div key={instruction.step} className="instructions__step">
                                <ul>
                                    <li>
                                        <h2>{instruction.step}</h2>
                                        <span>{instruction.instruction}</span>
                                    </li>
                                </ul>
                            </div>
                        ))
                    }
                </div>
            </div>

        </div>
    );
};

export default RecipeMidSection;