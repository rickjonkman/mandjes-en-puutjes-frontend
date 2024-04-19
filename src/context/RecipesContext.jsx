import {createContext, useState} from "react";

export const RecipeContext = createContext({});

const RecipeContextProvider = ({children}) => {

    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [singleRecipe, setSingleRecipe] = useState({});
    const [recipeThumbnails, setRecipeThumbnails] = useState([]);
    const [recipeImg, setRecipeImg] = useState(null);




    const recipeContextData = {
        error,
        isLoading,
        singleRecipe,
        recipeThumbnails,
        recipeImg,
    }

    return (
        <RecipeContext.Provider value={recipeContextData}>
            {children}
        </RecipeContext.Provider>
    )
}

export default RecipeContextProvider;