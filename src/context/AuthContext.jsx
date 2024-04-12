import {createContext, useContext, useEffect, useState} from "react";
import axios from "axios";
import {isTokenExpired} from "../helpers/isTokenExpired.js";
import {extractUsernameFromToken} from "../helpers/extractUsernameFromToken.js";
import utilityMessages from "../constants/utilityMessages.json";
import {LanguageContext} from "./LanguageContext.jsx";

export const AuthContext = createContext({ });

const AuthContextProvider = ({children}) => {

    const { language } = useContext(LanguageContext);

    const {
        error_message,
    } = utilityMessages[language];

    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [authenticated, setAuthenticated] = useState({
        isAuth: false,
        user: null,
        status: 'pending',
    });

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token && isTokenExpired(token)) {
            const username = extractUsernameFromToken(token);
            void login(token, username);
        } else {
            // logOut();
            localStorage.removeItem('token');
        }
    }, []);


    const authenticate = async (username, password) => {

        setError(null);
        setIsLoading(true);

        try {
            const response = await axios.post('http://localhost:8080/api/v1/users/authenticate', {
                username: username,
                password: password
            });
            console.log(response);
        } catch (e) {
            console.error(e);
            setError(error_message);
        } finally {
            setIsLoading(false);
        }

    }


    const login = async (token, username) => {

        setError(null);
        setIsLoading(true);

        try {
            const response = await axios.get(`http://localhost:8080/api/v1/user/get?username=${username}`,
                {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    }
                });
            console.log(response);
        } catch (e) {
            console.error(e);
            setError(error_message);
        }

    }




    const authObject = {
        authenticated,
        setAuthenticated,
        authenticate,
        error,
        isLoading,
    }

        return (
            <AuthContext.Provider value={authObject}>
                {children}
            </AuthContext.Provider>
        );
}

export default AuthContextProvider;