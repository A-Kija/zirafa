import './bootstrap.css';
import './App.scss';
import { useState } from 'react';
import List from './Components/016/List';
function App() {

    const [name, setName] = useState('');
    const [color, setColor] = useState('');
    const [list, setList] = useState([]);

    const add = () => {
        const obj = {name, color}; // {name: name, color: color}
        setList(oldList => [...oldList, obj]);
        setName('');
        setColor('');
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-4">
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
                                <button type="button" className="btn btn-outline-primary" onClick={add}>ADD</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-8">
                        <div className="card m-4">
                            <div className="card-header">
                                List
                            </div>
                            <div className="card-body">
                                <ul className="list-group">
                                    {
                                        list.map((obj, i) => <List key={i} obj={obj}></List>)
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}

export default App;