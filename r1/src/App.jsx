import './App.scss';
import './bootstrap.css';
import { useState } from 'react';


function App() {

    const [list1, setList1] = useState([]);
    const [text, setText] = useState('');

    const [list2, setList2] = useState([]);
    const [color, setColor] = useState('');

    const [list3, setList3] = useState([]);
    const [select, setSelect] = useState('');

    const [list4, setList4] = useState([]);
    const [checkbox, setCheckbox] = useState({a: false, b: false, c:true, d:true});


    const [listSelect, setListSelect] = useState([]);
    const [textSelect, setTextSelect] = useState('');

    const handleText = e => setText(e.target.value);
    const handleColor = e => setColor(e.target.value);
    const handleSelect = e => setSelect(e.target.value);
    const handleTextSelect = e => setTextSelect(e.target.value);

    const handleCheckbox = which => {
        setCheckbox(c => ({...c, [which]: !c[which]}));
    }


    const addTextToList = () => {
        if (text === '') {
            return;
        }
        setList1(l => [...l, text]);
        setText('');
    }
    const addColorToList = () => setList2(l => [...l, color ? color : '#000000']);
    const addSelectToList = () => {
        if (select === '') {
            return;
        }
        setList3(l => [...l, select]);
    }
    const addTextToSelect = () => {
        if (textSelect === '') {
            return;
        }
        setListSelect(l => [...l, textSelect]);
        setTextSelect('');
    }

    const addCheckBoxToList = () => {
        setList4(c => [...c,   ((checkbox.a ? 'A' : '') + 
                                (checkbox.b ? 'B' : '') +
                                (checkbox.c ? 'C' : '') +
                                (checkbox.d ? 'D' : ''))
        ]);
    }





    const clearList1 = () => setList1([]);
    const clearList2 = () => setList2([]);
    const clearList3 = () => setList3([]);
    const clearList4 = () => setList4([]);

    return (
        <div className="cards-container">
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
                    <div className="col-4">
                        <div className="card m-4">
                            <div className="card-header">
                                TEXT to SELECT
                            </div>
                            <div className="card-body">
                                <div className="form-group">
                                    <label>Text input</label>
                                    <input type="text" className="form-control" onChange={handleTextSelect} value={textSelect}></input>
                                    <small className="form-text text-muted">Some little text.</small>
                                </div>
                                <button type="button" onClick={addTextToSelect} className="btn btn-outline-primary">Add to Select</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card m-4">
                            <div className="card-header">
                                SELECT
                            </div>
                            <div className="card-body">
                                <div className="form-group">
                                    <label>Select</label>
                                    <select className="form-control" onChange={handleSelect} value={select}>
                                        <option value="" disabled>SELECT</option>
                                        {
                                            listSelect.map((v, i) => <option key={i} value={v}>{v}</option>)
                                        }

                                    </select>
                                </div>
                                <button type="button" onClick={addSelectToList} className="btn btn-outline-success">Add to List</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card m-4">
                            <div className="card-header">
                                SELECT LIST
                            </div>
                            <div className="card-body">
                                <button type="button" onClick={clearList3} className="btn btn-outline-danger">Clear List</button>
                                <ul className="list-group mt-2">
                                    {
                                        list3.map((t, i) => <li key={i} className="list-group-item">{t}</li>)
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
                                CHECKBOX
                            </div>
                            <div className="card-body">
                                <div className="form-group form-check">
                                    <input type="checkbox" className="form-check-input" value="A" onChange={()=>handleCheckbox('a')} checked={checkbox.a} />
                                    <label className="form-check-label">Check for A</label>
                                </div>
                                <div className="form-group form-check">
                                    <input type="checkbox" className="form-check-input" value="B" onChange={()=>handleCheckbox('b')} checked={checkbox.b} />
                                    <label className="form-check-label">Check for B</label>
                                </div>
                                <div className="form-group form-check">
                                    <input type="checkbox" className="form-check-input" value="C" onChange={()=>handleCheckbox('c')} checked={checkbox.c} />
                                    <label className="form-check-label">Check for C</label>
                                </div>
                                <div className="form-group form-check">
                                    <input type="checkbox" className="form-check-input" value="D" onChange={()=>handleCheckbox('d')} checked={checkbox.d} />
                                    <label className="form-check-label">Check for D</label>
                                </div>
                                <button type="button" onClick={addCheckBoxToList} className="btn btn-outline-primary">Add to List</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="card m-4">
                            <div className="card-header">
                                CHECKBOX LIST
                            </div>
                            <div className="card-body">
                                <button type="button" onClick={clearList4} className="btn btn-outline-danger">Clear List</button>
                                <ul className="list-group mt-2">
                                    {
                                        list4.map((t, i) => <li key={i} className="list-group-item">{t}</li>)
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default App;
