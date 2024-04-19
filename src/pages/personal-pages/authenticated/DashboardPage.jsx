import PageContainer from "../../../components/structure/PageContainer.jsx";
import HeaderContainer from "../../../components/structure/HeaderContainer.jsx";
import PageTitle from "../../../components/common/page-title/PageTitle.jsx";
import dashboard from "/src/constants/page-content/dashboard.json";
import {useContext} from "react";
import {LanguageContext} from "../../../context/LanguageContext.jsx";
import MainContainer from "../../../components/structure/MainContainer.jsx";
import FoodPreferencesBlock from "../../../components/common/block-items/FoodPreferencesBlock.jsx";
import NavBar from "../../../components/ui/nav/NavBar.jsx";
import {UserContext} from "../../../context/UserContext.jsx";
import "../../../scss/scss-pages/dashboard-page.scss";
import AddNewRecipeBlock from "../../../components/common/block-items/AddNewRecipeBlock.jsx";
import ShoppingListBlock from "../../../components/page-components/shopping-lists-components/ShoppingListBlock.jsx";
import GroceriesContextProvider, {GroceriesContext} from "../../../context/GroceriesContext.jsx";
import ShoppingModeBlock from "../../../components/common/block-items/ShoppingModeBlock.jsx";
import ShoppingListsBlock from "../../../components/common/block-items/ShoppingListsBlock.jsx";
import FooterContainer from "../../../components/structure/FooterContainer.jsx";


const DashboardPage = () => {

    const {language} = useContext(LanguageContext);
    const {title} = dashboard[language];

    const {userDetails, setUserDetails} = useContext(UserContext);

    const blockClassNames = [
        {
            name: 'food-preferences',
            className: 'food-preferences__container',
            component: <FoodPreferencesBlock
                userDetails={userDetails}
                setUserDetails={setUserDetails}
                language={language}
            />,
        },

    ]

    console.log(blockClassNames);

    return (
        <PageContainer pageContainerClass="dashboard__page-container">

            <HeaderContainer headerContainerClass="dashboard__header">

                <NavBar/>

                <PageTitle pageTitleClass="dashboard__title" pageTitle={title}/>
            </HeaderContainer>

            <MainContainer mainContainerClass="dashboard__main">

                <FoodPreferencesBlock
                    userDetails={userDetails}
                    setUserDetails={setUserDetails}
                    language={language}
                    blockItemClass="dashboard__block-item--container"
                    checkboxClass="food-preferences__checkbox"
                />

                <AddNewRecipeBlock
                    language={language}
                    blockItemClass="dashboard__block-item--container"
                />

                <GroceriesContextProvider>
                    <ShoppingModeBlock
                        language={language}
                        blockItemClass="dashboard__block-item--container"
                    />

                    <ShoppingListsBlock
                        blockItemClass="dashboard__block-item--container"
                    />

                </GroceriesContextProvider>

            </MainContainer>

            <FooterContainer />

        </PageContainer>
    );
};

export default DashboardPage;