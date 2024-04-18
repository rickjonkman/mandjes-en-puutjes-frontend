import Button from "../../ui/buttons/Button.jsx";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";


const RecipeThumbnail = ({ recipeId, recipeName, tags, recipeImage, recipeImageDescription }) => {

    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [image, setImage] = useState(null);

    console.log(recipeImage);

    useEffect(() => {
        const fetchImage = async () => {

            setError(null);
            setIsLoading(true);

            try {
                const response = await axios.get('http://localhost:8080/api/v1/recipes/open/download-image/' + recipeImage,
                    { responseType: 'blob' });
                const imageUrl = URL.createObjectURL(response.data);
                setImage(imageUrl);
            } catch (e) {
                console.error("Error fetching image: ", e);
                setError(e);
            } finally {
                setIsLoading(false);
            }

        }

        void fetchImage();

        return console.log("Image fetched");
    }, []);

    return (
        <article className="recipe-thumbnail__container">

            <div className="recipe-thumbnail__title-container">
                <h3>{recipeName}</h3>
            </div>

            <div className={ error ? 'recipe-thumbnail__not-loaded' : 'recipe-thumbnail__image-container'}>
                {isLoading ? <p>Loading...</p> : null}
                <img src={image} alt={recipeImageDescription}/>
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

            <Button
                buttonClass="recipe-thumbnail__btn"
                buttonText="Ga naar recept"
                onClickHandler={() => navigate(`/recipe/${recipeId}`)}
            />

        </article>
    );
};

export default RecipeThumbnail;