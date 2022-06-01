import { useState } from 'react';
function CreateTree() {

    const [title, setTitle] = useState('');
    const [height, setHeight] = useState('');
    const [type, setType] = useState('1');

    const clickAdd = () => {
        // const obj = { title, height, type }; // {name: name, color: color}
        // add(obj);
        setTitle('');
        setHeight('');
        setType('1');
    }

    return (
        <div className="card m-4">
            <div className="card-header">
                <h2>Add to Tree list</h2>
            </div>
            <div className="card-body">
                <div className="form-group">
                    <label>Title</label>
                    <input type="text" className="form-control" onChange={e => setTitle(e.target.value)} value={title} />
                </div>
                <div className="form-group">
                    <label>Height</label>
                    <input type="text" className="form-control" onChange={e => setHeight(e.target.value)} value={height} />
                </div>
                <div className="form-group">
                    <label>Size select</label>
                    <select className="form-control" value={type} onChange={e => setType(e.target.value)}>
                        <option value="1">Leaf</option>
                        <option value="2">Spike</option>
                        <option value="3">Palm</option>
                    </select>
                </div>
                <button type="button" className="btn btn-outline-primary mt-4" onClick={clickAdd}>ADD</button>
            </div>
        </div>
    );
}

export default CreateTree;