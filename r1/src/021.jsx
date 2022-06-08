import { useEffect, useReducer, useState } from 'react';
import './App.scss';
import colorReducer from './Reducers/colorReducer';
import randColor from './Functions/randColor';
import textReducer from './Reducers/textReducer';
import listReducer from './Reducers/listReducer';

function App() {

    const [color, dispachColor] = useReducer(colorReducer, 'brown');
    const [text, dispachText] = useReducer(textReducer, '0000');
    const [list, dispachList] = useReducer(listReducer, []);
    const [colorInput, setColorInput] = useState('#000111');
    const [filterText, setFilterText] = useState('0');
    const [textInput, setTextInput] = useState('');

    const doBlack = () => {
        const action = {
            type: 'make_black'
        }
        dispachColor(action);
    }
    const doBlue = () => {
        const action = {
            type: 'make_blue'
        }
        dispachColor(action);
    }
    const doBlueBlack = () => {
        const action = {
            type: 'make_blue_black'
        }
        dispachColor(action);
    }
    const doRand = () => {
        const action = {
            type: 'make_rand'
        }
        dispachColor(action);
    }
    const doRand2 = () => {
        const action = {
            type: 'make_rand2',
            payload: randColor()
        }
        dispachColor(action);
    }
    const doInputColor = () => {
        const action = {
            type: 'make_input',
            payload: colorInput
        }
        dispachColor(action);
    }
    const doRandText = () => {
        const action = {
            type: 'rand_text'
        }
        dispachText(action);
    }
    const doInputText = () => {
        const action = {
            type: 'input_text',
            payload: textInput
        }
        dispachText(action);
    }
    const newList = () => {
        const action = {
            type: 'new_list'
        }
        dispachList(action);
    }
    const sortList = () => {
        const action = {
            type: 'sort_list'
        }
        dispachList(action);
    }

    const addNew = () => {
        const action = {
            type: 'add_list'
        }
        dispachList(action);
    }
    const filterMore500 = () => {
        const action = {
            type: 'more500_list'
        }
        dispachList(action);
    }
    const filterLess400 = () => {
        const action = {
            type: 'less400_list'
        }
        dispachList(action);
    }
    const allList = () => {
        const action = {
            type: 'all_list'
        }
        dispachList(action);
    }

    const defaultList = () => {
        const action = {
            type: 'def_sort_list'
        }
        dispachList(action);
    }

    const filterInput = () => {
        const action = {
            type: 'input_filter_list',
            payload: filterText
        }
        dispachList(action);
    }

    useEffect(() => {
        if (filterText == 0) {
            return
        }
        const action = {
            type: 'input_filter_list',
            payload: filterText
        }
        dispachList(action);

    }, [filterText])



    

    return (
        <div className="App">
            <header className="App-header">
                {
                    list.map((d, i) => d.show ? <div key={i} style={{color:d.color}}>{d.number}</div> : null)
                }
                <h1 style={{backgroundColor:color}}>{text}</h1>
                <div className="kvc">
                <button className="a" onClick={doBlack}>BLACK</button>
                <button className="a" onClick={doBlue}>BLUE</button>
                <button className="a" onClick={doBlueBlack}>BLUE/BLACK</button>
                <button className="a" onClick={doRand}>RANDOM1</button>
                <button className="a" onClick={doRand2}>RANDOM2</button>
                <input type="color" onChange={e => setColorInput(e.target.value)} value={colorInput}></input>
                <button className="a" onClick={doInputColor}>INPUT</button>
                </div>
                <div className="kvc">
                <button className="a" onClick={doRandText}>RANDOM</button>
                <input type="text" onChange={e => setTextInput(e.target.value)} value={textInput}></input>
                <button className="a" onClick={doInputText}>INPUT</button>
                </div>
                <div className="kvc">
                <button className="a" onClick={newList}>NEW LIST</button>
                <button className="a b" onClick={sortList}>SORT LIST</button>
                <button className="a b" onClick={defaultList}>DEFAULT SORT LIST</button>
                <button className="a b" onClick={addNew}>ADD NEW TO LIST</button>
                <button className="a b" onClick={filterMore500}>FILTER MORE 500</button>
                <button className="a b" onClick={filterLess400}>FILTER LESS 400</button>
                <button className="a c" onClick={allList}>SHOW ALL LIST</button>
                <input type="number" min="0" max="1000" step="50" value={filterText} onChange={e => setFilterText(e.target.value)}></input>
                <button className="a c" onClick={filterInput}>FILTER INPUT</button>
                </div>
            </header>
        </div>
    );
}

export default App;
