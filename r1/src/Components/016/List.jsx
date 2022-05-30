function List({obj}) {
    return (
        <li className="list-group-item">{obj.name} {obj.color}</li>
    )
}

export default List;