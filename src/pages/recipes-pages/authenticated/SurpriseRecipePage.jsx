import PageContainer from "../../../components/structure/PageContainer.jsx";
import HeaderContainer from "../../../components/structure/HeaderContainer.jsx";
import PageTitle from "../../../components/common/page-title/PageTitle.jsx";
import MainContainer from "../../../components/structure/MainContainer.jsx";
import FooterContainer from "../../../components/structure/FooterContainer.jsx";


const SurpriseRecipePage = () => {
    return (
        <PageContainer pageContainerClass="surprise-recipe__page-container">

            <HeaderContainer headerContainerClass="surprise-recipe__header">
                <PageTitle pageTitleClass="surprise-recipe__title" pageTitle="Surprise Recipe" />
            </HeaderContainer>

            <MainContainer mainContainerClass="surprise-recipe__main">

            </MainContainer>

            <FooterContainer />

        </PageContainer>
    );
};

export default SurpriseRecipePage;