import './bootstrap.css';
import './App.scss';
import { BrowserRouter, Link } from 'react-router-dom';

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
                                    <Link to="/racoon">Racoon Home</Link>
                                    <Link to="/cuckoo">Cuckoo Nest</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-8">
                        <div className="card m-4">
                            <div className="card-header">
                                <h2>Head</h2>
                            </div>
                            <div className="card-body">
                                body
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );

}

export default App;