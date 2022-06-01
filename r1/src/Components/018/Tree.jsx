function Tree({ tree, index }) {

    return (
        <li className="list-group-item">
            <div className="item">
                <div className="content">
                    <b>#{index}</b> <span>{tree.title}</span> <i>{tree.height} m</i> <small>{['Leaf', 'Spike', 'Palm'][tree.type - 1]}</small>
                </div>
                <div className="buttons">
                    <button type="button" className="btn btn-outline-success mr-2" >Edit</button>
                    <button type="button" className="btn btn-outline-danger mr-2" >Delete</button>
                </div>
            </div>
        </li>
    );
}

export default Tree;