import PageContainer from "../../../components/structure/PageContainer.jsx";
import HeaderContainer from "../../../components/structure/HeaderContainer.jsx";
import MainContainer from "../../../components/structure/MainContainer.jsx";
import FooterContainer from "../../../components/structure/FooterContainer.jsx";
import PageTitle from "../../../components/common/page-title/PageTitle.jsx";


const LoginPage = () => {



    return (
        <PageContainer>

            <HeaderContainer>
                <PageTitle pageTitleClass="login-register__title" pageTitle="Inloggen"/>
            </HeaderContainer>



            <MainContainer>
                <LoginFormHeader />
                <LoginForm />
            </MainContainer>



            <FooterContainer>

            </FooterContainer>

        </PageContainer>
    );
};

export default LoginPage;