import { useReducer } from 'react';
import './App.scss';
import colorReducer from './Reducers/colorReducer';

function App() {

    const [color, dispachColor] = useReducer(colorReducer, 'brown');

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

    return (
        <div className="App">
            <header className="App-header">
                <h1 style={{backgroundColor:color}}>Reducer</h1>
                <button className="a" onClick={doBlack}>BLACK</button>
                <button className="a" onClick={doBlue}>BLUE</button>
                <button className="a" onClick={doBlueBlack}>BLUE/BLACK</button>
            </header>
        </div>
    );
}

export default App;
