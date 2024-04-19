

const PreferenceCheckbox = ({ preferenceCheckboxClass, handleCheckboxChange, children, preferenceId, preferenceValue }) => {
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
            </label>

            {children}
        </div>
    );
};

export default PreferenceCheckbox;