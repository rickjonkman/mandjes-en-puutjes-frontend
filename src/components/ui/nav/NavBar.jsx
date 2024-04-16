
import {useNavigate} from "react-router-dom";
import {useContext, useState} from "react";
import NavBarMenuItems from "./NavBarMenuItems.jsx";
import {UserContext} from "../../../context/UserContext.jsx";
import HamburgerIcon from "./HamburgerIcon.jsx";
import "/src/scss/scss-ui/nav-bar.scss";
import {LanguageContext} from "../../../context/LanguageContext.jsx";
import {menuItemsLoggedInEN, menuItemsLoggedInNL} from "../../../constants/menuItemsLoggedIn.js";
import {menuItemsLoggedOutEN, menuItemsLoggedOutNL} from "../../../constants/menuItemsLoggedOut.js";
import HamburgerMenu from "./HamburgerMenu.jsx";
import LogoImage from "../svg-components/LogoImage.jsx";

const NavBar = () => {

    const {language} = useContext(LanguageContext);
    const {isLoggedIn} = useContext(UserContext);
    const navigate = useNavigate();
    const [isHamOpen, setIsHamOpen] = useState(false);

    return (
        <nav className="nav-bar__container">

            <div className={isHamOpen ? 'nav-hidden' : 'nav-bar__content'}>

                <button className="nav-bar__logo-button" onClick={() => navigate('/')}>
                    <LogoImage svgClass="nav-bar__logo"/>
                </button>

                {
                    language === 'nl' ?
                        <NavBarMenuItems navItems={isLoggedIn ? menuItemsLoggedInNL : menuItemsLoggedOutNL}/>
                        :
                        <NavBarMenuItems navItems={isLoggedIn ? menuItemsLoggedInEN : menuItemsLoggedOutEN}/>
                }

                <HamburgerIcon handleHamOnClick={() => setIsHamOpen(!isHamOpen)}/>


                <HamburgerMenu/>


            </div>

        </nav>
    );
};

export default NavBar;