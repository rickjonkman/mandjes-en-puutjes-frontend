import {recipeModel} from "../models/recipeModel.js";
import {useState} from "react";
import axios from "axios";

const useFetchRecipe = (url, recipeId) => {

    const [singleRecipe, setSingleRecipe] = useState(recipeModel);

    const handleFetchRecipe = async () => {

            try {
                const response = await axios.get(url);
                setSingleRecipe(response.data);
            } catch (e) {
                console.error("Error fetching single recipe: ", e);
            }
    }, [recipeId]);

    return {singleRecipe, handleFetchRecipe};

}