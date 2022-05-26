import './App.scss';
import { useState } from 'react';
import Hello from './Components/014/Hello';
function App() {

    const [ate, setAte] = useState('');
    const [color, setColor] = useState('white');

    const [red, setRed] = useState('white');
    const [africa, setAfrica] = useState('');

    const labas = () => {
        console.log('Labukas!');
    }

    const showAte = () => {
        setAte('Ate');
    }

    const hideAte = () => {
        setAte('');
        setColor('white');
    }

    const hideShowAte = () => {
        // setAte(a => a ? '' : 'Ate');
        setAte(a => a === 'Ate' ? '' : 'Ate');
    }

    const makeRed = () => {
        setColor('crimson');
     }

    const makeH3Red = () => {
        setRed('crimson');
    }

    const sayAfrica = () => {
        setAfrica('Africa');
    }

    return (
        <div className="App">
            <header className="App-header">
                <h1>REPEAT</h1>
                <Hello red={red} africa={africa}></Hello>
                <h2 style={{color:color}}>{ate}</h2>
                <div className="sqc">
                    <button className="a" onClick={labas}>Labas</button>
                    <button className="a" onClick={showAte}>Say Ate</button>
                    <button className="a" onClick={hideAte}>No Ate</button>
                    <button className="a" onClick={hideShowAte}>No / Ate</button>
                </div>
                <div className="sqc">
                    <button className="a" onClick={makeRed}>RED</button>
                    <button className="a" onClick={makeH3Red}>H3 RED</button>
                    <button className="a" onClick={sayAfrica}>H3 Africa</button>
                </div>
            </header>
        </div>
    );

}

export default App;