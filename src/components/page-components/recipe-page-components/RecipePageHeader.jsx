
import RecipeTitle from "../../common/page-title/RecipeTitle.jsx";
import RecipeTopInfo from "./RecipeTopInfo.jsx";
import RecipeImage from "./RecipeImage.jsx";
import {useEffect, useState} from "react";
import axios from "axios";

const RecipePageHeader = ({ recipe }) => {

    const { recipeName, prepTime, createdByUser, tags, imageFilename } = recipe;

    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [image, setImage] = useState(null);

    useEffect(() => {

        const fetchImage = async () => {

            setError(null);
            setIsLoading(true);

            try {
                const response = await axios.get('http://localhost:8080/api/v1/recipes/open/download-image/' + imageFilename,
                    { responseType: "blob" });
                const imageUrl = URL.createObjectURL(response.data);
                setImage(imageUrl);
            } catch (e) {
                console.error(e);
                setError(e);
            } finally {
                setIsLoading(false);
            }
        }

        void fetchImage();

    }, []);


    return (
        <>
            <RecipeTitle recipeTitle={recipeName} creator={createdByUser} />

            <section className="recipe-page__top-section">

                <RecipeTopInfo
                    recipeName={recipeName}
                    prepTime={prepTime}
                    creator={createdByUser}
                    tags={tags}
                />

                <RecipeImage
                    imgSrc={image}
                    imgDescription="Een foto van het recept"
                    imgId={isLoading ? "recipe-page__top-image--loading" : error ? "recipe-page__top-image--error" : "recipe-page__top-image"}
                />

            </section>
        </>
    );
};

export default RecipePageHeader;