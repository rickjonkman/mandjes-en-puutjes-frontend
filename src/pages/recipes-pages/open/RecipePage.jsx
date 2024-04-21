import {useContext, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import PageContainer from "../../../components/structure/PageContainer.jsx";
import HeaderContainer from "../../../components/structure/HeaderContainer.jsx";
import PageTitle from "../../../components/common/page-title/PageTitle.jsx";
import MainContainer from "../../../components/structure/MainContainer.jsx";
import RecipePageHeader from "../../../components/page-components/recipe-page-components/RecipePageHeader.jsx";
import RecipeMidSection from "../../../components/page-components/recipe-page-components/RecipeMidSection.jsx";
import NavBar from "../../../components/ui/nav/NavBar.jsx";
import "/src/scss/scss-pages/scss-recipes/recipe-page.scss";
import endpoints from "../../../api/endpoints.json";
import FooterContainer from "../../../components/structure/FooterContainer.jsx";
import useFetchRecipe from "../../../api/useFetchRecipe.js";


const RecipePage = () => {

    const {recipeId} = useParams();
    const fetchURL = endpoints.endpoints.getRecipe.url + recipeId;
    const { error, isLoading, singleRecipe } = useFetchRecipe(fetchURL);




    return (

            singleRecipe &&
        <>
            <PageContainer pageContainerClass="recipe-page__page-container">

                <HeaderContainer headerContainerClass="recipe-page__header-container">

                    <NavBar/>

                </HeaderContainer>

                <MainContainer mainContainerClass="recipe-page__main-container">

                    <RecipePageHeader recipe={singleRecipe}/>

                    <RecipeMidSection recipe={singleRecipe}/>

                </MainContainer>

                <FooterContainer />

            </PageContainer>
        </>

    );
};

export default RecipePage;