import {createContext, useState} from "react";

export const LanguageContext = createContext({ });

const LanguageContextProvider = ({children}) => {

    const [language, setLanguage] = useState('nl');

    const langObject = {
        language,
        setLanguage
    }

    return (
        <LanguageContext.Provider value={langObject}>
            {children}
        </LanguageContext.Provider>
    );

}

export default LanguageContextProvider;