import PageContainer from "../../../components/structure/PageContainer.jsx";
import HeaderContainer from "../../../components/structure/HeaderContainer.jsx";
import LandingPageTitle from "../../../components/common/page-title/LandingPageTitle.jsx";
import "/src/scss/scss-pages/landing-page.scss";
import landingPage from "/src/constants/page-content/landing-page.json";
import {useContext} from "react";
import {LanguageContext} from "../../../context/LanguageContext.jsx";
import Button from "../../../components/ui/buttons/Button.jsx";
import MainContainer from "../../../components/structure/MainContainer.jsx";
import FooterContainer from "../../../components/structure/FooterContainer.jsx";


const LandingPage = () => {

    const {language} = useContext(LanguageContext);

    return (
        <PageContainer pageContainerClass="landing-page__page-container">

            <div className="landing-page__bg-image--broccoli">

                <MainContainer mainContainerClass="landing-page__main-container">

                    <div className="landing-page__title-section">
                        <LandingPageTitle
                            title={landingPage[language].title}
                            subtitle={landingPage[language].subtitle}
                        />

                    </div>

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

            </div>

            <FooterContainer/>

        </PageContainer>
    )
        ;
};

export default LandingPage;