

const PageTitle = ({ pageTitleClass, pageTitle }) => {



    return (
        <div className={`page-title ${pageTitleClass}`}>
            <h1>{pageTitle}</h1>
        </div>
    );
};

export default PageTitle;