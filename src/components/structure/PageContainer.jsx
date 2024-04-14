

const PageContainer = ({ pageContainerClass, children }) => {



    return (
        <div className={`page-container__class ${pageContainerClass}`}>
            {children}
        </div>
    );
};

export default PageContainer;