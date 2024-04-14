import PageContainer from "../../../components/structure/PageContainer.jsx";
import HeaderContainer from "../../../components/structure/HeaderContainer.jsx";
import PageTitle from "../../../components/common/page-title/PageTitle.jsx";


const ShoppingListsPage = () => {
    return (
        <PageContainer>

            <HeaderContainer>
                <PageTitle pageTitleClass="shopping-lists__title" />
            </HeaderContainer>

        </PageContainer>
    );
};

export default ShoppingListsPage;