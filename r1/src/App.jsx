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

    const sortName = () => {
        setList(oldList => {
            return [...oldList].sort((a, b) => {
                if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
                if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
                return 0;
            });
        });
    }

    const sortColor = () => {
        setList(oldList => {
            return [...oldList].sort((a, b) => {
                if (a.color.toLowerCase() > b.color.toLowerCase()) return 1;
                if (a.color.toLowerCase() < b.color.toLowerCase()) return -1;
                return 0;
            });
        });
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
                                        list.map((obj, i) => <List key={i} obj={obj} index={i + 1}></List>)
                                    }
                                </ul>
                                <button type="button" className="btn btn-outline-warning mt-4 mr-2" onClick={sortName}>Sort name</button>
                                <button type="button" className="btn btn-outline-info mt-4 mr-2" onClick={sortColor}>Sort Color</button>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}

export default App;