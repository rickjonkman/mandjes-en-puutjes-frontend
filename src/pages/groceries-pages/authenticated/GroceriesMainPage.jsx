import {useContext} from "react";
import {LanguageContext} from "../../../context/LanguageContext.jsx";
import PageContainer from "../../../components/structure/PageContainer.jsx";
import HeaderContainer from "../../../components/structure/HeaderContainer.jsx";
import PageTitle from "../../../components/common/page-title/PageTitle.jsx";
import pageContent from "../../../constants/pageContent.json";

const GroceriesMainPage = () => {

    const { language } = useContext(LanguageContext);

    return (
        <PageContainer>

            <HeaderContainer>
                <PageTitle pageTitleClass="groceries-main__title" pageTitle={pageContent[language].groceriesMain.title} />
            </HeaderContainer>

        </PageContainer>
    );
};

export default GroceriesMainPage;