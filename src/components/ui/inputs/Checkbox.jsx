

const Checkbox = (
    {
        showItem,
        idCB,
        nameCB,
        checkedCB,
        onChangeCB,
        imgSrcCB,
        imgAltCB,
        imgIdCB
    }
) => {



    return (
        <div className={showItem ? 'show-item--true' : 'show-item--false'}>

            <input
                type="checkbox"
                id={idCB}
                name={nameCB}
                checked={checkedCB}
                onChange={onChangeCB}
            />

            <img
                src={imgSrcCB}
                alt={imgAltCB}
                id={imgIdCB}
            />

        </div>
    );
};

export default Checkbox;