import {useState} from 'react';
import SubmitButton from "../../ui/buttons/SubmitButton.jsx";
import useRegister from "../../../api/useRegister.js";
import {endpoints} from "../../../api/endpoints.json";
import PreferencesForm from "./PreferencesForm.jsx";
import UserInfoForm from "./UserInfoForm.jsx";

const RegisterForm = () => {

    const {request, error, isLoading} = useRegister(endpoints.register.url);

    const [formState, setFormState] = useState({
        firstname: '',
        username: '',
        password: '',
        preferences: {
            showMeat: true,
            showFish: true,
            showVega: true,
            showVegan: true,
        },
        enabled: true,
    });

    const handleFormChange = (e) => {
        const changeFieldName = e.target.name;

        setFormState({
            ...formState,
            [changeFieldName]: e.target.value,
        })
    }

    const handleCheckboxChange = (e) => {
        const { value } = e.target;
        setFormState({
            ...formState,
            preferences: {
                ...formState.preferences,
                [value]: !formState.preferences[value]
            }
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = {
            username: formState.username,
            password: formState.password,
            firstname: formState.firstname,
            preferences: formState.preferences,
            enabled: formState.enabled,
        }
        await request(formData);
    }


    return (
        <form className="register-login__class" onSubmit={handleSubmit}>

            {error && <p className="login-form__error">{error}</p>}
            {isLoading && <p className="login-form__loading">Aan het laden...</p>}

            <UserInfoForm formState={formState} handleFormChange={(e) => handleFormChange(e)} />

            <PreferencesForm handleCheckboxChange={(e) => handleCheckboxChange(e)} />

            <SubmitButton buttonClass="register-login__submit-btn" buttonText="Registreer"/>

        </form>
    );
};

export default RegisterForm;