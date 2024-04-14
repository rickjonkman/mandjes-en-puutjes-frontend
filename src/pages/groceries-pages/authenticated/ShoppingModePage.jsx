import PageContainer from "../../../components/structure/PageContainer.jsx";
import HeaderContainer from "../../../components/structure/HeaderContainer.jsx";
import PageTitle from "../../../components/common/page-title/PageTitle.jsx";
import {useContext} from "react";
import {LanguageContext} from "../../../context/LanguageContext.jsx";
import pageContent from "../../../constants/pageContent.json";


const ShoppingModePage = () => {

    const { language } = useContext(LanguageContext);

    return (
        <PageContainer>

            <HeaderContainer>
                <PageTitle pageTitleClass="shopping-mode__title" pageTitle={pageContent[language].shoppingModePage.title} />
            </HeaderContainer>

        </PageContainer>
    );
};

export default ShoppingModePage;