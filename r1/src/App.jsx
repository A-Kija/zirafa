import './bootstrap.css';
import './App.scss';
function App() {

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <div className="card m-4">
                            <div className="card-header">
                                Add to list
                            </div>
                            <div className="card-body">
                                <div className="form-group">
                                    <label>Name</label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label>Color</label>
                                    <input type="text" className="form-control" />
                                </div>
                                <button type="button" className="btn btn-outline-primary">ADD</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-8">
                        <div className="card m-4">
                            <div className="card-header">
                                List
                            </div>
                            <div className="card-body">
                                <ul className="list-group">
                                    <li className="list-group-item">An item</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}

export default App;