import './bootstrap.css';
import './App.scss';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Alabama from './Components/020/Alabama';
import Racoon from './Components/020/Racoon';
import Cuckoo from './Components/020/Cuckoo';
import Troll from './Components/020/Troll';
import NotFound from './Components/020/NotFound';
import rand from './Functions/rand';
import randColor from './Functions/randColor';

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
                                    <h3>Racoon</h3>
                                    {
                                        [...Array(rand(2, 11))].map((_, i) => <Link key={i} to={'/racoon/'+ (i + 1)}>Racoon Trash Can No: {i + 1}</Link>)
                                    }
                                    <h3>Cuckoo</h3>
                                    {
                                        [...Array(rand(3, 7))].map((_, i) => <Link key={i} to={'/cuckoo/'+ (i + 1) + '/' + randColor(false)}>Cuckoo Nest No: {i + 1}</Link>)
                                    }
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
                                    <Route path="/racoon/:can" element={<Racoon/>}></Route>
                                    <Route path="/cuckoo/:id/:color" element={<Cuckoo/>}></Route>
                                    <Route path="/troll" element={<Troll/>}>
                                        <Route path="green" element={<div className="kv" style={{backgroundColor:'green'}}></div>}></Route>
                                        <Route path="pink" element={<div className="kv" style={{backgroundColor:'pink'}}></div>}></Route>
                                    </Route>
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