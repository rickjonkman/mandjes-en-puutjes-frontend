import {useContext, useState} from "react";
import {GroceriesContext} from "../../../context/GroceriesContext.jsx";
import ShoppingListBlock from "./ShoppingListBlock.jsx";


const ShoppingListsGrid = () => {

    const {shoppingLists} = useContext(GroceriesContext);

    return (
        <section className="shopping-lists__grid">
            {
                shoppingLists.map((list) => {
                    return (
                        <ShoppingListBlock
                            key={list.id}
                            shoppingListBlockClass="shopping-list__block"
                            shoppingListDate={list.creationDate}
                            products={list.products}
                        />

                    )
                })
            }
        </section>
    );
};

export default ShoppingListsGrid;