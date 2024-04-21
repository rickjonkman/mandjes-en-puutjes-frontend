import PreferencesForm from "../PreferencesForm.jsx";
import NewRecipeContent from "/src/constants/page-content/new-recipe.json";
import {useContext} from "react";
import {LanguageContext} from "../../../../context/LanguageContext.jsx";


const FormRecipeType = ({ formState, setFormState }) => {

    const { language } = useContext(LanguageContext);
    const { title, description } = NewRecipeContent[language].main.form_recipe_type;

    const handleCheckboxChange = (e) => {
        const { value } = e.target;
        setFormState({
            ...formState,
            [value]: !formState[value]
        });
    }

    return (
        <div className="new-recipe__form--recipe-type-container">

            <PreferencesForm
                handleCheckboxChange={handleCheckboxChange}
                title={title}
                description={description}
            />

        </div>
    );
};

export default FormRecipeType;