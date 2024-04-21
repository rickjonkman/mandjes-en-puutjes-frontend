import NewRecipeContent from "/src/constants/page-content/new-recipe.json";
import {useContext} from "react";
import {LanguageContext} from "../../../../context/LanguageContext.jsx";

const FormBasicInfo = ({ formData, setFormData }) => {

    const { recipeName, servings, prepTime } = formData;

    const { language } = useContext(LanguageContext);
    const { title, recipe_name, prep_time, prep_time_hour, prep_time_min, servings_title, servings_amount } = NewRecipeContent[language].main.form_basic_info;

    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    const handleOnChangePrepTime = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            prepTime: {
                ...prepTime,
                [name]: parseInt(value) || 0
            }
        });
    }


    return (
        <div className="new-recipe__basic-info">

            <div className="new-recipe--title-container">
                <h2>{title}</h2>
            </div>

            <label htmlFor="new-recipe__name">
                <span>{recipe_name}</span>
                <input
                    type="text"
                    placeholder="Naam..."
                    id="new-recipe__name"
                    name="recipeName"
                    value={recipeName}
                    onChange={onChangeHandler}
                />
            </label>

            <div className="new-recipe__basic-info--prep-time">
                <h3>{prep_time}</h3>
                <div className="prep-time__input-fields">
                    <label htmlFor="prep-time__hour">
                        <span>{prep_time_hour}</span>
                        <input
                            type="number"
                            placeholder="00"
                            id="prep-time__hour"
                            name="hour"
                            value={prepTime.hour}
                            onChange={handleOnChangePrepTime}
                        />
                    </label>

                    <label htmlFor="prep-time__min">
                        <span>{prep_time_min}</span>
                        <input
                            type="number"
                            placeholder="00"
                            id="prep-time__min"
                            name="min"
                            value={prepTime.min}
                            onChange={handleOnChangePrepTime}
                        />
                    </label>
                </div>
            </div>

            <div className="new-recipe__basic-info--servings">
                <h3>{servings_title}</h3>
                <label htmlFor="new-recipe__servings">
                    <span>{servings_amount}</span>
                    <input
                        type="number"
                        placeholder="0"
                        id="new-recipe__servings"
                        name="servings"
                        value={servings}
                        onChange={onChangeHandler}
                    />
                </label>
            </div>

        </div>
    );
};

export default FormBasicInfo;