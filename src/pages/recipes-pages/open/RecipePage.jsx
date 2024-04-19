import {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import PageContainer from "../../../components/structure/PageContainer.jsx";
import HeaderContainer from "../../../components/structure/HeaderContainer.jsx";
import PageTitle from "../../../components/common/page-title/PageTitle.jsx";
import MainContainer from "../../../components/structure/MainContainer.jsx";
import RecipePageHeader from "../../../components/page-components/recipe-page-components/RecipePageHeader.jsx";
import RecipeMidSection from "../../../components/page-components/recipe-page-components/RecipeMidSection.jsx";
import NavBar from "../../../components/ui/nav/NavBar.jsx";
import "/src/scss/scss-pages/scss-recipes/recipe-page.scss";
import axios from "axios";
import FooterContainer from "../../../components/structure/FooterContainer.jsx";


const RecipePage = () => {

    const {recipeId} = useParams();

    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        void fetchRecipe();
    }, []);

    const fetchRecipe = async () => {

        setError(null);
        setIsLoading(true);

        try {
            const response = await axios.get(`http://localhost:8080/api/v1/recipes/get-recipe/${recipeId}`);
            console.log(response.data)
            setRecipe(response.data);
        } catch (e) {
            console.error("Error fetching single recipe: ", e);
        } finally {
            setIsLoading(false);
        }

    }

    console.log(recipe)


    return (

            recipe &&
        <>
            <PageContainer pageContainerClass="recipe-page__page-container">

                <HeaderContainer headerContainerClass="recipe-page__header-container">

                    <NavBar/>

                </HeaderContainer>

                <MainContainer mainContainerClass="recipe-page__main-container">

                    <RecipePageHeader recipe={recipe}/>

                    <RecipeMidSection recipe={recipe}/>

                </MainContainer>

                <FooterContainer />

            </PageContainer>
        </>

    );
};

export default RecipePage;