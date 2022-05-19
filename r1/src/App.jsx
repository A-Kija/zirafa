import { useState } from 'react';
import './App.scss';
import Square from './Components/009/Square';
function App() {

    const [ sq, setSq] = useState([]);

    const add = () => setSq(s => [...s, 1]);


    return (
        <div className="App">
            <header className="App-header">
                <h1>USE eFFeCt</h1>
            
            <button onClick={add}>add</button>
            <div className="square-garden">
                {
                    sq.map((_, i) => <Square key={i} i={i}></Square>)
                }
            </div>
            </header>
        </div>
    );

}

export default App;
