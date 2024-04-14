import PageContainer from "../../../components/structure/PageContainer.jsx";
import HeaderContainer from "../../../components/structure/HeaderContainer.jsx";
import PageTitle from "../../../components/common/page-title/PageTitle.jsx";
import pageContent from "../../../constants/pageContent.json";
import MainContainer from "../../../components/structure/MainContainer.jsx";
import FooterContainer from "../../../components/structure/FooterContainer.jsx";
import {LanguageContext} from "../../../context/LanguageContext.jsx";
import {useContext} from "react";


const LogoutPage = () => {

    const { language } = useContext(LanguageContext);

    return (
        <PageContainer>

            <HeaderContainer>
                <PageTitle pageTitleClass="logout__title" pageTitle={pageContent[language].logoutPage.title} />
            </HeaderContainer>



            <MainContainer>

            </MainContainer>



            <FooterContainer>

            </FooterContainer>

        </PageContainer>
    );
};

export default LogoutPage;