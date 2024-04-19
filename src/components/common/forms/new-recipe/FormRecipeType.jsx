import PreferencesForm from "../PreferencesForm.jsx";


const FormRecipeType = ({ handleCheckboxChange, recipeTypeTitle, recipeTypeDescription }) => {
    return (
        <div className="new-recipe__form--recipe-type-container">

            <PreferencesForm
                handleCheckboxChange={handleCheckboxChange}
                title={recipeTypeTitle}
                description={recipeTypeDescription}
            />

        </div>
    );
};

export default FormRecipeType;