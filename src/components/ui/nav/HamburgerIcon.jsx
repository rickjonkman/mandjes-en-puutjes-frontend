import hamIcon from "/src/assets/icons/ham-icon.svg";

const HamburgerIcon = ({ handleHamOnClick }) => {



    return (
        <button id="nav-bar__ham-btn" onClick={handleHamOnClick} type="button" >

            <img
                src={hamIcon}
                alt="Hamburger-icon, klik om menu te openen."
                id="nav-bar__ham-icon"
            />

        </button>
    );
};

export default HamburgerIcon;