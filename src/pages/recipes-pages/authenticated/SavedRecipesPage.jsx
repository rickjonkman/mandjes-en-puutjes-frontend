import PageContainer from "../../../components/structure/PageContainer.jsx";
import HeaderContainer from "../../../components/structure/HeaderContainer.jsx";
import PageTitle from "../../../components/common/page-title/PageTitle.jsx";


const SavedRecipesPage = () => {
    return (
        <PageContainer>

            <HeaderContainer>
                <PageTitle pageTitleClass="saved-recipes__title" pageTitle="Saved Recipes" />
            </HeaderContainer>

        </PageContainer>
    );
};

export default SavedRecipesPage;