import {NavLink} from "react-router-dom";


const NavBarMenuItem = ({ navEndpoint, navLabel }) => {


    return (
        <li>
            <NavLink
                to={navEndpoint}
                className={({ isActive }) =>
                    isActive ? 'active-menu-link' : 'default-menu-link'}>

                <span>{ navLabel }</span>
            </NavLink>
        </li>
    );
};

export default NavBarMenuItem;