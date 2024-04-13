import {useContext} from 'react';
import {useParams} from "react-router-dom";
import useFetchRecipe from "../../../api/useFetchRecipe.js";
import PageContainer from "../../../components/structure/PageContainer.jsx";
import HeaderContainer from "../../../components/structure/HeaderContainer.jsx";
import PageTitle from "../../../components/common/page-title/PageTitle.jsx";
import {LanguageContext} from "../../../context/LanguageContext.jsx";
import endpoints from "../../../api/endpoints.json";
import utilityMessages from "../../../constants/utilityMessages.json";
import pageContent from "../../../constants/pageContent.json";
import MainContainer from "../../../components/structure/MainContainer.jsx";
import RecipePageHeader from "../../../components/page-components/recipe-page-components/RecipePageHeader.jsx";
import RecipeMidSection from "../../../components/page-components/recipe-page-components/RecipeMidSection.jsx";


const RecipePage = () => {

    const {recipeId} = useParams();

    const {language} = useContext(LanguageContext);
    const {url} = endpoints.endpoints.getRecipe;
    const {title} = pageContent[language].recipePage;
    const {loading_message, error_message} = utilityMessages[language]
    const {singleRecipe, isLoading, error} = useFetchRecipe(url, recipeId);
    const {recipeName, prepTime, createdByUser, tags, imageFilename} = singleRecipe;

    // TODO: Add button to go back to All Recipes Page

    return (
        <PageContainer>

            <HeaderContainer>
                <PageTitle pageTitle={title} pageTitleClass="recipe-page__class"/>
            </HeaderContainer>

            <MainContainer>
                {error ? <p>{error_message}</p> : null}
                {isLoading ? <p>{loading_message}</p> : null}

                <RecipePageHeader
                    recipeName={recipeName}
                    prepTime={prepTime}
                    creator={createdByUser}
                    tags={tags}
                    imageFile={imageFilename}
                />

                <RecipeMidSection recipe={singleRecipe}/>

            </MainContainer>

        </PageContainer>
    );
};

export default RecipePage;