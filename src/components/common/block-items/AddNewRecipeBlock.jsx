import BlockTitle from "./BlockTitle.jsx";
import DashboardContent from "/src/constants/page-content/dashboard.json";
import Button from "../../ui/buttons/Button.jsx";
import {useNavigate} from "react-router-dom";
import {useState} from "react";


const AddNewRecipeBlock = ({blockItemClass, language}) => {

    const navigate = useNavigate();
    const {title, subtitle, subject, button, inputPlaceholder} = DashboardContent[language].blocks.newRecipe;

    const [recipeName, setRecipeName] = useState('');

    const handleNavigateClick = () => {
        navigate('/recipes/add-new-recipe', { state: recipeName });
    }

    return (
        <article className={blockItemClass}>

            <div className="block-item__content">

                <BlockTitle blockTitle={title} blockSubject={subject}/>

                <div className="block-item__subtitle-container">
                    <h3>{subtitle}</h3>
                </div>

                <div className="block-item__input-container">
                    <label htmlFor="recipe=name">
                    <input
                        id="recipe-name"
                        type="text"
                        placeholder={inputPlaceholder}
                        value={recipeName}
                        onChange={(e) => setRecipeName(e.target.value)}
                    />
                    </label>
                </div>

            </div>

            <Button
                buttonClass="block-item__button--dark-green"
                buttonText={button}
                onClickHandler={handleNavigateClick}
            />

        </article>
    );
};

export default AddNewRecipeBlock;