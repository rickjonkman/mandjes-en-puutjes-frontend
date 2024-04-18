

const BlockTitle = ({ blockTitle, blockSubject }) => {
    return (
        <header className="block-item__title">
            <h2>{blockTitle}</h2>
            <span>{blockSubject}</span>
        </header>
    );
};

export default BlockTitle;