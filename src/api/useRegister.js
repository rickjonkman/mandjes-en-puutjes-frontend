import {useCallback, useState} from "react";
import axios from "axios";

export default function useRegister(url) {

    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState(null);

    const request = useCallback(async (requestData) => {

        setError(null);
        setIsLoading(true);

        try {
            const response = await axios.post(url, requestData);
            console.log(response);
            setData(response.data);
        } catch (e) {
            console.error(e);
            setError(e);
        } finally {
            setIsLoading(false);
        }
    }, [url]);

    return {request, data, isLoading, error};

}