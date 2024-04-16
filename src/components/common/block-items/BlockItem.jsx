

const BlockItem = ({ blockItemClass, children }) => {
    return (
        <article className={blockItemClass}>

            {children}

        </article>
    );
};

export default BlockItem;