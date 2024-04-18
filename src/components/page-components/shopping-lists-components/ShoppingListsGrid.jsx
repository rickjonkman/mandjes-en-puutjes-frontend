

const ShoppingListsGrid = ({ shoppingLists }) => {



    return (
        <section className="shopping-lists__grid">
            {
                shoppingLists.map((list) => {
                    return (
                        <article key={list.id} className="shopping-lists__grid-item">
                            <h3>{list.name}</h3>
                            <p>{list.description}</p>
                        </article>
                    )
                })
            }
        </section>
    );
};

export default ShoppingListsGrid;