import { useState } from 'react';
function Create({ add }) {

    const [name, setName] = useState('');
    const [color, setColor] = useState('');
    const [size, setSize] = useState('M');
    const [red, setRed] = useState(false);
    const [width, setWidth] = useState('150');

    const clickAdd = () => {
        const obj = { name, color, size, red, width }; // {name: name, color: color}
        add(obj);
        setName('');
        setColor('');
        setSize('M');
        setRed(false);
        setWidth('150');
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
                <div className="form-group">
                    <label>Size select</label>
                    <select className="form-control" value={size} onChange={e => setSize(e.target.value)}>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                    </select>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" onChange={() => setRed(r => !r)} checked={red} />
                        <label className="form-check-label">
                            Red or Not
                        </label>
                </div>
                <div className="form-group">
                    <label>Width: {width} m</label>
                    <input type="range" min="1" max="300" className="form-control" onChange={e => setWidth(e.target.value)} value={width} />
                </div>
                <button type="button" className="btn btn-outline-primary mt-4" onClick={clickAdd}>ADD</button>
            </div>
        </div>
    );
}

export default Create;