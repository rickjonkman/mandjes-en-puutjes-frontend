import {useContext} from 'react';
import AddIcon from "../../ui/svg-components/AddIcon.jsx";
import {GroceriesContext} from "../../../context/GroceriesContext.jsx";
import IconButton from "../../ui/buttons/IconButton.jsx";

const GroceryList = ({products}) => {

    const {setCurrentList, currentList} = useContext(GroceriesContext);

    const handleAddButton = (grocery) => {

        const newGrocery = {
            id: new Date().getTime(),
            name: grocery.name,
            inStorage: false,
            notFound: false,
            selected: false
        }

        setCurrentList([...currentList, newGrocery]);
    }

    const isGroceryOnCurrentList = (grocery) => {
        return currentList.some(item => item.name === grocery);
    }


    return (
        <div className="grocery-list__container">
            <ul>
                {
                    products.map((grocery, index) => {
                        return (
                            <li key={index} className={isGroceryOnCurrentList(grocery) ? 'list-item--green' : 'list-item--gray'}>

                                <div className="grocery-list__grocery-name">
                                    <h3>{grocery}</h3>
                                </div>

                                <div className="grocery-list__button-group">

                                    <IconButton
                                        buttonClass="grocery-list__add-button"
                                        onClickHandler={() => handleAddButton(grocery)}>

                                        <AddIcon/>

                                    </IconButton>


                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
};

export default GroceryList;