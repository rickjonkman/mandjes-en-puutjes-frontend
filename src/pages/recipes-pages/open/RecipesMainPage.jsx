import PageContainer from "../../../components/structure/PageContainer.jsx";
import HeaderContainer from "../../../components/structure/HeaderContainer.jsx";
import PageTitle from "../../../components/common/page-title/PageTitle.jsx";


const RecipesMainPage = () => {



    return (
        <PageContainer>

            <HeaderContainer>
                <PageTitle pageTitleClass="recipes-main__title" pageTitle="Recepten" />
            </HeaderContainer>

        </PageContainer>
    );
};

export default RecipesMainPage;