import { useState } from 'react';
function Create({ add }) {

    const [name, setName] = useState('');
    const [color, setColor] = useState('');
    const [size, setSize] = useState('M');

    const clickAdd = () => {
        const obj = { name, color, size }; // {name: name, color: color}
        add(obj);
        setName('');
        setColor('');
        setSize('M');
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
                <div class="form-group">
                    <label>Size select</label>
                    <select className="form-control" value={size} onChange={e => setSize(e.target.value)}>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                    </select>
                </div>
                <button type="button" className="btn btn-outline-primary" onClick={clickAdd}>ADD</button>
            </div>
        </div>
    );
}

export default Create;