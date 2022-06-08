import { useEffect, useReducer, useState } from 'react';
import './App.scss';
import axios from 'axios';

function App() {

    const [books, setBooks] = useState([]);

    useEffect(()=> {
        axios.get('https://in3.dev/knygos/')
        .then(res => setBooks(res.data));
    }, []);
    

    return (
        <div className="App">
            <header className="App-header">
                <h1>Books</h1>
                <div>
                {
                    books.map(b => <div key={b.id}>{b.title}</div>)
                }
                </div>
            </header>
        </div>
    );
}

export default App;
