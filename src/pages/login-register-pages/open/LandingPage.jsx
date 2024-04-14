import PageContainer from "../../../components/structure/PageContainer.jsx";
import HeaderContainer from "../../../components/structure/HeaderContainer.jsx";
import LandingPageTitle from "../../../components/common/page-title/LandingPageTitle.jsx";
import "/src/scss/scss-pages/scss-login-register-pages/landing-page.scss";
import landingPage from "/src/constants/page-content/landing-page.json";
import {useContext} from "react";
import {LanguageContext} from "../../../context/LanguageContext.jsx";
import NavBar from "../../../components/ui/nav/NavBar.jsx";
import Button from "../../../components/ui/buttons/Button.jsx";
import MainContainer from "../../../components/structure/MainContainer.jsx";


const LandingPage = () => {

    const { language } = useContext(LanguageContext);

    return (
        <PageContainer pageContainerClass="landing-page__page-container">

            <HeaderContainer headerContainerClass="landing-page__header">
                <NavBar/>

                <LandingPageTitle
                    title={landingPage[language].title}
                    subtitle={landingPage[language].subtitle}
                />
            </HeaderContainer>

            <div className="landing-page__bg-image--broccoli"></div>

            <MainContainer mainContainerClass="landing-page__main-container">

                <div className="landing-page__cta-section">

                    <Button
                        buttonClass="landing-page__cta-button--primary"
                        buttonText={landingPage[language].primaryButton}
                    />

                    <Button
                        buttonClass="landing-page__cta-button--secondary"
                        buttonText={landingPage[language].secondaryButton}
                    />

                </div>

            </MainContainer>

        </PageContainer>
    );
};

export default LandingPage;