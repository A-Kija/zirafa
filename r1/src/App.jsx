import './bootstrap.css';
import './App.scss';

function App() {
  

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        CREATE Tree
                        CREATE Animal
                    </div>
                    <div className="col-8">
                        <div className="card m-4">
                            <div className="card-header">
                                <h2>Trees List</h2>
                            </div>
                            <div className="card-body">
                                <ul className="list-group">
                                    -----
                                </ul>
                            </div>
                        </div>

                        <div className="card m-4">
                            <div className="card-header">
                                <h2>Animals List</h2>
                            </div>
                            <div className="card-body">
                                <ul className="list-group">
                                    -----
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