function List({ obj, index, deleteItem, setModal }) {
    return (
        <li className="list-group-item">
            <div className="item">
                <div className="content">
                    <b>#{index}</b><h2>{obj.count}</h2> <span style={{color: obj.red ? 'red' : null}}>{obj.name} {obj.width} M</span> {obj.color} <u>{obj.size}</u> <small>id:{obj.id}</small>
                </div>
                <div className="buttons">
                    <button type="button" className="btn btn-outline-success mr-2" onClick={() => setModal(obj)}>Edit</button>
                    <button type="button" className="btn btn-outline-danger mr-2" onClick={() => deleteItem(obj.id)}>Delete</button>
                </div>
            </div>
        </li>
    )
}

export default List;