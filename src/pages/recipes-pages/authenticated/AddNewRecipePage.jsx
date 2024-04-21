import PageContainer from "../../../components/structure/PageContainer.jsx";
import HeaderContainer from "../../../components/structure/HeaderContainer.jsx";
import PageTitle from "../../../components/common/page-title/PageTitle.jsx";
import MainContainer from "../../../components/structure/MainContainer.jsx";
import FooterContainer from "../../../components/structure/FooterContainer.jsx";
import NewRecipeForm from "../../../components/common/forms/new-recipe/NewRecipeForm.jsx";
import "/src/scss/scss-pages/scss-recipes/add-new-recipe.scss";
import RecipeContextProvider from "../../../context/RecipeContext.jsx";


const AddNewRecipePage = () => {


    return (
        <PageContainer pageContainerClass="new-recipe__page-container">

            <HeaderContainer headerContainerClass="new-recipe__header">
                <PageTitle pageTitleClass="new-recipe__title" pageTitle="Nieuw recept"/>
            </HeaderContainer>

            <MainContainer mainContainerClass="new-recipe__main">
                <RecipeContextProvider>
                    <NewRecipeForm/>
                </RecipeContextProvider>
            </MainContainer>

            <FooterContainer/>

        </PageContainer>
    );
};

export default AddNewRecipePage;