function Animal({ animal, index, setAnimalTreeData, setEditAnimalModalData }) {

    return (
        <li className="list-group-item">
            <div className="item">
                <div className="content">
                    <b>#{index}</b> <span>{animal.name}</span> <i>{animal.age} m</i> <span className={(animal.has_owner ? 'yes' : 'no') + ' yes-no'}></span> <small>{['Cat', 'Dog', 'Rat', 'racoon'][animal.type - 1]}</small>
                </div>
                <div className="buttons">
                    <button type="button" className="btn btn-outline-success mr-2" onClick={() => setEditAnimalModalData(animal)} >Edit</button>
                    <button type="button" className="btn btn-outline-danger mr-2" onClick={() => setAnimalTreeData(animal)} >Delete</button>
                </div>
            </div>
        </li>
    );
}

export default Animal;