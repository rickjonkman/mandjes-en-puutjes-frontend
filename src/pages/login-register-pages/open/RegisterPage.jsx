import HeaderContainer from "../../../components/structure/HeaderContainer.jsx";
import PageTitle from "../../../components/common/page-title/PageTitle.jsx";
import MainContainer from "../../../components/structure/MainContainer.jsx";
import FooterContainer from "../../../components/structure/FooterContainer.jsx";
import PageContainer from "../../../components/structure/PageContainer.jsx";
import RegisterLogin from "/src/constants/page-content/register-login.json";
import {useContext} from "react";
import {LanguageContext} from "../../../context/LanguageContext.jsx";
import RegisterForm from "../../../components/common/forms/RegisterForm.jsx";
import "/src/scss/scss-pages/landing-page.scss";
import IconButton from "../../../components/ui/buttons/IconButton.jsx";
import {useNavigate} from "react-router-dom";
import BackArrow from "../../../components/ui/svg-components/BackArrow.jsx";

const RegisterPage = () => {

    const navigate = useNavigate();

    const { language } = useContext(LanguageContext);
    const { title } = RegisterLogin[language];

    return (
        <PageContainer pageContainerClass="register-login__page-container">

            <HeaderContainer headerContainerClass="login-register__header">
                <PageTitle pageTitleClass="login-register__title" pageTitle={title}>
                    <IconButton
                        buttonClass="button__go-back"
                        onClickHandler={() => navigate('/')}>
                        <BackArrow backArrowClass="icon__back-arrow" />
                    </IconButton>
                </PageTitle>
            </HeaderContainer>



            <MainContainer mainContainerClass="register-login__main">
                <RegisterForm />
            </MainContainer>



            <FooterContainer>

            </FooterContainer>

        </PageContainer>
    );
};

export default RegisterPage;