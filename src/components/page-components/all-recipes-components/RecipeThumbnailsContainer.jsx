import useFetchRecipes from "../../../api/useFetchRecipes.js";
import RecipeThumbnail from "./RecipeThumbnail.jsx";


const RecipeThumbnailsContainer = () => {

    const { recipes, error, isLoading } = useFetchRecipes();

    return (
        <div className="recipes-all__grid">

            {
                recipes.map((recipe) => {
                    return (
                        <RecipeThumbnail
                            key={recipe.recipeId}
                            recipeName={recipe.recipeName}
                            tags={recipe.tagDTOList}
                            recipeImage={recipe.imageFileName}
                            recipeImageDescription={recipe.recipeImageDescription}
                            buttonClickHandler={() => navigate(`/recipes/main`)}
                        />
                    )
                }
            }

        </div>
    );
};

export default RecipeThumbnailsContainer;