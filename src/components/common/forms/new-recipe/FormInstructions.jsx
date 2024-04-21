import {useContext, useState} from "react";
import IconButton from "../../../ui/buttons/IconButton.jsx";
import AddIcon from "../../../ui/svg-components/AddIcon.jsx";
import {LanguageContext} from "../../../../context/LanguageContext.jsx";
import NewRecipeContent from "../../../../constants/page-content/new-recipe.json";
import CloseIcon from "../../../ui/svg-components/CloseIcon.jsx";


const FormInstructions = ({formData, setFormData}) => {

    const { language } = useContext(LanguageContext);
    const { title, description, label_step, label_instruction } = NewRecipeContent[language].main.form_instructions;

    const instructions = formData.instructions;

    const [instruction, setInstruction] = useState({
        step: '',
        description: '',
    });

    const addInstructionsToFormData = (newInstructions) => {
        setFormData({
            ...formData,
            instructions: newInstructions,
        });
    }

    const handleChangeStep = (e) => {
        setInstruction({...instruction, step: e.target.value});
    }

    const handleChangeDescription = (e) => {
        setInstruction({...instruction, description: e.target.value});
    }

    const removeInstruction = (indexToRemove) => {
        const newInstructions = instructions.filter((instruction, index) => index !== indexToRemove);
        addInstructionsToFormData(newInstructions);
    }

    const handleKeyDown = (e) => {
        const {key} = e;
        const newInstruction = instruction.description.trim();

        if ((key === 'Enter' || key === ',' || key === 'Tab') && newInstruction.length) {
            e.preventDefault();
            const newInstructions = [...instructions, instruction];
            addInstructionsToFormData(newInstructions);
            setInstruction({
                step: '',
                description: '',
            });
        } else if (key === 'Backspace' && !newInstruction.length && instructions.length) {
            e.preventDefault();

            const newInstructions = instructions.slice(0, -1);
            addInstructionsToFormData(newInstructions);
        }
    }

    return (
        <div className="new-recipe__instructions-section">

            <div className="new-recipe--title-container">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>

            <div className="new-recipe__instructions-input-container">
                {
                    instructions.map((instruction, index) => (
                        <div key={index} className="new-recipe__instruction">

                            <span id="span-step">{instruction.step}</span>
                            <span id="span-description">{instruction.description}</span>

                            <IconButton
                                buttonClass="remove-instruction__button"
                                buttonClickHandler={() => removeInstruction(index)}>
                                <CloseIcon closeIconClass="close-icon__svg" width="1rem" height="1rem" />
                            </IconButton>

                        </div>
                    ))
                }
                <div className="new-recipe__instruction-input">

                    <div className="new-recipe__instruction-input--step-container">
                        <label htmlFor="instruction__step">{label_step}
                            <input
                                type="number"
                                placeholder={label_step}
                                value={instruction.step}
                                onChange={handleChangeStep}
                                id="instruction__step"
                            />
                        </label>
                    </div>

                    <div className="new-recipe__instruction-input--description-container">
                        <label htmlFor="instruction__description">{label_instruction}
                            <input
                                type="text"
                                placeholder={label_instruction}
                                value={instruction.description}
                                onChange={handleChangeDescription}
                                onKeyDown={handleKeyDown}
                                id="instruction__description"
                            />
                        </label>
                    </div>

                    <IconButton
                        buttonClass="add-instruction__button"
                        buttonClickHandler={() => {
                            const newInstructions = [...instructions, instruction];
                            addInstructionsToFormData(newInstructions);
                            setInstruction({
                                step: '',
                                description: '',
                            });
                        }}>
                        <AddIcon addIconClass="add-icon__svg" width="1rem" height="1rem" />
                    </IconButton>
                </div>
            </div>

        </div>
    );
};

export default FormInstructions;