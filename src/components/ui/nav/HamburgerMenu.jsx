import {NavLink} from "react-router-dom";
import CloseIcon from "../svg-components/CloseIcon.jsx";
import "/src/scss/scss-ui/hamburger-menu.scss";


const HamburgerMenu = ({setIsHamOpen, hamItems}) => {


    return (
        <div className="nav__hamburger-menu">

            <div className="hamburger-menu__header">
                <CloseIcon
                    closeClickHandler={() => setIsHamOpen(false)}
                    closeIconClass="hamburger-menu__close-icon"  />
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