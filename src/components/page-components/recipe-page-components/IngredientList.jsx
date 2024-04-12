import {useEffect, useState} from 'react';
import IngredientListItem from "./IngredientListItem.jsx";

const IngredientList = ({ ingredients, servingsInput }) => {

    const [scaledIngredients, setScaledIngredients] = useState([]);

    useEffect(() => {
            const newScaledIngredients = ingredients.map(ingredient => ({
                ...ingredient,
                scaledAmount: calculateServings(servingsInput, ingredient.amount)
            }))
            setScaledIngredients(newScaledIngredients);
        }, [servingsInput]
    );

    const calculateServings = (servingsInput, ingredientAmount) => {
        const oneServe = servingsInput / servingsInput;
        return oneServe * ingredientAmount;
    }

    return (
        <section className="ingredient-list__container">

            <ul>
                {
                    scaledIngredients.map((scaledIngredient, index) => {
                        return (
                            <IngredientListItem
                                key={index}
                                ingredientAmount={scaledIngredient.scaledAmount}
                                ingredientUnit={scaledIngredient.unit}
                                ingredientName={scaledIngredient.name}
                            />
                        )
                    })
                }
            </ul>

        </section>
    );
};

export default IngredientList;