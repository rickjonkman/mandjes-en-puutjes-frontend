import {recipeModel} from "../models/recipeModel.js";
import {useEffect, useState} from "react";
import axios from "axios";

const useFetchRecipe = (url, recipeId) => {

    const [singleRecipe, setSingleRecipe] = useState(recipeModel);
    const [isLoading, toggleIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        void handleFetchRecipe();
    }, [recipeId]);

    const handleFetchRecipe = async () => {

        setError(null);
        toggleIsLoading(true);

        try {
            const response = await axios.get(url + recipeId);
            setSingleRecipe(response.data);
        } catch (e) {
            console.error("Error fetching single recipe: ", e);
            setError(e);
        } finally {
            toggleIsLoading(false);
        }
    }

    return {singleRecipe, handleFetchRecipe, isLoading, error};

}

export default useFetchRecipe;