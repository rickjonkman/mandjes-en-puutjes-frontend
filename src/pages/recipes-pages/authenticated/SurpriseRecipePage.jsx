import PageContainer from "../../../components/structure/PageContainer.jsx";
import HeaderContainer from "../../../components/structure/HeaderContainer.jsx";
import PageTitle from "../../../components/common/page-title/PageTitle.jsx";


const SurpriseRecipePage = () => {
    return (
        <PageContainer>

            <HeaderContainer>
                <PageTitle pageTitleClass="surprise-recipe__title" pageTitle="Surprise Recipe" />
            </HeaderContainer>

        </PageContainer>
    );
};

export default SurpriseRecipePage;