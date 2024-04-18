import PageContainer from "../../../components/structure/PageContainer.jsx";
import HeaderContainer from "../../../components/structure/HeaderContainer.jsx";
import MainContainer from "../../../components/structure/MainContainer.jsx";
import FooterContainer from "../../../components/structure/FooterContainer.jsx";
import PageTitle from "../../../components/common/page-title/PageTitle.jsx";
import "/src/scss/scss-pages/scss-login-register-pages/register-login-page.scss";
import LoginForm from "../../../components/common/forms/LoginForm.jsx";
import RegisterLogin from "../../../constants/page-content/register-login.json";
import {useContext} from "react";
import {LanguageContext} from "../../../context/LanguageContext.jsx";
import UtilityMessages from "../../../constants/utilityMessages.json";
import BackArrow from "../../../assets/icons/back-arrow.svg";
import IconButton from "../../../components/ui/buttons/IconButton.jsx";
import {useNavigate} from "react-router-dom";


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
                        <BackArrow fill="#F8FDFBFF" backArrowClass="icon__go-back" />
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