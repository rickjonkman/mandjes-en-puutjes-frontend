import {createContext, useEffect, useState} from "react";
import endpoints from "../api/endpoints.json";
import {isTokenExpired} from "../helpers/isTokenExpired.js";
import {extractUsernameFromToken} from "../helpers/extractUsernameFromToken.js";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import LoadingPage from "../pages/util-pages/LoadingPage.jsx";

export const UserContext = createContext({});

const UserContextProvider = ({children}) => {

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

        if (token && !isTokenExpired(token)) {
            const username = extractUsernameFromToken(token);
            void fetchUser(username, token);
        } else {
            logout();
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
            localStorage.setItem('token', response.data.jwt);
            navigate('/dashboard')
        } catch (e) {
            console.error(e);
            setError(e);
        } finally {
            setIsLoading(false);
        }

    }

    const fetchUser = async (username, token) => {

        setError(null);
        setIsLoading(true);

        try {
            const response = await axios.get(`${endpoints.endpoints.getUser}?username=${username}`, {
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${token}`,
                }
            });
            console.log(response)
        } catch (e) {
            console.error(e);
        } finally {
            setIsLoading(false);
        }
    }

    const logout = () => {
        localStorage.removeItem('token');
        setAuthenticated({
            isAuth: false,
            user: null,
            status: 'completed',
        });
    }

    console.log(authenticated)

    const userObject = {
        authenticated,
        setAuthenticated,
        user: authenticated.user,
        isLoggedIn: authenticated.isAuth,
        // preferences: authenticated.user.preferences,
        authenticate,
        isLoading,
        error,
    }

    return (
        <UserContext.Provider value={userObject}>
            {authenticated.status === 'completed' ? children : <LoadingPage />}
        </UserContext.Provider>
    );
}

export default UserContextProvider;

