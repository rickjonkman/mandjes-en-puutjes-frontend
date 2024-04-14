import PageContainer from "../../../components/structure/PageContainer.jsx";
import HeaderContainer from "../../../components/structure/HeaderContainer.jsx";
import PageTitle from "../../../components/common/page-title/PageTitle.jsx";
import pageContent from "../../../constants/pageContent.json";
import {useContext} from "react";
import {LanguageContext} from "../../../context/LanguageContext.jsx";


const DashboardPage = () => {

    const { language } = useContext(LanguageContext);

    return (
        <PageContainer>

            <HeaderContainer>
                <PageTitle pageTitleClass="dashboard__title" pageTitle={pageContent[language].dashboardPage.title} />
            </HeaderContainer>

        </PageContainer>
    );
};

export default DashboardPage;