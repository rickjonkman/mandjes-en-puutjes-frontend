export const recipeModel = {
    recipeId: 0,
    recipeName: "",
    servings: 0,
    meat: false,
    fish: false,
    vega: false,
    vegan: false,
    prepTime: {
        hours: 0,
        minutes: 0
    },
    createdByUser: "",
    imageFile: "",
    ingredients: [
        {
            ingredientName: "",
            amount: 0,
            unit: ""
        }
    ],
    instructions: [
        {
            stepNumber: 0,
            stepDescription: ""
        }
    ],
    tags: [
        {tagName: ""}
    ],
};