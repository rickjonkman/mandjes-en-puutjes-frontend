import {useState} from "react";
import axios from "axios";

export default function useFetchImage(url) {

    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [image, setImage] = useState(null)

    const fetchImage = async () => {

        setError(null);
        setIsLoading(true);

        try {
            const response = await axios.get(url, { responseType: "blob" })
            const imageUrl = URL.createObjectURL(response.data);
            setImage(imageUrl);
        } catch (e) {
            console.error("Error fetching image: ", e);
            setError(e);
        } finally {
            setIsLoading(false);
        }
    }

    return {image, fetchImage, isLoading, error};
}