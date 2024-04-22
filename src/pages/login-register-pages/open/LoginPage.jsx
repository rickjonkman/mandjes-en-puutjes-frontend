import PageContainer from "../../../components/structure/PageContainer.jsx";
import HeaderContainer from "../../../components/structure/HeaderContainer.jsx";
import MainContainer from "../../../components/structure/MainContainer.jsx";
import FooterContainer from "../../../components/structure/FooterContainer.jsx";
import PageTitle from "../../../components/common/page-title/PageTitle.jsx";
import LoginForm from "../../../components/common/forms/LoginForm.jsx";
import RegisterLogin from "../../../constants/page-content/register-login.json";
import {useContext} from "react";
import {LanguageContext} from "../../../context/LanguageContext.jsx";
import UtilityMessages from "../../../constants/utilityMessages.json";

import IconButton from "../../../components/ui/buttons/IconButton.jsx";
import {useNavigate} from "react-router-dom";
import "/src/scss/scss-pages/landing-page.scss";
import BackArrow from "../../../components/ui/svg-components/BackArrow.jsx";


const LoginPage = () => {

    const navigate = useNavigate();
    const { language } = useContext(LanguageContext);
    const { username, password, submit, login } = RegisterLogin[language].form;
    const { success_auth_message,  } = UtilityMessages[language];

    return (
        <PageContainer pageContainerClass="register-login__page-container">

            <HeaderContainer headerContainerClass="login-register__header">
                <PageTitle pageTitleClass="login-register__title" pageTitle={login}>
                    <IconButton
                        buttonClass="button__go-back"
                        onClickHandler={() => navigate('/')}>
                        <BackArrow backArrowClass="icon__back-arrow" />
                    </IconButton>
                </PageTitle>
            </HeaderContainer>



            <MainContainer mainContainerClass="register-login__main">
                <LoginForm
                    titleConstant={login}
                    usernameConstant={username}
                    passwordConstant={password}
                    submitConstant={submit}
                    success_auth_message={success_auth_message}
                />
            </MainContainer>



            <FooterContainer>

            </FooterContainer>

        </PageContainer>
    );
};

export default LoginPage;