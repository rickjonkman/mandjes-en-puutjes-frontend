import {useContext, useState} from 'react';
import SubmitButton from "../../ui/buttons/SubmitButton.jsx";
import {AuthContext} from "../../../context/AuthContext.jsx";

const LoginForm = () => {

    const { authenticate, error, isLoading } = useContext(AuthContext);
    const searchParams = new URLSearchParams(window.location.search);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const isUserRegistered = (searchParams) => {
        if (searchParams.get('registration-success') === 'true') {
            return (
                <p className="login-register__form--success">Registratie gelukt! Je kunt nu inloggen.</p>
            )
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        authenticate(username, password);
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
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </label>

                <label htmlFor="login-form__password">
                    Wachtwoord:
                    <input
                        type="password"
                        id="login-form__password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>

                <SubmitButton buttonClass="login-form__submit-btn" buttonText="Inloggen" />

            </form>
        </>
    );
};

export default LoginForm;