

const RecipeImage = ({ imgSrc, imgDescription, imgId }) => {
    return (
        <figure className="recipe__image--class">
            <img
                src={imgSrc}
                alt={imgDescription}
                id={imgId}
            />
        </figure>
    );
};

export default RecipeImage;