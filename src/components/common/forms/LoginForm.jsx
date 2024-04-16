import {useContext, useState} from 'react';
import SubmitButton from "../../ui/buttons/SubmitButton.jsx";
import {isUserRegistered} from "../../../helpers/isUserRegistered.js";
import {UserContext} from "../../../context/UserContext.jsx";

const LoginForm = ({titleConstant, submitConstant, usernameConstant, passwordConstant, success_auth_message}) => {

    const {authenticate, error, isLoading} = useContext(UserContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();
        authenticate(username, password);
    }


    if (isLoading) {
        return <p>Loading...</p>
    }

    if (error) {
        return <p>Error: {error}</p>
    }

    return (
        <>
            <form className="register-login__class" onSubmit={handleSubmit}>
                {isUserRegistered && <p className="login-form__success">{success_auth_message}</p>}

                <section className="register-login__user-info">

                    <div className="form__subtitle-container">
                        <h2>{titleConstant}</h2>
                    </div>

                    <div className="form__input-container">
                        <label htmlFor="form__username">
                            <span>{usernameConstant}</span>
                            <input
                                type="email"
                                id="login__username"
                                name="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </label>
                    </div>

                    <div className="form__input-container">
                        <label htmlFor="form__password">
                            <span>{passwordConstant}</span>
                            <input
                                type="password"
                                id="login__password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </label>
                    </div>

                </section>

                <SubmitButton buttonClass="register-login__submit-btn" buttonText={submitConstant}/>

            </form>
        </>
    );
};

export default LoginForm;