import {createContext, useEffect, useState} from "react";
import axios from "axios";
import {isTokenExpired} from "../helpers/isTokenExpired.js";
import {extractUsernameFromToken} from "../helpers/extractUsernameFromToken.js";

export const AuthContext = createContext({ });

const AuthContextProvider = ({children}) => {

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
            logOut();
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
            setError({utility.error});
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
            setError('Er is iets misgegaan. Probeer het opnieuw.');
        }

    }




    const authObject = {
        authenticated,
        setAuthenticated,
        authenticate,
    }

        return (
            <AuthContext.Provider value={authObject}>
                {children}
            </AuthContext.Provider>
        );
}

export default AuthContextProvider;