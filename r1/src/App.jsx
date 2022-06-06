import { useReducer, useState } from 'react';
import './App.scss';
import colorReducer from './Reducers/colorReducer';
import randColor from './Functions/randColor';

function App() {

    const [color, dispachColor] = useReducer(colorReducer, 'brown');
    const [colorInput, setColorInput] = useState('#000111');

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

    return (
        <div className="App">
            <header className="App-header">
                <h1 style={{backgroundColor:color}}>Reducer</h1>
                <div className="kvc">
                <button className="a" onClick={doBlack}>BLACK</button>
                <button className="a" onClick={doBlue}>BLUE</button>
                <button className="a" onClick={doBlueBlack}>BLUE/BLACK</button>
                <button className="a" onClick={doRand}>RANDOM1</button>
                <button className="a" onClick={doRand2}>RANDOM2</button>
                <input type="color" onChange={e => setColorInput(e.target.value)} value={colorInput}></input>
                <button className="a" onClick={doInputColor}>INPUT</button>
                </div>
            </header>
        </div>
    );
}

export default App;
