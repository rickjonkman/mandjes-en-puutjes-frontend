

const PreferenceCheckbox = ({ preferenceCheckboxClass, handleCheckboxChange, checkboxTitle, children, preferenceId, preferenceValue }) => {
    return (
        <div className={preferenceCheckboxClass}>

            <label htmlFor={preferenceId}>
                <input
                    type="checkbox"
                    value={preferenceValue}
                    id={preferenceId}
                    onChange={handleCheckboxChange}
                    defaultChecked={true}
                />
                <span>{checkboxTitle}</span>
            </label>

            {children}
        </div>
    );
};

export default PreferenceCheckbox;