import {createContext, useEffect, useState} from "react";
import {isTokenExpired} from "../helpers/isTokenExpired.js";
import axios from "axios";
import {jwtDecode} from "jwt-decode";
import endpoints from "/src/api/endpoints.json";

export const UserContext = createContext({});

const UserContextProvider = ({children}) => {

    const token = localStorage.getItem('token');

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [userDetails, setUserDetails] = useState({
        username: '',
        firstname: '',
        preferences: {
            showMeat: false,
            showFish: false,
            showVega: false,
            showVegan: false,

        },
        createdRecipes: [],
        savedRecipes: [],
    });

    useEffect(() => {

        if (token && !isTokenExpired(token)) {
            console.log('Token is expired');
            setUserDetails({
                username: '',
                firstname: '',
                enabled: false,
                preferences: {
                    showMeat: true,
                    showFish: true,
                    showVegetarian: true,
                    showVegan: true,

                },
                createdRecipes: [],
                savedRecipes: [],
            })
        } else if (token && isTokenExpired(token)) {
            const username = jwtDecode(token).sub;
            void fetchUser(username);
        }

    }, []);

    const fetchUser = async (username) => {

        setError(null);
        setIsLoading(true);

        try {
            const response = await axios.get(`${endpoints.endpoints.getUserDetails.url}?username=${username}`,
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                })
            ;
            setUserDetails({
                ...userDetails,
                username: response.data.username,
                firstname: response.data.firstname,
                enabled: response.data.enabled,
                preferences: {
                    showMeat: response.data.showMeat,
                    showFish: response.data.showFish,
                    showVega: response.data.showVegetarian,
                    showVegan: response.data.showVegan,
                },
                createdRecipes: response.data.createdRecipes,
                savedRecipes: response.data.savedRecipes,
            })

        } catch (e) {
            console.error(e);
            setError(e);
        } finally {
            setIsLoading(false);
        }
    }

    console.log(userDetails)

    const userObject = {
        userDetails,
        setUserDetails,
        username: userDetails.username,
        fetchUser,
        isLoading,
        error,
    }

    return (
        <UserContext.Provider value={userObject}>
            {children}
        </UserContext.Provider>
    )

}

export default UserContextProvider;

