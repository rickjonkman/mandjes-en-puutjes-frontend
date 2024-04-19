import {useState} from "react";
import IconButton from "../../../ui/buttons/IconButton.jsx";
import AddIcon from "../../../ui/svg-components/AddIcon.jsx";
import MinusIcon from "../../../../assets/icons/minus-icon.svg";


const FormInstructions = ({instructions, addInstructionsToFormData}) => {

    const [instruction, setInstruction] = useState({
        step: '',
        description: '',
    });

    const handleChangeStep = (e) => {
        setInstruction({
            ...instruction,
            step: e.target.value,
        });
    }

    const handleChangeDescription = (e) => {
        setInstruction({
            ...instruction,
            description: e.target.value,
        });
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
                <h2>Instructies</h2>
                <p>Voeg de stappen van je recept toe</p>
            </div>

            <div className="new-recipe__instructions-input-container">
                {
                    instructions.map((instruction, index) => (
                        <div key={index} className="new-recipe__instruction">

                            <span id="span-step">{instruction.step}</span>
                            <span id="span-description">{instruction.description}</span>

                            <IconButton
                                iconSrc={MinusIcon}
                                iconId="delete-icon"
                                iconDescription={`Verwijder stap ${instruction.step}`}
                                buttonClickHandler={() => removeInstruction(index)}
                            />

                        </div>
                    ))
                }
                <div className="new-recipe__instruction-input">

                    <div className="new-recipe__instruction-input--step-container">
                        <label htmlFor="instruction__step">
                            <input
                                type="number"
                                placeholder="Stap"
                                value={instruction.step}
                                onChange={handleChangeStep}
                                id="instruction__step"
                            />
                        </label>
                    </div>

                    <div className="new-recipe__instruction-input--description-container">
                        <label htmlFor="instruction__description">
                            <input
                                type="text"
                                placeholder="Beschrijving"
                                value={instruction.description}
                                onChange={handleChangeDescription}
                                onKeyDown={handleKeyDown}
                                id="instruction__description"
                            />
                        </label>
                    </div>

                    <IconButton
                        iconSrc={AddIcon}
                        iconId="add-icon"
                        iconDescription="Voeg stap toe"
                        buttonClickHandler={() => {
                            const newInstructions = [...instructions, instruction];
                            addInstructionsToFormData(newInstructions);
                            setInstruction({
                                step: '',
                                description: '',
                            });
                        }}
                    />
                </div>
            </div>

        </div>
    );
};

export default FormInstructions;