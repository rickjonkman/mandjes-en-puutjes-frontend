
import BackArrow from "../../../assets/icons/back-arrow.svg";
import IconButton from "../../ui/buttons/IconButton.jsx";
import {useNavigate} from "react-router-dom";

const RegisterFormHeader = () => {

    const navigate = useNavigate();

    return (
        <header className="register-form__header">

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

export default RegisterFormHeader;