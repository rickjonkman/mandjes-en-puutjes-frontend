import {useContext, useState} from "react";
import CloseIcon from "../../../ui/svg-components/CloseIcon.jsx";
import IconButton from "../../../ui/buttons/IconButton.jsx";
import AddIcon from "../../../ui/svg-components/AddIcon.jsx";
import Button from "../../../ui/buttons/Button.jsx";
import NewRecipeContent from "/src/constants/page-content/new-recipe.json";
import {LanguageContext} from "../../../../context/LanguageContext.jsx";


const FormIngredients = ({formData, setFormData}) => {

    const { language } = useContext(LanguageContext);
    const { title, description, label_amount, label_unit, label_name, unit_placeholder, name_placeholder, add_ingredients_button } = NewRecipeContent[language].main.form_ingredients;

    const [ingredientMeasured, setIngredientMeasured] = useState({
        amount: 0,
        unit: '',
        name: '',
    });

    const handleKeyDown = (e) => {
        const {key} = e;
        const newIngredient = ingredientMeasured.name.trim();

        if (key === 'Enter' || key === ',' && newIngredient.length) {
            e.preventDefault();
            addIngredientToFormData(ingredientMeasured);
            setIngredientMeasured({
                amount: 0,
                unit: '',
                name: '',
            });
        }
    }

    const handleChangeAmount = (e) => {
        setIngredientMeasured({...ingredientMeasured, amount: e.target.value});
    }

    const handleChangeUnit = (e) => {
        setIngredientMeasured({...ingredientMeasured, unit: e.target.value});
    }

    const handleChangeIngredientName = (e) => {
        setIngredientMeasured({...ingredientMeasured, name: e.target.value});
    }

    const addIngredientToFormData = (newIngredient) => {
        setFormData({...formData, ingredients: [...formData.ingredients, newIngredient]});
    }

    const removeIngredient = (index) => {
        const newIngredients = [...formData.ingredients];
        newIngredients.splice(index, 1);
        setFormData({...formData, ingredients: newIngredients});
    }

    return (
        <div className="new-recipe__ingredients-section">

            <div className="new-recipe--title-container">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>

            <div className="new-recipe__ingredients-input--container">

                <div className="new-recipe__ingredients--input-values">
                    {
                        formData.ingredients.map((ingredient, index) => (
                            <div key={index} className="new-recipe__ingredient">

                                <span>{ingredient.amount}</span>
                                <span>{ingredient.unit}</span>
                                <span>{ingredient.name}</span>

                                <IconButton
                                    buttonClass="remove-ingredient__button"
                                onClickHandler={() => removeIngredient(index)}>

                                    <CloseIcon
                                        closeIconClass="close-icon__svg"
                                        height="1rem"
                                        width="1rem"
                                    />

                                </IconButton>

                            </div>
                        ))
                    }
                </div>

                <div className="new-recipe__ingredient-input">

                    <div className="ingredient--column new-recipe__ingredient-input--amount-container">
                        <label htmlFor="ingredient-amount__input">{label_amount}</label>
                        <input
                            type="number"
                            id="ingredient-amount__input"
                            value={ingredientMeasured.amount}
                            onChange={handleChangeAmount}
                            onKeyDown={handleKeyDown}
                            placeholder="500"
                        />
                    </div>

                    <div className="ingredient--column new-recipe__ingredient-input--unit-container">
                        <label htmlFor="ingredient-amount__input">{label_unit}</label>
                        <input
                            type="text"
                            value={ingredientMeasured.unit}
                            onChange={handleChangeUnit}
                            onKeyDown={handleKeyDown}
                            placeholder={unit_placeholder}
                        />
                    </div>

                    <div className="ingredient--column new-recipe__ingredient-input--ingredient-container">
                        <label htmlFor="ingredient-amount__input">{label_name}</label>
                        <input
                            type="text"
                            value={ingredientMeasured.name}
                            onChange={handleChangeIngredientName}
                            onKeyDown={handleKeyDown}
                            placeholder={name_placeholder}
                        />
                    </div>

                    <IconButton
                        buttonId="ingredient__button--add"
                        buttonClickHandler={() => addIngredientToFormData(ingredientMeasured)}>
                        <AddIcon/>
                    </IconButton>

                </div>

            </div>

        </div>
    );
};

export default FormIngredients;