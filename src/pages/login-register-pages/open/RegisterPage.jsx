import HeaderContainer from "../../../components/structure/HeaderContainer.jsx";
import PageTitle from "../../../components/common/page-title/PageTitle.jsx";
import MainContainer from "../../../components/structure/MainContainer.jsx";
import FooterContainer from "../../../components/structure/FooterContainer.jsx";
import PageContainer from "../../../components/structure/PageContainer.jsx";
import RegisterLogin from "/src/constants/page-content/register-login.json";
import {useContext} from "react";
import {LanguageContext} from "../../../context/LanguageContext.jsx";
import RegisterForm from "../../../components/common/forms/RegisterForm.jsx";
import "/src/scss/scss-pages/scss-login-register-pages/register-page.scss";
import BackArrow from "../../../assets/icons/back-arrow.svg";
import IconButton from "../../../components/ui/buttons/IconButton.jsx";
import {useNavigate} from "react-router-dom";

const RegisterPage = () => {

    const navigate = useNavigate();
    const { language } = useContext(LanguageContext);
    // const { title, loading, form, preferencesContent } = PageContent[language].registerPage;
    const { title, loading, form, preferences } = RegisterLogin[language].register;

    return (
        <PageContainer pageContainerClass="register-page__page-container">

            <HeaderContainer headerContainerClass="login-register__header">
                <PageTitle pageTitleClass="login-register__title" pageTitle={title}>
                    <IconButton
                        buttonClass="button__go-back"
                        onClickHandler={() => navigate('/')}
                        iconSrc={BackArrow}
                        iconDescription="Klik om terug te gaan"
                        buttonIconId="icon__go-back"
                    />
                </PageTitle>
            </HeaderContainer>



            <MainContainer mainContainerClass="register-page__main">
                <RegisterForm
                    loading={loading}
                    form={form}
                    preferencesContent={preferences}
                />
            </MainContainer>



            <FooterContainer>

            </FooterContainer>

        </PageContainer>
    );
};

export default RegisterPage;