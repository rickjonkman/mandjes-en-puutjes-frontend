import PageContainer from "../../../components/structure/PageContainer.jsx";
import HeaderContainer from "../../../components/structure/HeaderContainer.jsx";
import MainContainer from "../../../components/structure/MainContainer.jsx";
import FooterContainer from "../../../components/structure/FooterContainer.jsx";
import PageTitle from "../../../components/common/page-title/PageTitle.jsx";
import LoginFormHeader from "../../../components/page-components/login-register-components/LoginFormHeader.jsx";
import LoginForm from "../../../components/common/forms/LoginForm.jsx";
import PageContent from "../../../constants/pageContent.json";
import {useContext} from "react";
import {LanguageContext} from "../../../context/LanguageContext.jsx";
import UtilityMessages from "../../../constants/utilityMessages.json";


const LoginPage = () => {

    const { language } = useContext(LanguageContext);
    const { username, password, submit, title } = PageContent[language].loginPage;
    const { success_auth_message,  } = UtilityMessages[language];

    return (
        <PageContainer>

            <HeaderContainer>
                <PageTitle pageTitleClass="login-page__title" pageTitle={title}>

                </PageTitle>
            </HeaderContainer>



            <MainContainer>
                <LoginFormHeader />
                <LoginForm
                    username={username}
                    password={password}
                    submit={submit}
                    success_auth_message={success_auth_message}
                />
            </MainContainer>



            <FooterContainer>

            </FooterContainer>

        </PageContainer>
    );
};

export default LoginPage;