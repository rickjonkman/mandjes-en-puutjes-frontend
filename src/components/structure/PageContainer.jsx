

const PageContainer = ({ pageContainerClass, children }) => {



    return (
        <div className={`${pageContainerClass}`}>
            {children}
        </div>
    );
};

export default PageContainer;