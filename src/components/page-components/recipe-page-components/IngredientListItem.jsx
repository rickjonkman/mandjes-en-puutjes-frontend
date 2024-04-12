import React from 'react';

const IngredientListItem = ({ ingredientAmount, ingredientUnit, ingredientName }) => {
    return (
        <li>
            <label htmlFor="ingredient__list-item--checkbox">

                <div className="ingredient__list-item--container">
                    <input
                        type="checkbox"
                        id="ingredient__list-item--checkbox"
                    />

                    <div className={"ingredient__list-item--measurement"}>
                        <p>{ingredientAmount}</p>
                        <p>{ingredientUnit}</p>
                    </div>
                </div>

                <div className="ingredient__list-item--name">
                    <p>{ingredientName}</p>
                </div>

            </label>
        </li>
    );
};

export default IngredientListItem;