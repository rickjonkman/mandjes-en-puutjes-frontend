import footer from "/src/constants/page-content/footer.json";
import {useContext} from "react";
import {LanguageContext} from "../../context/LanguageContext.jsx";

const FooterContainer = () => {

    const { language } = useContext(LanguageContext);

    return (
        <footer className="footer-container__class">
            <h3>{footer[language].text}</h3>
        </footer>
    );
};

export default FooterContainer;