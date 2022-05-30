function List({obj, index, deleteItem}) {
    return (
        <li className="list-group-item">
            <div className="item">
            <div className="content">
                <b>#{index}</b> {obj.name} {obj.color} <small>id:{obj.id}</small>
            </div>
            <div className="buttons">
                <button type="button" className="btn btn-outline-danger mr-2" onClick={() => deleteItem(obj.id)}>Delete</button>
            </div>
        </div>
        </li>
    )
}

export default List;