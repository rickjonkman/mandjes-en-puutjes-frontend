import {useContext, useRef} from 'react';
import SubmitButton from "../../ui/buttons/SubmitButton.jsx";
import FormInput from "../../ui/inputs/FormInput.jsx";
import {isUserRegistered} from "../../../helpers/isUserRegistered.js";
import useAuthenticate from "../../../api/useAuthenticate.js";
import endpoints from "../../../api/endpoints.json";

const LoginForm = ({ username, password, submit, success_auth_message }) => {

    const { request, data, isLoading, error } = useAuthenticate(endpoints.authenticate);

    const usernameRef = useRef();
    const passwordRef = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        await request(formData);


    }

    return (
        <>
            <form className="login-form__class" onSubmit={handleSubmit}>

                {error && <p className="login-form__error">{error}</p>}
                {isLoading && <p className="login-form__loading">Inloggen...</p>}
                {isUserRegistered && <p className="login-form__success">{success_auth_message}</p>}

                <FormInput
                    inputId="login-form__username"
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

                <SubmitButton buttonClass="login-form__submit-btn" buttonText={submit} />

            </form>
        </>
    );
};

export default LoginForm;