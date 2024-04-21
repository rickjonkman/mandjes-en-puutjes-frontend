import {useContext, useState} from "react";
import {UserContext} from "../../../../context/UserContext.jsx";
import FormBasicInfo from "./FormBasicInfo.jsx";
import FormTags from "./FormTags.jsx";
import FormIngredients from "./FormIngredients.jsx";
import FormInstructions from "./FormInstructions.jsx";
import SubmitButton from "../../../ui/buttons/SubmitButton.jsx";
import FormRecipeType from "./FormRecipeType.jsx";
import NewRecipeContent from "/src/constants/page-content/new-recipe.json";
import {LanguageContext} from "../../../../context/LanguageContext.jsx";
import axios from "axios";
import {useNavigate} from "react-router-dom";


const NewRecipeForm = () => {

    const navigate = useNavigate();
    const {username} = useContext(UserContext);
    const {language} = useContext(LanguageContext);
    const { label_creator } = NewRecipeContent[language].main.form_creator;


    const [formData, setFormData] = useState({
        recipeName: '',
        servings: 0,
        prepTime: {
            hour: 0,
            min: 0,
        },
        meat: true,
        fish: true,
        vegetarian: true,
        vegan: true,
        tags: [],
        ingredients: [],
        instructions: [],
        createdByUser: username,
    });

    console.log(formData)

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        const token = localStorage.getItem('token');

        try {
            const response = await axios.post('http://localhost:8080/api/v1/recipes/auth/add-new', formData,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        "Authorization": `Bearer ${token}`
                    }
                });
            if (response.status === 200 || response.status === 201) {
                console.log('New recipe added');
                navigate('/recipes/image-upload');
            }
        } catch (e) {
            console.error(e);
        }

    }

    return (
        <form className="new-recipe__form" onSubmit={handleFormSubmit}>

            <FormBasicInfo
                formData={formData}
                setFormData={setFormData}
            />

            <FormRecipeType
                formState={formData}
                setFormState={setFormData}
            />

            <FormTags
                formData={formData}
                setFormData={setFormData}
            />

            <FormIngredients
                formData={formData}
                setFormData={setFormData}
            />

            <FormInstructions
                formData={formData}
                setFormData={setFormData}
            />

            <div className="new-recipe__creator">
                <label htmlFor="creator"><span>{label_creator}</span>
                    <input
                        className="new-recipe__creator--input-readonly"
                        type="text"
                        value={formData.createdByUser}
                        placeholder={formData.createdByUser}
                        readOnly
                    />
                </label>
            </div>


            <SubmitButton
                buttonClass="new-recipe__form--submit-button"
                buttonType="submit"
                buttonText="Maak nieuw recept aan"
            />

        </form>
    );
};

export default NewRecipeForm;