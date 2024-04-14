


const PageTitle = ({ pageTitleClass, pageTitle, children }) => {

    return (
        <div className={`page-title ${pageTitleClass}`}>
            <h1>{pageTitle}</h1>

            {children}

        </div>
    );
};

export default PageTitle;