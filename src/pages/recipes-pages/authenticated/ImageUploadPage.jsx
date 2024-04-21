import PageContainer from "../../../components/structure/PageContainer.jsx";
import HeaderContainer from "../../../components/structure/HeaderContainer.jsx";
import PageTitle from "../../../components/common/page-title/PageTitle.jsx";
import NewRecipeContent from "/src/constants/page-content/new-recipe.json";
import {useContext, useEffect, useState} from "react";
import {LanguageContext} from "../../../context/LanguageContext.jsx";
import MainContainer from "../../../components/structure/MainContainer.jsx";
import axios from "axios";
import SubmitButton from "../../../components/ui/buttons/SubmitButton.jsx";


const ImageUploadPage = () => {

    const {language} = useContext(LanguageContext);
    const {title} = NewRecipeContent[language].main.form_image_upload;

    const [image, setImage] = useState(null);

    const handleSelectImage = (e) => {
        setImage(e.target.files[0])
    }

    const handleUploadImage = async () => {

        const token = localStorage.getItem('token');

        const formData = new FormData();
        formData.append('image', image);

        try {
            const response = await axios.post('http://localhost:8080/api/v1/recipes/auth/upload-image', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    "Authorization": `Bearer ${token}`,
                }
            });
            console.log(response)
        } catch (e) {
            console.error(e);
        }

    }

    return (
        <PageContainer>

            <HeaderContainer headerContainerClass="image-upload__header">
                <PageTitle pageTitle={title} pageTitleClass="new-recipe__image-upload--title"/>
            </HeaderContainer>

            <MainContainer>
                <div className="new-recipe__image-upload">
                    <form onSubmit={handleUploadImage}>
                        <label htmlFor="image-upload">
                            <input type="file" id="image-upload" onChange={handleSelectImage}/>
                        </label>

                        <SubmitButton buttonClass="image-upload__button" buttonText="OK" />
                    </form>
                </div>
            </MainContainer>

        </PageContainer>
    );
};

export default ImageUploadPage;