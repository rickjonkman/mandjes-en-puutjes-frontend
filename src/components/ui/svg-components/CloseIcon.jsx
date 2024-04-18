

const CloseIcon = ({ closeClickHandler, closeIconClass }) => {
    return (

        <button className="nav-bar__logo-button" onClick={closeClickHandler}>

            <svg data-name="Layer 1" height="100" id="Layer_1" viewBox="0 0 200 200" width="100"
                 xmlns="http://www.w3.org/2000/svg">
                <title/>
                <path className={closeIconClass}
                    d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z"/>
            </svg>

        </button>
    );
};

export default CloseIcon;