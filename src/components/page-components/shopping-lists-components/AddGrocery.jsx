import {useContext, useState} from "react";
import {GroceriesContext} from "../../../context/GroceriesContext.jsx";
import SubmitButton from "../../ui/buttons/SubmitButton.jsx";


const AddGrocery = () => {

    const {currentList, setCurrentList} = useContext(GroceriesContext);
    const [productItem, setProductItem] = useState({
        id: 0,
        name: "",
        inStorage: false,
        notFound: false,
        selected: false,

    });


    const handleAddProduct = (productItem) => {

        setCurrentList([...currentList, productItem]);
    }

    return (
        <>
            <form onSubmit={() => handleAddProduct(productItem)} className="shopping-mode__add-grocery--form">
                <label htmlFor="grocery-input">
                    <input
                        type="text"
                        id="grocery-input"
                        name="grocery-input"
                        placeholder="Voeg een product toe"
                        onChange={(e) => setProductItem({
                            ...productItem,
                            id: new Date().getTime(),
                            name: e.target.value
                        })}
                        value={productItem.name}
                    />
                </label>

                <SubmitButton buttonText="Voeg toe" buttonClass="shopping-mode__add-grocery--button"/>
            </form>
        </>
    );
};

export default AddGrocery;