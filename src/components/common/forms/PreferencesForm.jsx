
import MeatIcon from "../../ui/svg-components/MeatIcon.jsx";
import FishIcon from "../../ui/svg-components/FishIcon.jsx";
import VegetarianIcon from "../../ui/svg-components/VegetarianIcon.jsx";
import VeganIcon from "../../ui/svg-components/VeganIcon.jsx";
import {useContext} from "react";
import {LanguageContext} from "../../../context/LanguageContext.jsx";
import RegisterLogin from "/src/constants/page-content/register-login.json";


const PreferencesForm = ({handleCheckboxChange}) => {

    const { language } = useContext(LanguageContext);
    const { title, description, meat, fish, vegetarian, vegan } = RegisterLogin[language].form.preferences;

    return (
        <section className="register-form__preferences">

            <div className="form__subtitle-container">
            <h2>{title}</h2>
                <p>{description}</p>
            </div>

            <div className="user-preference__container">

                <label htmlFor="preferences-meat">
                    <input
                        type="checkbox"
                        value="showMeat"
                        id="preferences-meat"
                        onChange={handleCheckboxChange}
                        defaultChecked={true}
                    />
                    <span>{meat}</span>
                </label>

                <MeatIcon fill="#000"/>
            </div>

            <div className="user-preference__container">

                <label htmlFor="preferences-fish">
                    <input
                        type="checkbox"
                        value="showFish"
                        id="preferences-fish"
                        onChange={handleCheckboxChange}
                        defaultChecked={true}
                    />
                    {fish}
                </label>

                <FishIcon/>
            </div>

            <div className="user-preference__container">

                <label htmlFor="preferences-vegetarian">
                    <input
                        type="checkbox"
                        value="showVegetarian"
                        id="preferences-vegetarian"
                        onChange={handleCheckboxChange}
                        defaultChecked={true}
                    />
                    {vegetarian}
                </label>

                <VegetarianIcon/>
            </div>

            <div className="user-preference__container">

                <label htmlFor="preferences-vegan">
                    <input
                        type="checkbox"
                        value="showVegan"
                        id="preferences-vegan"
                        onChange={handleCheckboxChange}
                        defaultChecked={true}
                    />
                    {vegan}
                </label>

                <VeganIcon/>
            </div>

        </section>
    );
};

export default PreferencesForm;