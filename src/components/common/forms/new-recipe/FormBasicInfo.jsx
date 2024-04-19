

const FormBasicInfo = ({ recipeNameValue, servingsValue, handleOnChangeRecipeName, handleOnChangeServings, handleOnChangePrepTimeHour, prepTimeValue, handleOnChangePrepTimeMin }) => {
    return (
        <div className="new-recipe__basic-info">

            <div className="new-recipe--title-container">
                <h2>Algemene informatie</h2>
            </div>

            <label htmlFor="new-recipe__name">
                <span>Naam van het recept:</span>
                <input
                    type="text"
                    placeholder="Naam..."
                    id="new-recipe__name"
                    name="recipeName"
                    value={recipeNameValue}
                    onChange={handleOnChangeRecipeName}
                />
            </label>

            <div className="new-recipe__basic-info--prep-time">
                <h3>Bereidingstijd</h3>
                <div className="prep-time__input-fields">
                    <label htmlFor="prep-time__hour">
                        <span>Uur</span>
                        <input
                            type="number"
                            placeholder="00"
                            id="prep-time__hour"
                            name="prepTime__hour"
                            value={prepTimeValue.hour}
                            onChange={handleOnChangePrepTimeHour}
                        />
                    </label>

                    <label htmlFor="prep-time__min">
                        <span>Min</span>
                        <input
                            type="number"
                            placeholder="00"
                            id="prep-time__min"
                            name="prepTime__min"
                            value={prepTimeValue.min}
                            onChange={handleOnChangePrepTimeMin}
                        />
                    </label>
                </div>
            </div>

            <div className="new-recipe__basic-info--servings">
                <h3>Porties</h3>
                <label htmlFor="new-recipe__servings">
                    <span>Aantal personen:</span>
                    <input
                        type="number"
                        placeholder="Porties"
                        id="new-recipe__servings"
                        name="servings"
                        value={servingsValue}
                        onChange={handleOnChangeServings}
                    />
                </label>
            </div>

        </div>
    );
};

export default FormBasicInfo;