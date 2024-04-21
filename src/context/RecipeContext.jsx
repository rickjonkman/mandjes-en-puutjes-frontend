import {createContext, useContext, useState} from "react";
import {UserContext} from "./UserContext.jsx";

export const RecipeContext = createContext({});

const RecipeContextProvider = ({children}) => {

    const { userDetails } = useContext(UserContext);

    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [singleRecipe, setSingleRecipe] = useState({});
    const [recipeImg, setRecipeImg] = useState(null);

    const [formData, setFormData] = useState({
        recipeName: '',
        prepTime: {
            hour: '',
            min: '',
        },
        meat: true,
        fish: true,
        vegetarian: true,
        vegan: true,
        servings: 0,
        tags: [],
        ingredients: [],
        instructions: [],
        creator: userDetails.username,
    });

    const fetchSingleRecipe = async (url) => {
        const response = fetchSingleRecipe(url);
        setSingleRecipe(response.data);
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


    const recipeContextData = {
        error,
        isLoading,
        singleRecipe,
        recipeImg,
        fetchSingleRecipe,
        handleFormSubmit,
        formData,
        setFormData,
        addTagsToFormData,
        addIngredientsToFormData,
        addInstructionsToFormData,
    }

    return (
        <RecipeContext.Provider value={recipeContextData}>
            {children}
        </RecipeContext.Provider>
    )
}

export default RecipeContextProvider;