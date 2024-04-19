import PageContainer from "../../../components/structure/PageContainer.jsx";
import HeaderContainer from "../../../components/structure/HeaderContainer.jsx";
import PageTitle from "../../../components/common/page-title/PageTitle.jsx";
import FooterContainer from "../../../components/structure/FooterContainer.jsx";
import MainContainer from "../../../components/structure/MainContainer.jsx";


const SavedRecipesPage = () => {
    return (
        <PageContainer pageContainerClass="saved-recipes__page-container">

            <HeaderContainer headerContainerClass="saved-recipes__header">
                <PageTitle pageTitleClass="saved-recipes__title" pageTitle="Saved Recipes" />
            </HeaderContainer>

            <MainContainer mainContainerClass="saved-recipes__main">

            </MainContainer>

            <FooterContainer />

        </PageContainer>
    );
};

export default SavedRecipesPage;