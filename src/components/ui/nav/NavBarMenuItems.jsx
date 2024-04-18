import NavBarMenuItem from "./NavBarMenuItem.jsx";
import {useContext} from "react";
import {LanguageContext} from "../../../context/LanguageContext.jsx";


const NavBarMenuItems = ({ navItems }) => {

    return (
        <menu className="nav-bar__menu">

            <ul>
                {
                    navItems.map((item, index) => {
                        return (
                            <NavBarMenuItem
                                key={index}
                                navEndpoint={item.navLink}
                                navLabel={item.title}
                            />
                        )

                    })
                }
            </ul>

        </menu>
    );
};

export default NavBarMenuItems;