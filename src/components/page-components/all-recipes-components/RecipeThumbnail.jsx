import Button from "../../ui/buttons/Button.jsx";
import {useNavigate} from "react-router-dom";


const RecipeThumbnail = ({ recipeId, recipeName, tags, recipeImage, recipeImageDescription }) => {

    const navigate = useNavigate();

    return (
        <article className="recipe-thumbnail__container">

            <div className="recipe-thumbnail__title-container">
                <h2>{recipeName}</h2>
            </div>

            <div className="recipe-thumbnail__tags-container">
                {
                    tags.map((tag, index) => {
                        return (
                            <p key={index}>{tag}</p>
                        )
                    })
                }
            </div>

            <div className="recipe-thumbnail__image-container">
                <img src={recipeImage} alt={recipeImageDescription} />
            </div>

            <Button
                buttonClass="recipe-thumbnail__btn"
                buttonText="Ga naar recept"
                onClickHandler={() => navigate(`/recipe/${recipeId}`)}
            />

        </article>
    );
};

export default RecipeThumbnail;