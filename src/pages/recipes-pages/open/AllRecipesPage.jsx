import PageContainer from "../../../components/structure/PageContainer.jsx";
import HeaderContainer from "../../../components/structure/HeaderContainer.jsx";
import PageTitle from "../../../components/common/page-title/PageTitle.jsx";
import {useContext} from "react";
import {LanguageContext} from "../../../context/LanguageContext.jsx";
import pageContent from "../../../constants/pageContent.json";
import MainContainer from "../../../components/structure/MainContainer.jsx";
import RecipeThumbnailsContainer
    from "../../../components/page-components/all-recipes-components/RecipeThumbnailsContainer.jsx";


const AllRecipesPage = () => {

    const { language } = useContext(LanguageContext);
    const { title } = pageContent[language].allRecipesPage;

    return (
        <PageContainer>

            <HeaderContainer>
                <PageTitle pageTitleClass="recipes-all__title" pageTitle={title} />
            </HeaderContainer>

            <MainContainer>
                <RecipeThumbnailsContainer />
            </MainContainer>

        </PageContainer>
    );
};

export default AllRecipesPage;