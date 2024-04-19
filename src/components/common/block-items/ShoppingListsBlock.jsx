import BlockTitle from "./BlockTitle.jsx";
import BlockSubtitle from "./BlockSubtitle.jsx";
import {useContext} from "react";
import {GroceriesContext} from "../../../context/GroceriesContext.jsx";
import Button from "../../ui/buttons/Button.jsx";
import {useNavigate} from "react-router-dom";


const ShoppingListsBlock = ({blockItemClass}) => {

    const navigate = useNavigate();
    const {shoppingLists} = useContext(GroceriesContext);

    function getCreationDatesFromLists() {
        return shoppingLists.map(list => list.creationDate);
    }

    const mostRecentDate = getCreationDatesFromLists().sort((a, b) => b - a)[0];

    return (
        <article className={blockItemClass}>

            <div className="dashboard__shopping-lists--block">

                <div className="block-item__content">

                    <BlockTitle blockTitle="Boodschappen-lijsten" blockSubject="Boodschappen"/>
                    <BlockSubtitle subtitle="De laatste keer dat je boodschappen hebt gedaan was op:"/>

                    <div className="dashboard__shopping-lists--block-content">

                        <h2>{mostRecentDate}</h2>

                    </div>

                    <Button
                        buttonClass="dashboard__shopping-lists-block--button"
                        buttonText="Bekijk lijsten"
                        onClickHandler={() => navigate('/groceries/shopping-lists')}
                    />

                </div>

            </div>

        </article>
    );
};

export default ShoppingListsBlock;