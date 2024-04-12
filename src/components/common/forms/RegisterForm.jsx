import {useRef} from 'react';
import FormInput from "../../ui/inputs/FormInput.jsx";
import SubmitButton from "../../ui/buttons/SubmitButton.jsx";
import useRegister from "../../../api/register.js";
import {endpoints} from "../../../api/endpoints.json";

const RegisterForm = ({form, loading, preferencesContent}) => {

    const {request, error, isLoading} = useRegister(endpoints.register);

    const { firstname, username, password, submit } = form;
    const { prefMeat, prefFish, prefVegetarian, prefVegan } = preferencesContent;

    const usernameRef = useRef();
    const passwordRef = useRef();
    const preferencesRef = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        await request(formData);
    }

    return (
        <form className="register-form__class" onSubmit={handleSubmit}>

            {error && <p className="login-form__error">{error}</p>}
            {isLoading && <p className="login-form__loading">{loading}</p>}

            <section className="register-form__user-info">

                <FormInput
                    inputId="register-form__firstname"
                    inputType="text"
                    inputName="firstname"
                    inputRef={usernameRef}
                    inputLabel={firstname}
                />

                <FormInput
                    inputId="register-form__username"
                    inputType="email"
                    inputName="username"
                    inputRef={usernameRef}
                    inputLabel={username}
                />

                <FormInput
                    inputId="login-form__password"
                    inputType="password"
                    inputName="password"
                    inputRef={passwordRef}
                    inputLabel={password}
                />
            </section>

            <section className="register-form__preferences">

                <FormInput
                    inputId="register-form__pref-meat"
                    inputType="checkbox"
                    inputName="preferences"
                    inputRef={preferencesRef}
                    inputLabel={prefMeat}
                />

                <FormInput
                    inputId="register-form__pref-fish"
                    inputType="checkbox"
                    inputName="preferences"
                    inputRef={preferencesRef}
                    inputLabel={prefFish}
                />

                <FormInput
                    inputId="register-form__pref-vegetarian"
                    inputType="checkbox"
                    inputName="preferences"
                    inputRef={preferencesRef}
                    inputLabel={prefVegetarian}
                />

                <FormInput
                    inputId="register-form__pref-vegan"
                    inputType="checkbox"
                    inputName="preferences"
                    inputRef={preferencesRef}
                    inputLabel={prefVegan}
                />

            </section>

            <SubmitButton buttonClass="login-form__submit-btn" buttonText={submit}/>

        </form>
    );
};

export default RegisterForm;