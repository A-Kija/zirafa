function Animal({animal}) {

    return (
        <li className="list-group-item">
            {animal.name}
        </li>
    );
}

export default Animal;