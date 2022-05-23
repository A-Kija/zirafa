import './App.scss';
import './bootstrap.css';
// import { useState } from 'react';


function App() {

    const addCat = () => {
        localStorage.setItem('katinukas', 'Vardu Pilkis');
    }

    const removeCat = () => {
        localStorage.removeItem('katinukas');
    }

    return (
        <div className="cards-container">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="card m-4">
                            <div className="card-header">
                                {localStorage.getItem('katinukas')}
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
    );


}

export default App;