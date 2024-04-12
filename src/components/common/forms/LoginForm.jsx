import {useContext, useRef, useState} from 'react';
import SubmitButton from "../../ui/buttons/SubmitButton.jsx";
import {AuthContext} from "../../../context/AuthContext.jsx";

const LoginForm = () => {

    const { authenticate, error, isLoading } = useContext(AuthContext);
    const searchParams = new URLSearchParams(window.location.search);

    const usernameRef = useRef();
    const passwordRef = useRef();

    const isUserRegistered = (searchParams) => {
        if (searchParams.get('registration-success') === 'true') {
            return (
                <p className="login-register__form--success">Registratie gelukt! Je kunt nu inloggen.</p>
            )
        }
    }

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
                {isUserRegistered(searchParams)}

                <label htmlFor="login-form__username">
                    Gebruikersnaam:
                    <input
                        type="email"
                        id="login-form__username"
                        name="username"
                        ref={usernameRef}
                    />
                </label>

                <label htmlFor="login-form__password">
                    Wachtwoord:
                    <input
                        type="password"
                        id="login-form__password"
                        name="password"
                        ref={passwordRef}
                    />
                </label>

                <SubmitButton buttonClass="login-form__submit-btn" buttonText="Inloggen" />

            </form>
        </>
    );
};

export default LoginForm;