import {useState} from "react";
import CloseIcon from "../../../ui/svg-components/CloseIcon.jsx";
import IconButton from "../../../ui/buttons/IconButton.jsx";
import AddIcon from "../../../ui/svg-components/AddIcon.jsx";


const FormIngredients = ({ingredients, addIngredientsToFormData}) => {

    const [ingredient, setIngredient] = useState({
        amount: '',
        unit: '',
        ingredientName: '',

    });

    const handleChangeAmount = (e) => {
        setIngredient({
            ...ingredient,
            amount: e.target.value,
        });
    }

    const handleChangeUnit = (e) => {
        setIngredient({
            ...ingredient,
            unit: e.target.value,
        });
    }

    const handleChangeIngredientName = (e) => {
        setIngredient({
            ...ingredient,
            ingredientName: e.target.value,
        });
    }

    const removeIngredient = (indexToRemove) => {
        const newIngredients = ingredients.filter((ingredient, index) => index !== indexToRemove);
        addIngredientsToFormData(newIngredients);
    }

    const handleKeyDown = (e) => {
        const {key} = e;
        const newIngredient = ingredient.ingredientName.trim();

        if ((key === 'Enter' || key === ',' || key === 'Tab') && newIngredient.length) {
            e.preventDefault();
            const newIngredients = [...ingredients, ingredient];
            addIngredientsToFormData(newIngredients);
            setIngredient({
                amount: '',
                unit: '',
                ingredientName: '',
            });
        } else if (key === 'Backspace' && !newIngredient.length && ingredients.length) {
            e.preventDefault();

            const newIngredients = ingredients.slice(0, -1);
            addIngredientsToFormData(newIngredients);
        }
    }

    return (
        <div className="new-recipe__ingredients-section">

            <div className="new-recipe--title-container">
                <h2>Ingredienten</h2>
                <p>Bijvoorbeeld: <em>500 gram sperziebonen</em></p>
            </div>

            <div className="new-recipe__ingredients-input--container">

                <div className="new-recipe__ingredients--input-values">
                    {
                        ingredients.map((ingredient, index) => (
                            <div key={index} className="new-recipe__ingredient">

                                <span>{ingredient.amount}</span>
                                <span>{ingredient.unit}</span>
                                <span>{ingredient.ingredientName}</span>

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
                        <label htmlFor="ingredient-amount__input">Hoeveelheid</label>
                        <input
                            type="number"
                            id="ingredient-amount__input"
                            value={ingredient.amount}
                            onChange={handleChangeAmount}
                            onKeyDown={handleKeyDown}
                            placeholder="500"
                        />
                    </div>

                    <div className="ingredient--column new-recipe__ingredient-input--unit-container">
                        <label htmlFor="ingredient-amount__input">Eenheid</label>
                        <input
                            type="text"
                            value={ingredient.unit}
                            onChange={handleChangeUnit}
                            onKeyDown={handleKeyDown}
                            placeholder="gram"
                        />
                    </div>

                    <div className="ingredient--column new-recipe__ingredient-input--ingredient-container">
                        <label htmlFor="ingredient-amount__input">Ingredient</label>
                        <input
                            type="text"
                            value={ingredient.ingredientName}
                            onChange={handleChangeIngredientName}
                            onKeyDown={handleKeyDown}
                            placeholder="Sperziebonen"
                        />
                    </div>

                    <IconButton
                        buttonId="ingredient__button--add"
                        buttonClickHandler={() => {
                            const newIngredients = [...ingredients, ingredient];
                            addIngredientsToFormData(newIngredients);
                            setIngredient({
                                amount: '',
                                unit: '',
                                ingredientName: '',
                            });
                        }}>
                        <AddIcon/>
                    </IconButton>

                </div>

            </div>

        </div>
    );
};

export default FormIngredients;