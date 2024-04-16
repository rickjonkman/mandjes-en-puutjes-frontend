import {createContext, useEffect, useState} from "react";
import {isTokenExpired} from "../helpers/isTokenExpired.js";
import {extractUsernameFromToken} from "../helpers/extractUsernameFromToken.js";
import axios from "axios";
import {useNavigate} from "react-router-dom";


export const AuthContext = createContext({});

const AuthContextProvider = ({children}) => {

    const navigate = useNavigate();
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
        }
    }, []);

    const authenticate = async (username, password) => {

        setError(null);
        setIsLoading(true);

        try {
            const response = await axios.post('http://localhost:8080/api/v1/users/authenticate', {
                username: username,
                password: password
            })
            localStorage.setItem('token', response.data.jwt);
            navigate('/dashboard');

        } catch (e) {
            console.error(e);
        } finally {
            setIsLoading(false);
        }

    }

    const login = async (token, username) => {

        setIsLoading(true);

        try {
            const response = await axios.get(`http://localhost:8080/api/v1/user/get?username=${username}`,
                {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    }
                });
            setAuthenticated({
                isAuth: true,
                user: response.data,
                status: 'completed',
            });
            localStorage.setItem('token', `${token}`);
        } catch (e) {
            console.error(e);
            setError(e);
            setAuthenticated({
                isAuth: false,
                user: null,
                status: 'completed',
            })
        } finally {
            setIsLoading(false);
        }
    }


    const logOut = () => {
        localStorage.removeItem('token');
        setAuthenticated({
            isAuth: false,
            user: null,
            status: 'completed',
        });
    }

    console.log(authenticated)

    const authObject = {
        isLoggedIn: authenticated.isAuth,
        setAuthenticated,
        authenticate,
        login,
        logOut,
        error,
        isLoading,
    }

    return (
        <AuthContext.Provider value={authObject}>
            {authenticated.status === 'completed' ? children : <p>Loading...</p>}
        </AuthContext.Provider>
    );

}

export default AuthContextProvider;