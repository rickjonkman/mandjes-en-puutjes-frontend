import {useEffect, useState} from "react";
import axios from "axios";

export default function useFetchRecipes(url) {

    const [recipes, setRecipes] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, toggleIsLoading] = useState(false);

    useEffect(() => {

        setError(null);
        toggleIsLoading(true);

        async function fetchRecipes() {

            try {
                const response = await axios.get(url);
                setRecipes(response.data);
            } catch (e) {
                console.error(e);
                setError(e);
            } finally {
                toggleIsLoading(false);
            }
        }

        void fetchRecipes();

    }, []);

    return {recipes, error, isLoading};

}