
import {useEffect, useState} from "react";
import axios from "axios";

const useFetchRecipe = (url) => {

    const [error, setError] = useState(null);
    const [isLoading, toggleIsLoading] = useState(true);
    const [singleRecipe, setSingleRecipe] = useState();

    useEffect(() => {

        setError(null);
        toggleIsLoading(true);

        const fetchSingleRecipe = async () => {
            try {
                const response = await axios.get(url);
                setSingleRecipe(response.data);
            } catch (e) {
                console.error("Error fetching single recipe: ", e);
                setError(e);
            } finally {
                toggleIsLoading(false);
            }
        }

        void fetchSingleRecipe();

    }, [url]);

    return {error, isLoading, singleRecipe};

}

export default useFetchRecipe;