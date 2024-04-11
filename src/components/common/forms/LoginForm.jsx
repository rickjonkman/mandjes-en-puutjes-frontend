import {useState} from 'react';
import axios from "axios";
import SubmitButton from "../../ui/buttons/SubmitButton.jsx";

const LoginForm = () => {

    const searchParams = new URLSearchParams(window.location.search);

    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

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

        setError(null);
        setIsLoading(true);

        try {
            const response = await axios.post('http://localhost:8080/api/v1/users/authenticate', {
                username: username,
                password: password
            });
            console.log(response);
        } catch (e) {
            console.error(e);
            setError('Er is iets misgegaan. Probeer het opnieuw.');
        } finally {
            setIsLoading(false);
        }

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