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
    const [checkbox, setCheckbox] = useState({ a: false, b: false, c: true, d: true });

    const [list5, setList5] = useState([]);
    const [oneCheckbox, setOneCheckbox] = useState(false);

    const [list6, setList6] = useState([]);
    const [radio, setRadio] = useState('option3');

    const [list7, setList7] = useState([]);
    const [range, setRange] = useState(1);

    const [listSelect, setListSelect] = useState([]);
    const [textSelect, setTextSelect] = useState('');

    const handleText = e => setText(e.target.value);
    const handleRange = e => setRange(+e.target.value);
    const handleColor = e => setColor(e.target.value);
    const handleSelect = e => setSelect(e.target.value);
    const handleTextSelect = e => setTextSelect(e.target.value);
    const handleRadio = e => setRadio(e.target.value);

    const handleCheckbox = which => {
        setCheckbox(c => ({ ...c, [which]: !c[which] }));
    }

    const handle1Checkbox = () => {
        setOneCheckbox(c => !c);
    }

    const addTextToList = () => {
        if (text === '') {
            return;
        }
        setList1(l => [...l, text]);
        setText('');
    }

    const addRangeToList = () => {
        setList7(l => [...l, range]);
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
        setList4(c => [...c, ((checkbox.a ? 'A' : '') +
            (checkbox.b ? 'B' : '') +
            (checkbox.c ? 'C' : '') +
            (checkbox.d ? 'D' : ''))
        ]);
    }

    const add1CheckBoxToList = () => {
        setList5(l => [...l, oneCheckbox ? 'YES' : 'NO']);
    }

    const addRadioToList = () => {
        setList6(l => [...l, radio]);
    }




    const clearList1 = () => setList1([]);
    const clearList2 = () => setList2([]);
    const clearList3 = () => setList3([]);
    const clearList4 = () => setList4([]);
    const clearList5 = () => setList5([]);
    const clearList6 = () => setList6([]);
    const clearList7 = () => setList7([]);

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
                                    <input type="checkbox" className="form-check-input" value="A" onChange={() => handleCheckbox('a')} checked={checkbox.a} />
                                    <label className="form-check-label">Check for A</label>
                                </div>
                                <div className="form-group form-check">
                                    <input type="checkbox" className="form-check-input" value="B" onChange={() => handleCheckbox('b')} checked={checkbox.b} />
                                    <label className="form-check-label">Check for B</label>
                                </div>
                                <div className="form-group form-check">
                                    <input type="checkbox" className="form-check-input" value="C" onChange={() => handleCheckbox('c')} checked={checkbox.c} />
                                    <label className="form-check-label">Check for C</label>
                                </div>
                                <div className="form-group form-check">
                                    <input type="checkbox" className="form-check-input" value="D" onChange={() => handleCheckbox('d')} checked={checkbox.d} />
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

            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <div className="card m-4">
                            <div className="card-header">
                                1 CHECKBOX
                            </div>
                            <div className="card-body">
                                <div className="form-group form-check">
                                    <input type="checkbox" className="form-check-input" onChange={handle1Checkbox} checked={oneCheckbox} />
                                    <label className="form-check-label">Check for YES/NO</label>
                                </div>

                                <button type="button" onClick={add1CheckBoxToList} className="btn btn-outline-primary">Add to List</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="card m-4">
                            <div className="card-header">
                                YES/NO CHECKBOX LIST
                            </div>
                            <div className="card-body">
                                <button type="button" onClick={clearList5} className="btn btn-outline-danger">Clear List</button>
                                <ul className="list-group mt-2">
                                    {
                                        list5.map((t, i) => <li key={i} className="list-group-item">{t}</li>)
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
                                RADIO
                            </div>
                            <div className="card-body">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="ra" value="option1" onChange={handleRadio} checked={'option1' === radio}/>
                                    <label className="form-check-label">
                                        OPT 1
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="ra" value="option2" onChange={handleRadio} checked={'option2' === radio} />
                                    <label className="form-check-label">
                                        OPT 2
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="ra" value="option3" onChange={handleRadio} checked={'option3' === radio} />
                                    <label className="form-check-label">
                                        OPT 3
                                    </label>
                                </div>
                                <button type="button" onClick={addRadioToList} className="btn btn-outline-primary mt-2">Add to List</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="card m-4">
                            <div className="card-header">
                                RADIO LIST
                            </div>
                            <div className="card-body">
                                <button type="button" onClick={clearList6} className="btn btn-outline-danger">Clear List</button>
                                <ul className="list-group mt-2">
                                    {
                                        list6.map((t, i) => <li key={i} className="list-group-item">{t}</li>)
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
                                RANGE
                            </div>
                            <div className="card-body">
                                <div className="form-group">
                                    <label>Rnge input</label>
                                    <input type="range" className="form-control" min="1" max="100" onChange={handleRange} value={range}></input>
                                    <small className="form-text text-muted">Slide a little.</small>
                                </div>
                                <button type="button" onClick={addRangeToList} className="btn btn-outline-primary">Add to List</button>
                                <h3>{list7.reduce((previousValue, currentValue) => parseInt(previousValue) + parseInt(currentValue), 0)}</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="card m-4">
                            <div className="card-header">
                                RANGE LIST
                            </div>
                            <div className="card-body">
                                <button type="button" onClick={clearList7} className="btn btn-outline-danger">Clear List</button>
                                <ul className="list-group mt-2">
                                    {
                                        list7.map((t, i) => <li key={i} className="list-group-item">{t}</li>)
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
