import {useContext, useState} from "react";
import {UserContext} from "../../../../context/UserContext.jsx";
import FormBasicInfo from "./FormBasicInfo.jsx";
import FormTags from "./FormTags.jsx";
import FormIngredients from "./FormIngredients.jsx";
import FormInstructions from "./FormInstructions.jsx";
import SubmitButton from "../../../ui/buttons/SubmitButton.jsx";
import FormRecipeType from "./FormRecipeType.jsx";


const NewRecipeForm = () => {

    const { userDetails } = useContext(UserContext);

    const [formData, setFormData] = useState({
        recipeName: '',
        prepTime: {
            hour: '',
            min: '',
        },
        servings: 0,
        tags: [],
        ingredients: [],
        instructions: [],
        creator: userDetails.username,
    });

    const onChangeHandler = (e) => {

        const { name, value } = e.target;

        if (name.startsWith('prepTime')) {
            const [category, subcategory] = name.split('__');

            setFormData({
                ...formData,
                [category]: {
                    ...formData[category],
                    [subcategory]: parseInt(value, 10),
                }
            });
        } else {
            const parsedValue = isNaN(value) ? value : parseInt(value, 10);
            setFormData({
                ...formData,
                [name]: parsedValue,
            });
        }

    }

    const addTagsToFormData = (newTags) => {
        setFormData({
            ...formData,
            tags: newTags,
        });
    }

    const addIngredientsToFormData = (newIngredients) => {
        setFormData({
            ...formData,
            ingredients: newIngredients,
        });
    }

    const addInstructionsToFormData = (newInstructions) => {
        setFormData({
            ...formData,
            instructions: newInstructions,
        });
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <form className="new-recipe__form" onSubmit={handleFormSubmit}>

            <FormBasicInfo
                recipeNameValue={formData.recipeName}
                prepTimeValue={formData.prepTime}
                servingsValue={formData.servings}
                handleOnChangeRecipeName={onChangeHandler}
                handleOnChangePrepTimeHour={onChangeHandler}
                handleOnChangePrepTimeMin={onChangeHandler}
                handleOnChangeServings={onChangeHandler}
            />

            <FormRecipeType handleCheckboxChange={handleCheckboxChange}/>

            <FormTags
                tags={formData.tags}
                addTagsToFormData={addTagsToFormData}
            />

            <FormIngredients
                ingredients={formData.ingredients}
                addIngredientsToFormData={addIngredientsToFormData}
            />

            <FormInstructions
                instructions={formData.instructions}
                addInstructionsToFormData={addInstructionsToFormData}
            />

            <div className="new-recipe__creator">
                <label htmlFor="creator">Gemaakt door:
                <input
                    className="new-recipe__creator--input-readonly"
                    type="text"
                    value={formData.creator}
                    placeholder={userDetails.username}
                    readOnly
                />
                </label>
            </div>


            <SubmitButton
                buttonClass="new-recipe__form--submit-button"
                buttonType="submit"
                buttonText="Maak nieuw recept aan"
            />

        </form>
    );
};

export default NewRecipeForm;