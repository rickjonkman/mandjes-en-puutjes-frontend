import GroceryList from "./GroceryList.jsx";
import AddIcon from "../../ui/svg-components/AddIcon.jsx";
import {useState} from "react";
import IconButton from "../../ui/buttons/IconButton.jsx";


const ShoppingListBlock = ({shoppingListBlockClass, shoppingListDate, products}) => {

    const [openList, toggleOpenList] = useState(false);

    return (
        <article className={shoppingListBlockClass}>
            <header className="shopping-list__block--header">
                <h2>{shoppingListDate}</h2>

                <IconButton buttonClass="shopping-list__open-button" onClickHandler={() => toggleOpenList(!openList)} >
                    <AddIcon/>
                </IconButton>
            </header>

            {
                openList &&
                <main className="shopping-list__block--content">
                    <GroceryList products={products}/>
                </main>
            }


        </article>
    );
};

export default ShoppingListBlock;