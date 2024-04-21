import useFetchRecipes from "../../../api/useFetchRecipes.js";
import RecipeThumbnail from "./RecipeThumbnail.jsx";
import {useNavigate} from "react-router-dom";
import endpoints from "../../../api/endpoints.json";


const RecipeThumbnailsContainer = () => {

    const navigate = useNavigate();
    const { recipes, error, isLoading } = useFetchRecipes(endpoints.endpoints.fetchRecipes.url);

    return (
        <>
            { recipes &&
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
            }
        </>

    );
};

export default RecipeThumbnailsContainer;