import { useState } from 'react';
import './App.scss';
import Number3 from './Components/023/Number3';
import Te from './Components/023/Te';

function App() {

    const [number, setNumber] = useState(1);
    const [number3, setNumber3] = useState(1);

    return (
        <Number3.Provider value={number3}>
        <div className="App">
            <header className="App-header">
                <div className="kvc">
                    <button className="a b" onClick={() => setNumber(n => n + 1)}>+1</button>
                    <button className="a b" onClick={() => setNumber3(n => n + 3)}>+3</button>
                </div>
                <h1>Context</h1>
                <Te number={number}></Te>
            </header>
        </div>
        </Number3.Provider>
    );
}

export default App;
