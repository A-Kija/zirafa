import { useEffect, useReducer } from 'react';
import './App.scss';
import axios from 'axios';
import booksReducer from './Reducers/booksReducer';

function App() {

    const [books, dispachBooks] = useReducer(booksReducer, []);

    useEffect(()=> {
        axios.get('https://in3.dev/knygos/')
        .then(res => {
            const action = {
                type: 'get_from_server',
                payload: res.data
            }
            dispachBooks(action);
        });
    }, []);

    const sortByName = () => {
        const action = {
            type: 'sort_by_name'
        };
        dispachBooks(action);
    }

    const sortByDefault = () => {
        const action = {
            type: 'sort_by_default'
        };
        dispachBooks(action);
    }
    

    return (
        <div className="App">
            <header className="App-header">
                <div className="kvc p">
                    <button className="a" onClick={sortByName}>Sort by name</button>
                    <button className="a" onClick={sortByDefault}>Sort by default</button>
                </div>
                <h1>Books</h1>
                <div>
                {
                    books.length ? books.map(b => <div key={b.id}>{b.title}</div>) : <h2>Loading...</h2>
                }
                </div>
            </header>
        </div>
    );
}

export default App;
