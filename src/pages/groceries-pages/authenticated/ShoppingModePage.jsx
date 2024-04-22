import PageContainer from "../../../components/structure/PageContainer.jsx";
import HeaderContainer from "../../../components/structure/HeaderContainer.jsx";
import PageTitle from "../../../components/common/page-title/PageTitle.jsx";
import {useContext} from "react";
import {LanguageContext} from "../../../context/LanguageContext.jsx";
import ShoppingModeContent from "/src/constants/page-content/shopping-mode.json";
import MainContainer from "../../../components/structure/MainContainer.jsx";
import "/src/scss/scss-pages/groceries-main.scss";
import CurrentShoppingList from "../../../components/page-components/shopping-lists-components/CurrentShoppingList.jsx";
import ShoppingModeMenu from "../../../components/page-components/shopping-lists-components/ShoppingModeMenu.jsx";
import FooterContainer from "../../../components/structure/FooterContainer.jsx";
import GroceriesContextProvider from "../../../context/GroceriesContext.jsx";


const ShoppingModePage = () => {

    const {language} = useContext(LanguageContext);
    const {title} = ShoppingModeContent[language].content;

    return (
        <PageContainer pageContainerClass="shopping-mode__page-container">

            <HeaderContainer headerContainerClass="shopping-mode__header">
                <PageTitle pageTitleClass="shopping-mode__title" pageTitle={title}/>
            </HeaderContainer>

            <MainContainer mainContainerClass="shopping-mode__main">

                <GroceriesContextProvider>

                    <ShoppingModeMenu />

                    <CurrentShoppingList />

                </GroceriesContextProvider>

            </MainContainer>

            <FooterContainer />

        </PageContainer>
    );
};

export default ShoppingModePage;