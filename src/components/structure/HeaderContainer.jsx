

const HeaderContainer = ({ headerContainerClass, children }) => {



    return (
        <header className={`header-container__class ${headerContainerClass}`}>
            {children}
        </header>
    );
};

export default HeaderContainer;