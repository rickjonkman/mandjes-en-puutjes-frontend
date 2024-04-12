import React from 'react';
import RecipeTitle from "../../common/page-title/RecipeTitle.jsx";
import RecipeTopInfo from "./RecipeTopInfo.jsx";
import RecipeImage from "./RecipeImage.jsx";
import useFetchImage from "../../../api/useFetchImage.js";

const RecipePageHeader = ({ recipeName, prepTime, creator, tags, imageFile }) => {

    useFetchImage();

    return (
        <>
            <RecipeTitle recipeTitle={recipeName} creator={creator} />

            <section className="recipe-page__top-section">

                <RecipeTopInfo
                    recipeName={recipeName}
                    prepTime={prepTime}
                    creator={creator}
                    tags={tags}
                />

                <RecipeImage
                    imgSrc={imageFile}
                    imgDescription="Een foto van het recept"
                    imgId="recipe-page__top-image"
                />

            </section>
        </>
    );
};

export default RecipePageHeader;