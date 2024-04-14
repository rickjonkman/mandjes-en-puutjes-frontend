import Checkbox from "../../ui/inputs/Checkbox.jsx";
import {useContext} from "react";
import {UserContext} from "../../../context/UserContext.jsx";


const FoodPreferencesBlock = () => {

    const { preferences, setAuthenticated, authenticated } = useContext(UserContext);

    const preferencesArray = Object.keys(preferences).map((key) => {
        return {
            id: key.replace('show', '').toLowerCase(),
            value: preferences[key]
        }
    });

    const handleChangePreference = (preference) => {
        setAuthenticated({
            ...authenticated,
            preferences: {
                ...preferences,
                [preference]: !preferences[preference]
            }
        })
    }

    return (
        <article className="food-preferences__container">

            {
                preferencesArray.map((preference, index) => {
                    return (
                        <Checkbox
                            key={index}
                            id={preference.id}
                            name="preferences"
                            checkedCB={preference.value}
                            onChangeCB={() => handleChangePreference(preference.id)}
                        />
                    )
                })
            }

        </article>
    );
};

export default FoodPreferencesBlock;