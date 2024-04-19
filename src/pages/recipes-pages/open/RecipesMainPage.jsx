import PageContainer from "../../../components/structure/PageContainer.jsx";
import HeaderContainer from "../../../components/structure/HeaderContainer.jsx";
import PageTitle from "../../../components/common/page-title/PageTitle.jsx";
import RecipesMain from "/src/constants/page-content/recipes-main.json";
import {useContext} from "react";
import {LanguageContext} from "../../../context/LanguageContext.jsx";
import NavBar from "../../../components/ui/nav/NavBar.jsx";
import MainContainer from "../../../components/structure/MainContainer.jsx";
import BlockItem from "../../../components/common/block-items/BlockItem.jsx";
import MainPageItem from "../../../components/common/main-page-item/MainPageItem.jsx";
import {useNavigate} from "react-router-dom";
import "/src/scss/scss-pages/main-pages.scss";
import FooterContainer from "../../../components/structure/FooterContainer.jsx";


const RecipesMainPage = () => {

    const navigate = useNavigate();
    const { language } = useContext(LanguageContext);
    const { page_title_class } = RecipesMain[language].classes;
    const { page_title } = RecipesMain[language].content;
    const { block_items } = RecipesMain[language].blocks;



    return (
        <PageContainer pageContainerClass="main-page__container">

            <HeaderContainer headerContainerClass="main-page__header">

                <NavBar />

                <PageTitle
                    pageTitleClass={page_title_class}
                    pageTitle={page_title}
                />

            </HeaderContainer>

            <MainContainer mainContainerClass="main-page__main">

                {
                    Object.values(block_items).map((item, index) => (
                        <MainPageItem
                            key={index}
                            title={item.title}
                            subtitle={item.subtitle}
                            buttonClass={item.button.class}
                            buttonText={item.button.text}
                            onButtonClick={() => navigate(item.button.navigate)}
                        />
                    ))
                }

            </MainContainer>

            <FooterContainer />

        </PageContainer>
    );
};

export default RecipesMainPage;