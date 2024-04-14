import BlockItemButton from "./BlockItemButton.jsx";


const BlockItem = ({ subject, children }) => {



    return (
        <article className="block-item__container">

            <div className="block-item__img">
                <span>{subject}</span>
            </div>

            <div className="block-item__content">
                {children}
            </div>

            <BlockItemButton />

        </article>
    );
};

export default BlockItem;