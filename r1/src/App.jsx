import './App.scss';
import './bootstrap.css';
import {useState} from 'react';


function App() {

    const [text, setText] = useState('');

    const handleText = e => {
        setText(e.target.value);
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <div className="card m-4">
                            <div className="card-header">
                                TEXT
                            </div>
                            <div className="card-body">
                                <div className="form-group">
                                    <label>Text input</label>
                                    <input type="text" className="form-control" onChange={handleText} value={text}></input>
                                    <small className="form-text text-muted">Some little text.</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        One of three columns
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
