import PageContainer from "../../../components/structure/PageContainer.jsx";
import HeaderContainer from "../../../components/structure/HeaderContainer.jsx";
import PageTitle from "../../../components/common/page-title/PageTitle.jsx";
import dashboard from "/src/constants/page-content/dashboard.json";
import {useContext} from "react";
import {LanguageContext} from "../../../context/LanguageContext.jsx";
import MainContainer from "../../../components/structure/MainContainer.jsx";
import BlockItemGrid from "../../../components/common/block-item-components/BlockItemGrid.jsx";
import FoodPreferencesBlock from "../../../components/common/block-items/FoodPreferencesBlock.jsx";


const DashboardPage = () => {

    const { language } = useContext(LanguageContext);

    return (
        <PageContainer>

            <HeaderContainer>
                <PageTitle pageTitleClass="dashboard__title" pageTitle={dashboard[language].title} />
            </HeaderContainer>

            <MainContainer>

                <BlockItemGrid>

                    <FoodPreferencesBlock />

                </BlockItemGrid>

            </MainContainer>

        </PageContainer>
    );
};

export default DashboardPage;