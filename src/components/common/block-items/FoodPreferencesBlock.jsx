import FoodPreferencesContent from "/src/constants/reusable-content/food-preferences-content.json";
import PreferenceCheckbox from "../preference-checkbox/PreferenceCheckbox.jsx";
import MeatIcon from "../../ui/svg-components/MeatIcon.jsx";
import FishIcon from "../../ui/svg-components/FishIcon.jsx";
import VegetarianIcon from "../../ui/svg-components/VegetarianIcon.jsx";
import VeganIcon from "../../ui/svg-components/VeganIcon.jsx";
import BlockTitle from "./BlockTitle.jsx";
import DashboardContent from "/src/constants/page-content/dashboard.json";
import Button from "../../ui/buttons/Button.jsx";


const FoodPreferencesBlock = ({userDetails, setUserDetails, language, blockItemClass, checkboxClass}) => {

    const {meat, fish, vegetarian, vegan} = FoodPreferencesContent[language];
    const {title, subject, button} = DashboardContent[language].blocks.preferences;

    const preferencesArray = [
        {id: 1, name: 'showMeat', htmlID: 'pref-meat', value: meat, icon: <MeatIcon/>},
        {id: 2, name: 'showFish', htmlID: 'pref-fish', value: fish, icon: <FishIcon/>},
        {id: 3, name: 'showVegetarian', htmlID: 'pref-vegetarian', value: vegetarian, icon: <VegetarianIcon/>},
        {id: 4, name: 'showVegan', htmlID: 'pref-vegan', value: vegan, icon: <VeganIcon/>},
    ]

    const handleChangePreference = (preference) => {
        const updatedPreferences = preferencesArray.map((pref) => {
            return Object.prototype.hasOwnProperty.call(pref, preference) ? {[preference]: !pref.value} : pref;
        });

        setUserDetails({
            ...userDetails,
            preferences: updatedPreferences,
        });
    }

    return (
        <article className={blockItemClass}>

            <div className="block-item__content">

                <BlockTitle blockTitle={title} blockSubject={subject}/>

                {
                    preferencesArray.map((preference) => {
                        return (
                            <PreferenceCheckbox
                                key={preference.id}
                                preferenceId={preference.htmlID}
                                preferenceValue={preference.name}
                                checkboxTitle={preference.name}
                                handleCheckboxChange={() => handleChangePreference(preference.name)}
                                preferenceCheckboxClass={checkboxClass}
                            >
                                {preference.icon}
                            </PreferenceCheckbox>
                        )
                    })
                }
            </div>

        </article>
    );
};

export default FoodPreferencesBlock;