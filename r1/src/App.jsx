import { useEffect, useReducer, useState } from 'react';
import './App.scss';
import axios from 'axios';
import booksReducer from './Reducers/booksReducer';

function App() {

    const [books, dispachBooks] = useReducer(booksReducer, []);
    const [reload, setReload] = useState(false);

    useEffect(()=> {
        axios.get('https://in3.dev/knygos/')
        .then(res => {
            const action = {
                type: 'get_from_server',
                payload: res.data
            }
            dispachBooks(action);
        });
    }, [reload]);

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

    const filterMore13 = () => {
        const action = {
            type: 'filter_more_13'
        };
        dispachBooks(action);
    }

    const showAll = () => {
        const action = {
            type: 'show_all'
        };
        dispachBooks(action);
    }

    const doReload = () => {
        const action = {
            type: 'reload'
        };
        dispachBooks(action);
        setReload(r => !r);
    }
    

    return (
        <div className="App">
            <header className="App-header">
                <div className="kvc p">
                    <button className="a" onClick={sortByName}>Sort by name</button>
                    <button className="a" onClick={sortByDefault}>Sort by default</button>
                    <button className="a" onClick={filterMore13}>More 13</button>
                    <button className="a" onClick={showAll}>all</button>
                    <button className="a b" onClick={doReload}>Reload</button>
                </div>
                <h1>Books</h1>
                <div>
                {
                    books.length ? books.map(b => b.show ? <div key={b.id}>{b.title} <small><i>{b.price} EUR</i></small></div> : null) : <h2>Loading...</h2>
                }
                </div>
            </header>
        </div>
    );
}

export default App;
