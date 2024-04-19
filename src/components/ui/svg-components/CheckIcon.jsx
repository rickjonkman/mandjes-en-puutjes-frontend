

const CheckIcon = ({ checkClickHandler }) => {
    return (
        <button className="check-icon__button" type="button" onClick={checkClickHandler}>

            <svg className="feather feather-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round"
                 strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24"
                 xmlns="http://www.w3.org/2000/svg">
                <polyline points="20 6 9 17 4 12"/>
            </svg>

        </button>
    );
};

export default CheckIcon;