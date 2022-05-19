import { useEffect, useState } from 'react';
import './App.scss';
import Square from './Components/009/Square';
import axios from 'axios';
import User from './Components/009/User';
function App() {

    const [ sq, setSq] = useState([]);
    const add = () => setSq(s => [...s, 1]);

    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            console.log(res.data);
            setUsers(res.data);
        })
    }, []);


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

            {
                users.map(u => <User key={u.id} user={u}></User>)
            }
            </header>
        </div>
    );

}

export default App;
