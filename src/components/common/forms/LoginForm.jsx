import {useContext, useRef, useState} from 'react';
import SubmitButton from "../../ui/buttons/SubmitButton.jsx";
import {AuthContext} from "../../../context/AuthContext.jsx";
import FormInput from "../../ui/inputs/FormInput.jsx";
import {isUserRegistered} from "../../../helpers/isUserRegistered.js";

const LoginForm = ({ username, password, submit, success_auth_message }) => {

    const { authenticate, error, isLoading } = useContext(AuthContext);

    const usernameRef = useRef();
    const passwordRef = useRef();



    const handleSubmit = async (e) => {
        e.preventDefault();
        authenticate({
            username: usernameRef.current.value,
            password: passwordRef.current.value,
        });
    }

    return (
        <>
            <form className="login-form__class" onSubmit={(e) => handleSubmit(e)}>

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