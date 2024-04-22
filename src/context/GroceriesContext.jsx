import {createContext, useEffect, useState} from "react";
import {getCurrentDate} from "../helpers/getCurrentDate.js";
import {extractUsernameFromToken} from "../helpers/extractUsernameFromToken.js";
import axios from "axios";

export const GroceriesContext = createContext({ });

const GroceriesContextProvider = ({ children }) => {

    const token = localStorage.getItem("token");
    const username = extractUsernameFromToken(token);

    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentList, setCurrentList] = useState([]);
    const [shoppingLists, setShoppingLists] = useState([]);

    useEffect(() => {
        localStorage.setItem("currentList", JSON.stringify(currentList));
    }, [currentList])

    useEffect(() => {
        const storedList = localStorage.getItem("currentList");
        if (storedList) {
            setCurrentList(JSON.parse(storedList));
        }
    }, []);

    useEffect(() => {
        void fetchShoppingLists(username, token);
    }, []);


    const fetchShoppingLists = async (username, token) => {

        setError(null);
        setIsLoading(true);

        try {
            const response = await axios.get(`http://localhost:8080/api/v1/shopping-lists/get-lists?username=${username}`,
                {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`,
                    }
                });
            console.log(response);
            setShoppingLists(response.data);
        } catch (e) {
            console.error("Error fetching shopping lists: ", e);
            setError(e);
        } finally {
            setIsLoading(false);
        }

    }


    const [listTransferObject] = useState({
        creationDate: getCurrentDate(),
        products: currentList,
        username: extractUsernameFromToken(token),
    });



    const groceriesContextObject ={
        currentList,
        setCurrentList,
        shoppingLists,
        setShoppingLists,
        listTransferObject,
        isLoading,
        error,
    }

    return (
        <GroceriesContext.Provider value={groceriesContextObject}>
            {children}
        </GroceriesContext.Provider>
    )

}

export default GroceriesContextProvider;