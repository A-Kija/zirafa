function List({obj, index}) {
    return (
        <li className="list-group-item"><b>#{index}</b> {obj.name} {obj.color} <small>id:{obj.id}</small></li>
    )
}

export default List;