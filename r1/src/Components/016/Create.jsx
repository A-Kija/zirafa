import { useState } from 'react';
function Create({add}) {

    const [name, setName] = useState('');
    const [color, setColor] = useState('');

    const clickAdd = () => {
        const obj = {name, color}; // {name: name, color: color}
        add(obj);
        setName('');
        setColor('');
    }

    return (
        <div className="card m-4">
            <div className="card-header">
                Add to list
            </div>
            <div className="card-body">
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" onChange={e => setName(e.target.value)} value={name} />
                </div>
                <div className="form-group">
                    <label>Color</label>
                    <input type="text" className="form-control" onChange={e => setColor(e.target.value)} value={color} />
                </div>
                <button type="button" className="btn btn-outline-primary" onClick={clickAdd}>ADD</button>
            </div>
        </div>
    );
}

export default Create;