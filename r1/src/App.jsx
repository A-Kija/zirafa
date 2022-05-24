import './App.scss';
import './bootstrap.css';
import { useEffect, useState } from 'react';


function App() {

    const [cat, setCat] = useState(null);

    const [niceText, setNiceText] = useState(null);

    const [count, setCount] = useState(null);

    const [kv, setKv] = useState([]);

    useEffect(() => {
        setCat(JSON.parse(localStorage.getItem('katinukas')));
    }, []);

    const addCat = () => {
        localStorage.setItem('katinukas', JSON.stringify(['pilkis', 'mulkis']));
        setCat(['pilkis', 'mulkis']);
    }

    const removeCat = () => {
        localStorage.removeItem('katinukas');
        setCat(null);
    }
// 
    const addOne = () => {
        setCount(c => {
            localStorage.setItem('one', c + 1);
            return c + 1;
        });
    }

    useEffect(() => {
        setCount(parseInt(localStorage.getItem('one') ?? 1));
    }, []);
// 




const remKv = () => {
    setKv(k => {
        localStorage.setItem('KV', JSON.stringify(k.slice(1)));
        return k.slice(1);
    });
}

const addKv = () => {
    setKv(k => {
        localStorage.setItem('KV', JSON.stringify([...k, niceText]));
        return [...k, niceText];
    });
}

useEffect(() => {
    setKv(JSON.parse(localStorage.getItem('KV') ?? '[]'));
}, []);





    return (
        <>
            <div className="cards-container">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="card m-4">
                                <div className="card-header">
                                    {
                                       cat ? cat.map((c, i) => <h2 key={i}>{c}</h2>) : null
                                    }
                                </div>
                                <div className="card-body">
                                    <button type="button" onClick={addCat} className="btn btn-outline-primary m-2">Add Cat</button>
                                    <button type="button" onClick={removeCat} className="btn btn-outline-danger m-2">Remove Cat</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="cards-container">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="card m-4">
                                <div className="card-header">
                                    {count}
                                </div>
                                <div className="card-body">
                                    <button type="button" onClick={addOne} className="btn btn-outline-primary m-2">Add 1</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="cards-container">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="card m-4">
                                <div className="card-header">
                                    Kvadratukai
                                </div>
                                <div className="card-body">
                                    <button type="button" onClick={addKv} className="btn btn-outline-primary m-2">Add []</button>
                                    <button type="button" onClick={remKv} className="btn btn-outline-primary m-2">Remove []</button>
                                    <div className="form-group">
                                    <label>Color input</label>
                                    <input type="text" className="form-control" onChange={e => setNiceText(e.target.value)} value={niceText}></input>
                                    <small className="form-text text-muted">Some nice text.</small>
                                </div>
                                </div>
                                <div className="square-garden">
                                    {
                                        kv.map((n, i) => <div key={i} className="small-red-square">{n}</div>)
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );


}

export default App;