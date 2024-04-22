import PageContainer from "../../../components/structure/PageContainer.jsx";
import HeaderContainer from "../../../components/structure/HeaderContainer.jsx";
import PageTitle from "../../../components/common/page-title/PageTitle.jsx";
import FooterContainer from "../../../components/structure/FooterContainer.jsx";
import MainContainer from "../../../components/structure/MainContainer.jsx";
import "/src/scss/scss-pages/scss-recipes/saved-recipes.scss";
import SavedRecipesContent from "/src/constants/page-content/saved-recipes.json";
import {LanguageContext} from "../../../context/LanguageContext.jsx";
import {useContext} from "react";
import {UserContext} from "../../../context/UserContext.jsx";
import RecipeThumbnail from "../../../components/page-components/all-recipes-components/RecipeThumbnail.jsx";


const SavedRecipesPage = () => {

    const { savedRecipes } = useContext(UserContext);

    const { language } = useContext(LanguageContext);
    const { page_title } = SavedRecipesContent[language].header;

    return (
        <PageContainer pageContainerClass="saved-recipes__page-container">

            <HeaderContainer headerContainerClass="saved-recipes__header">
                <PageTitle pageTitleClass="saved-recipes__title" pageTitle={page_title} />
            </HeaderContainer>

            <MainContainer mainContainerClass="saved-recipes__main">

                <div className="saved-recipes__content">

                    <ul>
                        {
                            savedRecipes.map((recipe, index) => (
                                <li key={index}>
                                    <RecipeThumbnail
                                        recipeName={recipe.recipeName}
                                    />
                                </li>
                            ))
                        }
                    </ul>

                </div>

            </MainContainer>

            <FooterContainer />

        </PageContainer>
    );
};

export default SavedRecipesPage;