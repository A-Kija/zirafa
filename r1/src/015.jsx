import { useState } from 'react';
import './App.scss';
import List2 from './Components/015/List2';
function App() {

    const cars = [
        {id: 1, type: 'MB', color: 'blue', price: 45874.01},
        {id: 4, type: 'Volvo', color: 'pink', price: 54658.00},
        {id: 17, type: 'MB', color: 'black', price: 6465.77},
        {id: 47, type: 'Opel', color: 'blue', price: 89791.77},
        {id: 10, type: 'Scania', color: 'red', price: 44624.00},
        {id: 107, type: 'BMW', color: 'red', price: 98591.00},
        {id: 44, type: 'BMW', color: 'yellow', price: 789.30},
        {id: 78, type: 'MB', color: 'blue', price: 64598.00},
        {id: 99, type: 'Tesla', color: 'gray', price: 78944.00}
    ];

    // const [showCar, setShowCar] = useState(null);

    // const [activeCar, setActiveCar] = useState(10);

    const [kv, setKv] = useState([]);

    return (
        <div className="App">
            <header className="App-header">
                <h1>REPEAT PART II</h1>
                <div className="kvc">
                {
                    kv.map((k, i) => <div style={{background:k}} key={i} className="kv"></div>)
                }
                </div>
                <button className="a" onClick={() => setKv(k => [...k, 'skyblue', 'gray'])}>ADD []</button>
                {/* <h2>{showCar ? showCar.type : null}</h2> */}
                {/* <List2 cars={cars} setShowCar={setShowCar} activeCar={activeCar} setActiveCar={setActiveCar}></List2> */}
            </header>
        </div>
    );

}

export default App;