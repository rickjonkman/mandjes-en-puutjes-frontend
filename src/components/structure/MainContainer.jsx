

const MainContainer = ({ children, mainContainerClass }) => {
    return (
        <main className={`main-container__class ${mainContainerClass}`}>
            {children}
        </main>
    );
};

export default MainContainer;