

const RecipeThumbnail = ({ recipeName, tags, recipeImage, recipeImageDescription, buttonClickHandler }) => {


    return (
        <article className="recipes-thumbnail__container">

            <div className="recipes-thumbnail__title-container">
                <h2>{recipeName}</h2>
            </div>

        </article>
    );
};

export default RecipeThumbnail;