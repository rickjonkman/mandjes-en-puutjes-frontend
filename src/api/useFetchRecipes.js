import {useEffect, useState} from "react";
import axios from "axios";

export default function useFetchRecipes(url) {

    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {

        async function fetchRecipes(url) {

            setError(null);
            setIsLoading(true);

            try {
                const response = await axios.get(url);
                console.log(response);
                setRecipes(response.data);
            } catch (e) {
                console.error(e);
                setError(e);
            } finally {
                setIsLoading(false);
            }
        }

        void fetchRecipes(url);

        return () => {
            console.log("Cleanup");
        }

    }, [url]);

    return {error, isLoading, recipes};

}