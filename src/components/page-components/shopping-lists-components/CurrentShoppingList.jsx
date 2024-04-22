import {useContext, useState} from "react";
import CheckIcon from "../../ui/svg-components/CheckIcon.jsx";
import NotFoundIcon from "../../ui/svg-components/NotFoundIcon.jsx";
import IconButton from "../../ui/buttons/IconButton.jsx";
import {GroceriesContext} from "../../../context/GroceriesContext.jsx";

const CurrentShoppingList = () => {

    const { currentList, setCurrentList } = useContext(GroceriesContext);

    const [selectedGroceries, setSelectedGroceries] = useState([]);

    const handleSelectGrocery = (e) => {
        const {value} = e.target;
        const selectedGrocery = currentList.find((grocery) => grocery.name === value);
        selectedGrocery.selected = !selectedGrocery.selected;
        setSelectedGroceries([...selectedGroceries, selectedGrocery]);
    }

    const handleAddToStorage = (grocery) => {
        const updatedList = currentList.map(item => {
            if (item.name === grocery.name) {
                return { ...item, inStorage: !item.inStorage };
            }
            return item;
        })
        setCurrentList(updatedList);

    }

    const handleNotFound = (grocery) => {
        const updatedList = currentList.map(item => {
            if (item.name === grocery.name) {
                return { ...item, notFound: !item.notFound };
            }
            return item;
        })
        setCurrentList(updatedList);
    }


    return (
        <div className="shopping-mode__current-list">
            {currentList.length === 0 ? <p>Je boodschappenlijst is leeg</p> :

            <ul>
                {
                    currentList.map((grocery, index) => (
                        <li key={index} className={grocery.selected ? 'list-item--green' : 'list-item--gray'}>

                            <div className="current-list__grocery-name">
                                <label htmlFor="grocery-item">
                                    <input
                                        type="checkbox"
                                        value={grocery.name}
                                        id="grocery-item"
                                        onChange={handleSelectGrocery}
                                    />
                                    <h3>{grocery.name}</h3>
                                </label>
                            </div>

                            <div className="current-list__button-group">
                                <IconButton
                                    buttonClass="current-shopping-list__check-button"
                                    onClickHandler={() => handleAddToStorage(grocery)}>
                                    <CheckIcon/>
                                </IconButton>
                                <IconButton
                                    buttonClass="current-shopping-list__not-found-button"
                                    onClickHandler={() => handleNotFound(grocery)}>
                                    <NotFoundIcon/>
                                </IconButton>
                            </div>

                        </li>
                    ))
                }
            </ul>
            }

        </div>

    );
};

export default CurrentShoppingList;