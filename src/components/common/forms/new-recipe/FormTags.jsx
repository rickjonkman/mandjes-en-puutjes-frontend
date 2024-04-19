import {useState} from 'react';
import IconButton from "../../../ui/buttons/IconButton.jsx";
import CloseIcon from "../../../ui/svg-components/CloseIcon.jsx";

const FormTags = ({ tags, addTagsToFormData }) => {

    const [tag, setTag] = useState('');

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
                <h2>Tags</h2>
                <p>Voeg drie tags toe die jouw recept omschrijven en druk op enter</p>
            </div>


            <div className="new-recipe__tags-input">
                {
                    tags.map((tag, index) => (
                        <span key={index} className="new-recipe__tag">
                                {tag}
                            <IconButton
                                iconSrc={CloseIcon}
                                iconId="delete-icon"
                                iconDescription={`Verwijder tag ${tag}`}
                                buttonClickHandler={() => removeTag(index)}
                            />
                            </span>
                    ))
                }
                <input
                    className="new-recipe__tag-input"
                    value={tag}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    placeholder="Voeg een tag toe en druk op enter"
                />
            </div>

        </div>
    );
};

export default FormTags;