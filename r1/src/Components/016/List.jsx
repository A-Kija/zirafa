function List({obj, index}) {
    return (
        <li className="list-group-item"><b>#{index}</b> {obj.name} {obj.color}</li>
    )
}

export default List;