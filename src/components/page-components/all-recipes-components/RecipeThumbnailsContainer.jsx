import useFetchRecipes from "../../../api/useFetchRecipes.js";
import RecipeThumbnail from "./RecipeThumbnail.jsx";
import {useNavigate} from "react-router-dom";
import endpoints from "../../../api/endpoints.json";
import {useEffect, useState} from "react";
import axios from "axios";


const RecipeThumbnailsContainer = () => {

    const navigate = useNavigate();
    const { recipes } = useFetchRecipes(endpoints.endpoints.fetchRecipes.url);

    console.log(recipes)

    return (
        <div className="recipes-all__grid">

            {
                recipes.map((recipe) => {
                    return (
                        <RecipeThumbnail
                            key={recipe.recipeId}
                            recipeId={recipe.recipeId}
                            recipeName={recipe.recipeName}
                            tags={recipe.tags}
                            recipeImage={recipe.imageFilename}
                            recipeImageDescription={recipe.recipeImageDescription}
                            buttonClickHandler={() => navigate(`/recipes/main`)}
                        />
                    )
                })
            }


        </div>
    );
};

export default RecipeThumbnailsContainer;