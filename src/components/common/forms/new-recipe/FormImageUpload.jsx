import {useEffect, useState} from "react";
import axios from "axios";


const FormImageUpload = () => {

    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [imageUpload, setImageUpload] = useState(null);

    useEffect(() => {

        const formData = new FormData();
        formData.append('file', imageUpload);

        const uploadImage = async () => {

            try {
                const response = await axios.post("http://localhost:8080/api/v1/recipes/upload-image", formData,
                    {
                        headers: {
                            'Content-Type': 'multipart/form-data',
                            "Authorization": `Bearer ${localStorage.getItem("token")}`
                        }
                    });
                console.log(response);
            } catch (e) {
                console.error("Error uploading image: ", e);
                setError(e);
            } finally {
                setIsLoading(false);
            }

            void uploadImage();

        }

    }, [imageUpload]);


    return (
        <div className="new-recipe__form--image-upload">

            <div className="new-recipe--title-container">
                <h2>Foto uploaden</h2>
                <p>Voeg een foto toe wat bij dit recept hoor.</p>
            </div>

            <div className="new-recipe__image--content">

                <label htmlFor="recipe-image">

                    <input
                        type="file"
                        id="recipe-image"
                        name="recipeImage"
                        onChange={(e) => {
                            setImageUpload(e.target.files[0]);
                        }}
                    />

                </label>

            </div>

        </div>
    );
};

export default FormImageUpload;