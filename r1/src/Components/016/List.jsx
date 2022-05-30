function List({obj, index}) {
    return (
        <li className="list-group-item"><b>#{index}</b> {obj.name} {obj.color} <small>id:{obj.id}</small>
        <button type="button" className="btn btn-outline-danger mt-4 mr-2" onClick={() => console.log(obj.id)}>Delete</button>
        </li>
    )
}

export default List;