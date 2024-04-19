import {useContext, useState} from "react";
import {GroceriesContext} from "../../../context/GroceriesContext.jsx";
import CheckIcon from "../../ui/svg-components/CheckIcon.jsx";
import NotFoundIcon from "../../ui/svg-components/NotFoundIcon.jsx";

const CurrentShoppingList = () => {

    const {currentList, setCurrentList, selectedGroceries, setSelectedGroceries} = useContext(GroceriesContext);

    const handleSelectGrocery = (e) => {
        const {value} = e.target;
        const selectedGrocery = currentList.find((grocery) => grocery.name === value);
        selectedGrocery.selected = !selectedGrocery.selected;
        setSelectedGroceries([...selectedGroceries, selectedGrocery]);
    }

    const handleAddToStorage = (grocery) => {
        setCurrentList(currentList.find((item) => item.name === grocery.name).inStorage = !grocery.inStorage);

    }

    const handleNotFound = (grocery) => {
        setCurrentList(currentList.find((item) => item.name === grocery.name).notFound = !grocery.notFound);
    }

    return (
        <div className="shopping-mode__current-list">
            <ul>
                {
                    currentList.map((grocery) => {
                        return (
                            <>

                                <li key={grocery.id}>
                                    <label>
                                        <input
                                            type="checkbox"
                                            checked={grocery.selected}
                                            value={grocery.name}
                                            onChange={() => handleSelectGrocery(grocery.name)}
                                            className={
                                                grocery.inStorage ? "grocery-in-storage" :
                                                    grocery.notFound ? "grocery-not-found" : "grocery-default"}
                                        />
                                        <span>{grocery.name}</span>
                                    </label>

                                    <div className="current-list__button-group">
                                        <CheckIcon checkClickHandler={() => handleAddToStorage(grocery)} />
                                        <NotFoundIcon notFoundClickHandler={() => handleNotFound(grocery)} />
                                    </div>

                                </li>
                            </>
                        )
                    })
                }
            </ul>
        </div>
    );
};

export default CurrentShoppingList;