import './App.scss';
import './bootstrap.css';
import { useState } from 'react';


function App() {

    const [list1, setList1] = useState([]);
    const [text, setText] = useState('');
    const [list2, setList2] = useState([]);
    const [color, setColor] = useState('');

    const handleText = e => setText(e.target.value);
    const handleColor = e => setColor(e.target.value);

    const addTextToList = () => {
        if (text === '') {
            return;
        }
        setList1(l => [...l, text]);
        setText('');
    }
    const addColorToList = () => setList2(l => [...l, color ? color : '#000000']);

    const clearList1 = () => setList1([]);
    const clearList2 = () => setList2([]);

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <div className="card m-4">
                            <div className="card-header">
                                TEXT
                            </div>
                            <div className="card-body">
                                <div className="form-group">
                                    <label>Text input</label>
                                    <input type="text" className="form-control" onChange={handleText} value={text}></input>
                                    <small className="form-text text-muted">Some little text.</small>
                                </div>
                                <button type="button" onClick={addTextToList} className="btn btn-outline-primary">Add to List</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="card m-4">
                            <div className="card-header">
                                TEXT LIST
                            </div>
                            <div className="card-body">
                                <button type="button" onClick={clearList1} className="btn btn-outline-danger">Clear List</button>
                                <ul className="list-group mt-2">
                                    {
                                        list1.map((t, i) => <li key={i} className="list-group-item">{t}</li>)
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <div className="card m-4">
                            <div className="card-header">
                                COLOR
                            </div>
                            <div className="card-body">
                                <div className="form-group">
                                    <label>Color input</label>
                                    <input type="color" className="form-control" onChange={handleColor} value={color}></input>
                                    <small className="form-text text-muted">Some nice color.</small>
                                </div>
                                <button type="button" onClick={addColorToList} className="btn btn-outline-primary">Add to List</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="card m-4">
                            <div className="card-header">
                                COLOR LIST
                            </div>
                            <div className="card-body">
                                <button type="button" onClick={clearList2} className="btn btn-outline-danger">Clear List</button>
                                <ul className="list-group mt-2">
                                    {
                                        list2.map((t, i) => <li key={i} className="list-group-item" style={{ backgroundColor: t }}></li>)
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <div className="card m-4">
                            <div className="card-header">
                                SELECT
                            </div>
                            <div className="card-body">
                                <div className="form-group">
                                    <label>Select</label>
                                    <select className="form-control">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">

                    </div>
                </div>
            </div>

        </div>
    );
}

export default App;
