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
import "../../../scss/scss-pages/scss-peronal-pages/dashboard-page.scss";


const DashboardPage = () => {

    const { language } = useContext(LanguageContext);
    const { title } = dashboard[language];

    const { userDetails, setUserDetails } = useContext(UserContext);

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

                <NavBar />

                <PageTitle pageTitleClass="dashboard__title" pageTitle={title} />
            </HeaderContainer>

            <MainContainer mainContainerClass="dashboard__main">

                <FoodPreferencesBlock
                    userDetails={userDetails}
                    setUserDetails={setUserDetails}
                    language={language}
                    blockItemClass="food-preferences__container"
                    checkboxClass="food-preferences__checkbox"
                />

            </MainContainer>

        </PageContainer>
    );
};

export default DashboardPage;