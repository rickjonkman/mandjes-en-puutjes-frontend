import PageContainer from "../../../components/structure/PageContainer.jsx";
import HeaderContainer from "../../../components/structure/HeaderContainer.jsx";
import PageTitle from "../../../components/common/page-title/PageTitle.jsx";
import MainContainer from "../../../components/structure/MainContainer.jsx";
import ShoppingListsGrid from "../../../components/page-components/shopping-lists-components/ShoppingListsGrid.jsx";
import GroceriesContextProvider from "../../../context/GroceriesContext.jsx";
import "/src/scss/scss-pages/groceries-main.scss";
import FooterContainer from "../../../components/structure/FooterContainer.jsx";


const ShoppingListsPage = () => {

    return (
        <PageContainer pageContainerClass="shopping-lists__page-container">

            <HeaderContainer headerContainerClass="shopping-lists__header">
                <PageTitle pageTitleClass="shopping-lists__title" pageTitle="Recente lijsten"/>
            </HeaderContainer>

            <MainContainer mainContainerClass="shopping-lists__main">

                <GroceriesContextProvider>

                    <ShoppingListsGrid/>

                </GroceriesContextProvider>

            </MainContainer>

            <FooterContainer />

        </PageContainer>
    );
};

export default ShoppingListsPage;