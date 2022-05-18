import './App.scss';
import Button from './Components/008/Button';
import MrGreen from './Components/008/MrGreen';
import {useState} from 'react';

function App() {

    const [mrGreen, setMrGreen] = useState('green');
    const [nr, setNr] = useState(1);
    const [red, setRed] = useState(false);

    const clickButton = () => {
        setMrGreen(s => s ==='pink' ? 'green' : 'pink');
    }

    const clickPlus = () => {
        setNr(n => n + (red ? - 1 : 1));
    }

    const clickRed = () => setRed(r => !r);

    return (
        <div className="App">
            <header className="App-header">
                <h1>Uplifting <span style={
                    {
                        color:mrGreen,
                        backgroundColor: red ? 'red' : null,
                        padding: '7px'
                    }
                    }>{nr}</span></h1>
                <Button clickRed={clickRed} clickButton={clickButton} clickPlus={clickPlus}></Button>
                <MrGreen mrGreen={mrGreen}></MrGreen>
            </header>
        </div>
    );
}

export default App;
