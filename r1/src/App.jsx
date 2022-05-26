import './App.scss';
import { useState } from 'react';
function App() {

    const [ate, setAte] = useState('');

    const labas = () => {
        console.log('Labukas!');
    }

    const showAte = () => {
        setAte('Ate');
    }

    return (
        <div className="App">
            <header className="App-header">
                <h1>REPEAT</h1>
                <h2>{ate}</h2>

                <button className="a" onClick={labas}>Labas</button>
                <button className="a" onClick={showAte}>Say Ate</button>

            </header>
        </div>
    );

}

export default App;