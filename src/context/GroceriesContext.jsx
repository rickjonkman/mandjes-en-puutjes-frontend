import {createContext, useEffect, useState} from "react";
import {getCurrentDate} from "../helpers/getCurrentDate.js";
import {extractUsernameFromToken} from "../helpers/extractUsernameFromToken.js";
import axios from "axios";

export const GroceriesContext = createContext({ });

const GroceriesContextProvider = ({ children }) => {

    const token = localStorage.getItem("token");
    const username = extractUsernameFromToken(token);
    const listFromLocalStorage = localStorage.getItem("currentList");

    const initialItem = [
        {
            id: 0,
            name: "Voeg een product toe",
            inStorage: false,
            notFound: false,
            selected: false,
        }
    ]

    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentList, setCurrentList] = useState(listFromLocalStorage || initialItem );
    const [shoppingLists, setShoppingLists] = useState([]);

    const [productItem, setProductItem] = useState({
        id: 0,
        name: "",
        inStorage: false,
        notFound: false,
        selected: false,
    })

    useEffect(() => {
        if (listFromLocalStorage) {
            setCurrentList(JSON.parse(listFromLocalStorage));
        } else {
            setCurrentList([{
                id: 0,
                name: "Voeg een product toe",
                inStorage: false,
                notFound: false,
            }])
        }
    }, [listFromLocalStorage]);

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
        productItem,
        setProductItem,
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