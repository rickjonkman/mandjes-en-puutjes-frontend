import {useContext} from "react";
import {LanguageContext} from "../../../context/LanguageContext.jsx";
import RegisterLogin from "/src/constants/page-content/register-login.json";
import {useLocation} from "react-router-dom";

const UserInfoForm = ({formState, handleFormChange}) => {

    const {pathname} = useLocation();
    const {language} = useContext(LanguageContext);
    const {title, description, firstname, username, password} = RegisterLogin[language].form;

    return (
        <section className="register-login__user-info">

            <div className="form__subtitle-container">
            <h2>{title}</h2>
                <p>{description}</p>
            </div>

            {pathname === '/register' &&
                <div className="form__input-container">
                    <span>{firstname}</span>
                    <label htmlFor="form__firstname">
                        <input
                            type="text"
                            id="form__firstname"
                            value={formState.firstname}
                            name="firstname"
                            onChange={handleFormChange}
                        />
                    </label>
                </div>
            }

            <div className="form__input-container">
                <span>{username}</span>
                <label htmlFor="form__username">
                    <input
                        type="email"
                        id="form__username"
                        value={formState.username}
                        name="username"
                        onChange={handleFormChange}
                    />
                </label>
            </div>

            <div className="form__input-container">
                <span>{password}</span>
                <label htmlFor="form__password">
                    <input
                        type="password"
                        id="form__password"
                        value={formState.password}
                        name="password"
                        onChange={handleFormChange}
                    />
                </label>
            </div>

        </section>
    );
};

export default UserInfoForm;