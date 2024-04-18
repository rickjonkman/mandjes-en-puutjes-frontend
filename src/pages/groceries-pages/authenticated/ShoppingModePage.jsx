import PageContainer from "../../../components/structure/PageContainer.jsx";
import HeaderContainer from "../../../components/structure/HeaderContainer.jsx";
import PageTitle from "../../../components/common/page-title/PageTitle.jsx";
import {useContext} from "react";
import {LanguageContext} from "../../../context/LanguageContext.jsx";
import ShoppingModeContent from "/src/constants/page-content/shopping-mode.json";
import MainContainer from "../../../components/structure/MainContainer.jsx";
import "../../../scss/scss-pages/scss-groceries/shopping-mode.scss";
import ShoppingList from "../../../components/page-components/shopping-lists-components/ShoppingList.jsx";


const ShoppingModePage = () => {

    const { language } = useContext(LanguageContext);
    const { title } = ShoppingModeContent[language].content;

    return (
        <PageContainer pageContainerClass="shopping-mode__page-container">

            <HeaderContainer headerContainerClass="shopping-mode__header">
                <PageTitle pageTitleClass="shopping-mode__title" pageTitle={title} />
            </HeaderContainer>

            <MainContainer mainContainerClass="shopping-mode__main">

                <ShoppingList
                    groceries={groceries}
                />

            </MainContainer>

        </PageContainer>
    );
};

export default ShoppingModePage;