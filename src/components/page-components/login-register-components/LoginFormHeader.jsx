
import IconButton from "../../ui/buttons/IconButton.jsx";
import {useNavigate} from "react-router-dom";
import BackArrow from "src/assets/icons/back-arrow.svg";

const LoginFormHeader = () => {

    const navigate = useNavigate();

    return (
        <header className="login-form__header">

            <IconButton
                buttonClass="button__go-back"
                onClickHandler={() => navigate('/')}
                iconSrc={BackArrow}
                iconDescription="Klik om terug te gaan"
                buttonIconId="icon__go-back"
            />

        </header>
    );
};

export default LoginFormHeader;