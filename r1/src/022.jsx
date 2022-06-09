import { useEffect, useReducer, useState } from 'react';
import './App.scss';
import axios from 'axios';
import booksReducer from './Reducers/booksReducer';
import { filterMore13, getFromServer, reloadAction, showAll, sortByDefault, sortByName } from './Actions/booksActios';

function App() {

    const [books, dispachBooks] = useReducer(booksReducer, []);
    const [reload, setReload] = useState(false);

    useEffect(()=> {
        axios.get('https://in3.dev/knygos/')
        .then(res => {
            dispachBooks(getFromServer(res.data));
        });
    }, [reload]);
    

    const doReload = () => {
        dispachBooks(reloadAction());
        setReload(r => !r);
     }
    

    return (
        <div className="App">
            <header className="App-header">
                <div className="kvc p">
                    <button className="a" onClick={() => dispachBooks(sortByName())}>Sort by name</button>
                    <button className="a" onClick={() => dispachBooks(sortByDefault())}>Sort by default</button>
                    <button className="a" onClick={() => dispachBooks(filterMore13())}>More 13</button>
                    <button className="a" onClick={() => dispachBooks(showAll())}>all</button>
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
