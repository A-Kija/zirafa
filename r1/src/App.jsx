import './bootstrap.css';
import './App.scss';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

function App() {

    return (
        <BrowserRouter>
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <div className="card m-4">
                            <div className="card-header">
                                <h2>Links</h2>
                            </div>
                            <div className="card-body">
                                <div className="links">
                                    <Link to="/">Sweet Home Alabama</Link>
                                    <Link to="/racoon">Racoon Trash Can</Link>
                                    <Link to="/cuckoo">Cuckoo Nest</Link>
                                    <Link to="/troll">Troll Bridge</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-8">
                        <div className="card m-4">
                            <div className="card-header">
                                <h2>Homes</h2>
                            </div>
                            <div className="card-body">
                                <Routes>
                                    <Route path="/" element={<h1>Alabama</h1>}></Route>
                                    <Route path="/racoon" element={<h1>Racoon</h1>}></Route>
                                </Routes>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );

}

export default App;