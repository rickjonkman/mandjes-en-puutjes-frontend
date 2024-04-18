import Button from "../../ui/buttons/Button.jsx";


const SaveCurrentRecipe = ({savedByUsers}) => {

    const saveRecipeHandler = () => {
        console.log('Recept opgeslagen');
    }

    return (
        <>
            <aside className="save-recipe__container">
                <div className="save-recipe__text">
                    <h4>Dit recept is door {savedByUsers} gebruikers opgeslagen.</h4>
                </div>
                <Button buttonClass="save-recipe__button" buttonText="Sla op" onClickHandler={saveRecipeHandler}/>
            </aside>

        </>
    );
};

export default SaveCurrentRecipe;