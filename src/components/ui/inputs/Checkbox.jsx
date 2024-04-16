

const Checkbox = (
    {
        showItem,
        idCB,
        nameCB,
        checkedCB,
        onChangeCB,
        labelCB
    }
) => {



    return (
        <div className={showItem ? 'show-item--true' : 'show-item--false'}>

            <label htmlFor={idCB}>{labelCB}
            <input
                type="checkbox"
                id={idCB}
                name={nameCB}
                checked={checkedCB}
                onChange={onChangeCB}
            />
            </label>

        </div>
    );
};

export default Checkbox;