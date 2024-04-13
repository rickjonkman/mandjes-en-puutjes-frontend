import ImageWrapper from "../../common/image-wrapper/ImageWrapper.jsx";
import {useNavigate} from "react-router-dom";
import {useContext, useState} from "react";
import NavBarMenuItems from "./NavBarMenuItems.jsx";
import {UserContext} from "../../../context/UserContext.jsx";
import Logo from "/src/assets/svg/logo--dark-color.svg";
import HamburgerIcon from "./HamburgerIcon.jsx";
import "/src/scss/scss-ui/nav-bar.scss";
import {LanguageContext} from "../../../context/LanguageContext.jsx";
import {menuItemsLoggedInEN, menuItemsLoggedInNL} from "../../../constants/menuItemsLoggedIn.js";
import {menuItemsLoggedOutEN, menuItemsLoggedOutNL} from "../../../constants/menuItemsLoggedOut.js";

const NavBar = () => {

    const { language } = useContext(LanguageContext);
    const { isLoggedIn } = useContext(UserContext);
    const navigate = useNavigate();
    const [isHamOpen, setIsHamOpen] = useState(false);

    return (
        <nav className="nav-bar__container">

            <div className={isHamOpen ? 'nav-hidden' : 'nav-bar__content'}>

                <ImageWrapper
                    imgSource={Logo}
                    imgWrapperClass="nav-bar__logo-container"
                    imgId="nav-bar__logo"
                    imgDescription="Ons logo"
                    handleOnClick={() => navigate('/')}
                />

                {
                    language === 'nl' ?
                    <NavBarMenuItems navItems={isLoggedIn ? menuItemsLoggedInNL : menuItemsLoggedOutNL } />
                        :
                    <NavBarMenuItems navItems={isLoggedIn ? menuItemsLoggedInEN : menuItemsLoggedOutEN } />
                }


                <HamburgerIcon />

            </div>

        </nav>
    );
};

export default NavBar;