import utilityMessages from "../../constants/utilityMessages.json";
import {useContext} from "react";
import {LanguageContext} from "../../context/LanguageContext.jsx";

const PleaseRegisterPage = () => {

    const { language } = useContext(LanguageContext);
    const { not_logged_in } = utilityMessages[language];

    return (
        <div>
            <h1>{not_logged_in}</h1>
        </div>
    );
};

export default PleaseRegisterPage;