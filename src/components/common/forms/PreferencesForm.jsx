import MeatIcon from "../../ui/svg-components/MeatIcon.jsx";
import FishIcon from "../../ui/svg-components/FishIcon.jsx";
import VegetarianIcon from "../../ui/svg-components/VegetarianIcon.jsx";
import VeganIcon from "../../ui/svg-components/VeganIcon.jsx";
import {useContext} from "react";
import {LanguageContext} from "../../../context/LanguageContext.jsx";
import PreferenceCheckbox from "../preference-checkbox/PreferenceCheckbox.jsx";


const PreferencesForm = ({ handleCheckboxChange, title, description}) => {

    const {language} = useContext(LanguageContext);

    const preferencesContent = {
        en: {
            meat: "Meat",
            fish: "Fish",
            vegetarian: "Vegetarian",
            vegan: "Vegan",
        },
        nl: {
            meat: "Vlees",
            fish: "Vis",
            vegetarian: "Vegetarisch",
            vegan: "Veganistisch",
        }
    }

    const {meat, fish, vegetarian, vegan} = preferencesContent[language];

    return (
        <section className="preferences-container">

            <div className="preferences__title-container">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>

            <div className="preferences__checkboxes-container">

                <PreferenceCheckbox
                    preferenceCheckboxClass="preferences__checkbox"
                    preferenceId="preferences-meat"
                    preferenceValue="meat"
                    checkboxTitle={meat}
                    handleCheckboxChange={handleCheckboxChange}
                >
                    <MeatIcon/>
                </PreferenceCheckbox>

                <PreferenceCheckbox
                    preferenceCheckboxClass="preferences__checkbox"
                    preferenceId="preferences-fish"
                    preferenceValue="fish"
                    checkboxTitle={fish}
                    handleCheckboxChange={handleCheckboxChange}
                >
                    <FishIcon/>
                </PreferenceCheckbox>

                <PreferenceCheckbox
                    preferenceCheckboxClass="preferences__checkbox"
                    preferenceId="preferences-vegetarian"
                    preferenceValue="vegetarian"
                    checkboxTitle={vegetarian}
                    handleCheckboxChange={handleCheckboxChange}
                >
                    <VegetarianIcon/>
                </PreferenceCheckbox>

                <PreferenceCheckbox
                    preferenceCheckboxClass="preferences__checkbox"
                    preferenceId="preferences-vegan"
                    preferenceValue="vegan"
                    checkboxTitle={vegan}
                    handleCheckboxChange={handleCheckboxChange}
                >
                    <VeganIcon/>
                </PreferenceCheckbox>

            </div>

        </section>
    );
};

export default PreferencesForm;