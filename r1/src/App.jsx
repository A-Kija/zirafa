import './App.scss';
import { useState } from 'react';
import Hello from './Components/014/Hello';
import Lists from './Components/014/Lists';
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

    const reset = () => {
        setRed('white');
        setAfrica('');
    }

    const makeGreen = () => {
        setColor('green');
    }


    return (
        <div className="App">
            <header className="App-header">
                <h1>REPEAT</h1>
                <Lists></Lists>
                {/* <Hello red={red} africa={africa} makeGreen={makeGreen}></Hello>
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
                    <button className="a" onClick={reset}>H3 Reset</button>
                </div> */}
            </header>
        </div>
    );

}

export default App;