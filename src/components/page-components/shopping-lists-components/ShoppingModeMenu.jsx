import {useContext} from 'react';
import Button from "../../ui/buttons/Button.jsx";
import AddGrocery from "./AddGrocery.jsx";
import {GroceriesContext} from "../../../context/GroceriesContext.jsx";

const ShoppingModeMenu = () => {

    const {currentList, setCurrentList} = useContext(GroceriesContext);

    const handleDeleteSelected = () => {
        setCurrentList(currentList.filter((grocery) => !grocery.selected));
    }

    return (
        <div className="shopping-mode__menu">

            <AddGrocery/>

            <div className="shopping-mode__menu--buttons">
                <Button
                    buttonClass="shopping-mode__menu-button--delete"
                    buttonText="Verwijder geselecteerde producten"
                    onClickHandler={handleDeleteSelected}
                />

                <Button
                    buttonClass="shopping-mode__menu-button--clear"
                    buttonText="Leeg lijst"
                    onClickHandler={() => setCurrentList([])}
                />
            </div>

        </div>
    );
};

export default ShoppingModeMenu;