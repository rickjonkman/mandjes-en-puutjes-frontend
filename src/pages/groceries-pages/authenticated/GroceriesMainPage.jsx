import {useContext} from "react";
import {LanguageContext} from "../../../context/LanguageContext.jsx";
import PageContainer from "../../../components/structure/PageContainer.jsx";
import HeaderContainer from "../../../components/structure/HeaderContainer.jsx";
import PageTitle from "../../../components/common/page-title/PageTitle.jsx";
import "/src/scss/scss-pages/scss-groceries/groceries-main.scss";
import MainContainer from "../../../components/structure/MainContainer.jsx";
import GroceriesMainContent from "/src/constants/page-content/groceries-main.json";
import MainPageItem from "../../../components/common/main-page-item/MainPageItem.jsx";
import {useNavigate} from "react-router-dom";

const GroceriesMainPage = () => {

    const navigate = useNavigate();
    const { language } = useContext(LanguageContext);
    const { title } = GroceriesMainContent[language].content;
    const { block_items } = GroceriesMainContent[language].blocks;

    return (
        <PageContainer pageContainerClass="main-page__container">

            <HeaderContainer headerContainerClass="main-page__header">
                <PageTitle pageTitleClass="groceries-main__title" pageTitle={title} />
            </HeaderContainer>

            <MainContainer mainContainerClass="main-page__main">
                {
                    Object.values(block_items).map((item, index) => {
                        return (
                            <MainPageItem
                                key={index}
                                title={item.title}
                                subtitle={item.subtitle}
                                buttonClass={item.button.class}
                                buttonText={item.button.text}
                                onButtonClick={() => navigate(item.button.navigate)}
                            />
                        )
                    })
                }
            </MainContainer>

        </PageContainer>
    );
};

export default GroceriesMainPage;