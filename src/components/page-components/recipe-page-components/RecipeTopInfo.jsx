

const RecipeTopInfo = ({ recipeName, prepTime, creator, tags }) => {



    return (
        <article className="recipe__top-info--article">

            <section className="article__top-info">
                <h2>{recipeName}</h2>
                <p>{`Bereidingstijd: ${prepTime.hour} uur en ${prepTime.minute} minuten`}</p>
                <p>{`Toegevoegd door: ${creator}`}</p>
            </section>

            <section className="article__tags">
                {
                    tags.map((tag, index) => {
                        return <p key={index}>{tag.tagName}</p> })
                }
            </section>

        </article>
    );
};

export default RecipeTopInfo;