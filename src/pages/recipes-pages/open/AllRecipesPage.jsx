import PageContainer from "../../../components/structure/PageContainer.jsx";
import HeaderContainer from "../../../components/structure/HeaderContainer.jsx";
import PageTitle from "../../../components/common/page-title/PageTitle.jsx";
import {useContext} from "react";
import {LanguageContext} from "../../../context/LanguageContext.jsx";
import AllRecipes from "/src/constants/page-content/all-recipes.json";
import MainContainer from "../../../components/structure/MainContainer.jsx";
import RecipeThumbnailsContainer
    from "../../../components/page-components/all-recipes-components/RecipeThumbnailsContainer.jsx";
import NavBar from "../../../components/ui/nav/NavBar.jsx";
import "/src/scss/scss-pages/scss-recipes/recipes-all.scss";


const AllRecipesPage = () => {

    const { language } = useContext(LanguageContext);
    const { title } = AllRecipes[language].page;

    return (
        <PageContainer pageContainerClass="recipes-all__page-container">

            <HeaderContainer headerContainerClass="recipes-all__header">

                <PageTitle pageTitleClass="recipes-all__title" pageTitle={title} />

            </HeaderContainer>

            <MainContainer mainContainerClass="recipes-all__main">
                <RecipeThumbnailsContainer />
            </MainContainer>

        </PageContainer>
    );
};

export default AllRecipesPage;