import {useContext, useState} from 'react';
import IconButton from "../../../ui/buttons/IconButton.jsx";
import CloseIcon from "../../../ui/svg-components/CloseIcon.jsx";
import NewRecipeContent from "/src/constants/page-content/new-recipe.json"
import {LanguageContext} from "../../../../context/LanguageContext.jsx";

const FormTags = ({ formData, setFormData }) => {

    const { language } = useContext(LanguageContext);
    const { title, description, delete_icon_description, tag_placeholder } = NewRecipeContent[language].main.form_tags;

    const { tags } = formData;
    const [tag, setTag] = useState('');

    const addTagsToFormData = (newTags) => {
        setFormData({
            ...formData,
            tags: newTags,
        });
    }

    const removeTag = (indexToRemove) => {
        const newTags = tags.filter((tag, index) => index !== indexToRemove);
        addTagsToFormData(newTags);
    }

    const handleChange = (e) => {
        setTag(e.target.value);
    }

    const handleKeyDown = (e) => {
        const {key} = e;
        const newTag = tag.trim();

        if ((key === 'Enter' || key === ',' || key === 'Tab') && newTag.length && !tags.includes(newTag)) {
            e.preventDefault();
            const newTags = [...tags, newTag];
            addTagsToFormData(newTags);
            setTag('');
        } else if (key === 'Backspace' && !newTag.length && tags.length) {
            e.preventDefault();

            const newTags = tags.slice(0, -1);
            addTagsToFormData(newTags);
        }
    }

    return (
        <div className="new-recipe__tags-section">
            <div className="new-recipe--title-container">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>


            <div className="new-recipe__tags-input">
                {
                    tags.map((tag, index) => (
                        <span key={index} className="new-recipe__tag">
                                {tag}
                            <IconButton
                                buttonClass="new-recipe__tag-delete-button"
                                buttonClickHandler={() => removeTag(index)}>
                                <CloseIcon closeIconClass="close-icon__svg" />
                            </IconButton>
                            </span>
                    ))
                }
                <input
                    className="new-recipe__tag-input"
                    value={tag}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    placeholder={tag_placeholder}
                />
            </div>

        </div>
    );
};

export default FormTags;