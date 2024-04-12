import {useEffect, useState} from "react";
import axios from "axios";

export default function useFetchRecipes(url) {

    const [recipes, setRecipes] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        void fetchRecipes();
    }, []);

    const fetchRecipes = async () => {

        setError(null);
        setIsLoading(true);

        try {
            const response = await axios.get(url);
            setRecipes(response.data);
        } catch (e) {
            console.error(e);
        } finally {
            setIsLoading(false);
        }
    }

    return { recipes, error, isLoading, fetchRecipes}

}