import './bootstrap.css';
import './App.scss';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Alabama from './Components/020/Alabama';
import Racoon from './Components/020/Racoon';
import Cuckoo from './Components/020/Cuckoo';
import Troll from './Components/020/Troll';
import NotFound from './Components/020/NotFound';

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
                                    {
                                        [1,1,1,1,1].map((_, i) => <Link key={i} to="/racoon">Racoon Trash Can No: {i + 1}</Link>)
                                    }
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
                                    <Route path="/" element={<Alabama/>}></Route>
                                    <Route path="/racoon" element={<Racoon/>}></Route>
                                    <Route path="/cuckoo" element={<Cuckoo/>}></Route>
                                    <Route path="/troll" element={<Troll/>}></Route>
                                    <Route path="*" element={<NotFound/>}></Route>
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