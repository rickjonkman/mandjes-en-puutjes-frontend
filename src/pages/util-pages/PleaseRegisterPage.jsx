import "/src/scss/scss-pages/utility-pages.scss";
import {useContext} from "react";
import {LanguageContext} from "../../context/LanguageContext.jsx";
import PageContainer from "../../components/structure/PageContainer.jsx";
import HeaderContainer from "../../components/structure/HeaderContainer.jsx";
import PageTitle from "../../components/common/page-title/PageTitle.jsx";
import UtilityPageContent from "../../constants/page-content/utility-content.json";
import MainContainer from "../../components/structure/MainContainer.jsx";

const PleaseRegisterPage = () => {

    const { language } = useContext(LanguageContext);
    const { title, message } = UtilityPageContent[language].not_logged_in;

    return (
        <PageContainer pageContainerClass="utility-page__page-container">

            <HeaderContainer headerContainerClass="utility-page__header">
                <PageTitle pageTitleClass="utility-page__please-register--title" pageTitle={title} />
            </HeaderContainer>

            <MainContainer mainContainerClass="utility-page__main">
                <h2>{message}</h2>
            </MainContainer>

        </PageContainer>
    );
};

export default PleaseRegisterPage;