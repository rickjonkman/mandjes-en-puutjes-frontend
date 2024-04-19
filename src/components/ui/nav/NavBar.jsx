import {useNavigate} from "react-router-dom";
import {useCallback, useContext, useEffect, useState} from "react";
import NavBarMenuItems from "./NavBarMenuItems.jsx";
import {UserContext} from "../../../context/UserContext.jsx";
import HamburgerIcon from "../svg-components/HamburgerIcon.jsx";
import "/src/scss/structure/nav-bar.scss";
import {LanguageContext} from "../../../context/LanguageContext.jsx";
import {menuItemsLoggedInEN, menuItemsLoggedInNL} from "../../../constants/menuItemsLoggedIn.js";
import {menuItemsLoggedOutEN, menuItemsLoggedOutNL} from "../../../constants/menuItemsLoggedOut.js";
import HamburgerMenu from "./HamburgerMenu.jsx";
import LogoImage from "../svg-components/LogoImage.jsx";
import {AuthContext} from "../../../context/AuthContext.jsx";

const NavBar = ({scrollDirection, handleMouseEnter, handleMouseLeave, enterNav}) => {

    const {language} = useContext(LanguageContext);
    const {isLoggedIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const [isHamOpen, setIsHamOpen] = useState(false);

    return (
        <>
            <nav className="nav-bar__container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>

                {
                    scrollDirection === 'up' || enterNav ?

                        <div className='nav-bar__content'>

                            <div className={isHamOpen ? 'nav-hidden' : 'nav-visible'}>

                            <button className="nav-bar__logo-button" onClick={() => navigate('/')}>
                                <LogoImage/>
                            </button>

                            {
                                language === 'nl' ?
                                    <NavBarMenuItems
                                        navItems={isLoggedIn ? menuItemsLoggedInNL : menuItemsLoggedOutNL}/>
                                    :
                                    <NavBarMenuItems
                                        navItems={isLoggedIn ? menuItemsLoggedInEN : menuItemsLoggedOutEN}/>
                            }

                            <HamburgerIcon
                                handleHamOnClick={() => setIsHamOpen(!isHamOpen)}
                            />

                        </div>

                            {
                                isHamOpen &&
                                <HamburgerMenu
                                    setIsHamOpen={setIsHamOpen}
                                    hamItems={language === 'nl' ?
                                        isLoggedIn ? menuItemsLoggedInNL : menuItemsLoggedOutNL :
                                        isLoggedIn ? menuItemsLoggedInEN : menuItemsLoggedOutEN}
                                />
                            }


                        </div>

                        :

                        <div className="nav-bar__narrow"></div>

                }

            </nav>
        </>
    )
        ;
};

export default NavBar;