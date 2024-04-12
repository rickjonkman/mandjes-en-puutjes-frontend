import React from 'react';

const RecipeTitle = ({ recipeTitle, creator }) => {
    return (
        <div className="recipe__title">
            <h1>{recipeTitle}</h1>
            <span>Toegevoegd door: {creator}</span>
        </div>
    );
};

export default RecipeTitle;