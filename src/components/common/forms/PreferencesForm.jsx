
import MeatIcon from "../../ui/svg-components/MeatIcon.jsx";
import FishIcon from "../../ui/svg-components/FishIcon.jsx";
import VegetarianIcon from "../../ui/svg-components/VegetarianIcon.jsx";
import VeganIcon from "../../ui/svg-components/VeganIcon.jsx";
import {useContext} from "react";
import {LanguageContext} from "../../../context/LanguageContext.jsx";
import RegisterLogin from "/src/constants/page-content/register-login.json";
import PreferenceCheckbox from "../preference-checkbox/PreferenceCheckbox.jsx";


const PreferencesForm = ({handleCheckboxChange}) => {

    const { language } = useContext(LanguageContext);
    const { title, description, meat, fish, vegetarian, vegan } = RegisterLogin[language].form.preferences;

    return (
        <section className="register-form__preferences">

            <div className="form__subtitle-container">
            <h2>{title}</h2>
                <p>{description}</p>
            </div>

            <PreferenceCheckbox
                preferenceId="preferences-meat"
                preferenceValue="showMeat"
                checkboxTitle={meat}
                handleCheckboxChange={handleCheckboxChange}
            >
                <MeatIcon />
            </PreferenceCheckbox>

            <PreferenceCheckbox
                preferenceId="preferences-fish"
                preferenceValue="showFish"
                checkboxTitle={fish}
                handleCheckboxChange={handleCheckboxChange}
            >
                <FishIcon />
            </PreferenceCheckbox>

            <PreferenceCheckbox
                preferenceId="preferences-vegetarian"
                preferenceValue="showVegetarian"
                checkboxTitle={vegetarian}
                handleCheckboxChange={handleCheckboxChange}
            >
                <VegetarianIcon />
            </PreferenceCheckbox>

            <PreferenceCheckbox
                preferenceId="preferences-vegan"
                preferenceValue="showVegan"
                checkboxTitle={vegan}
                handleCheckboxChange={handleCheckboxChange}
            >
                <VeganIcon />
            </PreferenceCheckbox>

        </section>
    );
};

export default PreferencesForm;