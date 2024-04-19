

const NotFoundIcon = ({ notFoundClickHandler }) => {
    return (
        <button className="not-found__button" type="button" onClick={notFoundClickHandler}>
            <svg className="feather feather-x-octagon" fill="none" height="24" stroke="currentColor"
                 strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24"
                 xmlns="http://www.w3.org/2000/svg">
                <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"/>
                <line x1="15" x2="9" y1="9" y2="15"/>
                <line x1="9" x2="15" y1="9" y2="15"/>
            </svg>
        </button>
    );
};

export default NotFoundIcon;