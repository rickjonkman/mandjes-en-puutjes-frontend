
const ShoppingList = ({groceries}) => {


    return (
        <div>
            <ul>
                {
                    groceries.map((grocery) => {
                        return (
                            <li key={grocery.id}>
                                <span>{grocery.name}</span>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
};

export default ShoppingList;