import {useContext} from "react";
import {GroceriesContext} from "../../../context/GroceriesContext.jsx";
import BlockTitle from "./BlockTitle.jsx";
import BlockSubtitle from "./BlockSubtitle.jsx";
import Button from "../../ui/buttons/Button.jsx";
import {useNavigate} from "react-router-dom";


const ShoppingModeBlock = ({language, blockItemClass}) => {

    const {currentList} = useContext(GroceriesContext);
    const navigate = useNavigate();

    return (
        <article className={blockItemClass}>

            <div className="dashboard__shopping-mode--block-container">

                <div className="block-item__content">

                    <BlockTitle blockTitle="Jouw lijst" blockSubject="Boodschappen"/>
                    <BlockSubtitle subtitle="Je huidige boodschappenlijst"/>

                    <div className="dashboard__shopping-mode--block-content">
                        <ul>
                            {
                                (currentList.length > 0) ? currentList.map((item) => (
                                    <li key={item.id}>
                                        <span>{item.name}</span>
                                    </li>
                                )) : (
                                    <li>
                                        <span>Je hebt nog geen producten toegevoegd aan je boodschappenlijst.</span>
                                    </li>
                                )
                            }
                        </ul>
                    </div>

                    <Button
                        buttonClass="shopping-mode__block__button"
                        buttonText="Ga naar winkelmodus"
                        onClickHandler={() => navigate('/groceries/shopping-mode')}
                    />

                </div>

            </div>

        </article>
    );
};

export default ShoppingModeBlock;