import {createContext, useEffect, useState} from "react";
import endpoints from "../api/endpoints.json";
import {isTokenExpired} from "../helpers/isTokenExpired.js";
import {extractFromLocalStorage} from "../helpers/extractFromLocalStorage.js";
import {extractUsernameFromToken} from "../helpers/extractUsernameFromToken.js";
import axios from "axios";

export const UserContext = createContext({});

const UserContextProvider = ({children}) => {

    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [authenticated, setAuthenticated] = useState({
        isAuth: false,
        user: {
            username: '',
            firstname: '',
            preferences: {
                showMeat: true,
                showFish: true,
                showVega: true,
                showVegan: true,
            },
            enabled: false,
        },
        status: 'pending',
    });

    useEffect(() => {
        const token = extractFromLocalStorage('token');
        if (token && !isTokenExpired(token)) {
            const username = extractUsernameFromToken(token);
            void fetchUser(username, token);
        } else {
            setAuthenticated({
                isAuth: false,
                user: null,
                status: 'completed',
            })
            localStorage.clear();
        }
    }, []);

    const fetchUser = async (username, token) => {

        setError(null);
        setIsLoading(true);

        try {
            const response = await axios.get(endpoints.user + username, {
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": "Bearer " + token,
                }
            });
            setAuthenticated({
                isAuth: true,
                user: response.data,
                status: 'completed',
            });
        } catch (e) {
            console.error(e);
            setError(e);
        } finally {
            setIsLoading(false);
        }
    }

    const userObject = {
        authenticated,
        setAuthenticated,
        user: authenticated.user,
        isLoggedIn: authenticated.isAuth,
        // preferences: authenticated.user.preferences,
        isLoading,
        error,
    }

    return (
        <UserContext.Provider value={userObject}>
            {children}
        </UserContext.Provider>
    );
}

export default UserContextProvider;

