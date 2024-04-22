import {useContext, useState} from "react";
import SubmitButton from "../../ui/buttons/SubmitButton.jsx";
import {GroceriesContext} from "../../../context/GroceriesContext.jsx";


const AddGrocery = () => {

    const { currentList, setCurrentList } = useContext(GroceriesContext);

    const [grocery, setGrocery] = useState({
        id: 0,
        name: '',
        inStorage: false,
        notFound: false,
        selected: false
    });

    const handleSetGrocery = (e) => {
        setGrocery({...grocery, id: new Date().getTime(), name: e.target.value});
    }

    const handleAddGrocery = (e) => {
        e.preventDefault();
        setCurrentList([...currentList, grocery]);
        setGrocery({id: 0, name: '', inStorage: false, notFound: false, selected: false});
    }

    return (
        <>
            <form className="add-grocery__form" onSubmit={handleAddGrocery}>
                <label htmlFor="new-grocery__name">
                    <span>Product</span>
                    <input
                        type="text"
                        placeholder="Product..."
                        id="new-grocery__name"
                        name="groceryName"
                        value={grocery.name}
                        onChange={handleSetGrocery}
                    />
                </label>

                <SubmitButton buttonText="Voeg toe" />
            </form>


        </>
    );
};

export default AddGrocery;