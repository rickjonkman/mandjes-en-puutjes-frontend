import {NavLink} from "react-router-dom";
import CloseIcon from "../svg-components/CloseIcon.jsx";
import "/src/scss/scss-ui/hamburger-menu.scss";
import IconButton from "../buttons/IconButton.jsx";


const HamburgerMenu = ({setIsHamOpen, hamItems}) => {


    return (
        <div className="nav__hamburger-menu">

            <div className="hamburger-menu__header">
                <IconButton buttonClass="hamburger-menu__close-button" onClickHandler={() => setIsHamOpen(false)}>
                    <CloseIcon width="2rem" height="2rem" closeIconClass="ham__close-icon" />
                </IconButton>
            </div>

            <ul>
                {
                    hamItems.map((item) => (
                        <li key={item.id}>
                            <NavLink to={item.navLink}>
                                <h2>{item.title}</h2>

                                {
                                    item.subLinks && item.subLinks.map((subLink) => (
                                        <NavLink key={subLink.id} to={subLink.navLink}>
                                            <span>{subLink.title}</span>
                                        </NavLink>

                                    ))
                                }

                            </NavLink>
                        </li>

                    ))
                }
            </ul>

        </div>
    );
};

export default HamburgerMenu;