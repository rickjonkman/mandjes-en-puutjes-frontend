import HeaderContainer from "../../../components/structure/HeaderContainer.jsx";
import PageTitle from "../../../components/common/page-title/PageTitle.jsx";
import MainContainer from "../../../components/structure/MainContainer.jsx";
import FooterContainer from "../../../components/structure/FooterContainer.jsx";
import PageContainer from "../../../components/structure/PageContainer.jsx";
import PageContent from "/src/constants/pageContent.json";
import {useContext} from "react";
import {LanguageContext} from "../../../context/LanguageContext.jsx";
import RegisterFormHeader from "../../../components/page-components/login-register-components/RegisterFormHeader.jsx";
import RegisterForm from "../../../components/common/forms/RegisterForm.jsx";

const RegisterPage = () => {

    const { language } = useContext(LanguageContext);
    const { title, loading, form, preferencesContent } = PageContent[language].registerPage;

    return (
        <PageContainer>

            <HeaderContainer>
                <PageTitle pageTitleClass="login-register__title" pageTitle={title}/>
            </HeaderContainer>



            <MainContainer>
                <RegisterFormHeader />
                <RegisterForm
                    loading={loading}
                    form={form}
                    preferencesContent={preferencesContent}
                />
            </MainContainer>



            <FooterContainer>

            </FooterContainer>

        </PageContainer>
    );
};

export default RegisterPage;