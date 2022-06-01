import './bootstrap.css';
import './App.scss';
import axios from 'axios';

import { useEffect, useState } from 'react';
import Tree from './Components/018/Tree';
import Animal from './Components/018/Animal';

function App() {


    const [treeList, setTreeList] = useState(null);
    const [animalList, setAnimalList] = useState(null);


    // READ
    useEffect(() => {
        axios.get('http://localhost:3003/trees')
        .then(res => {
            setTreeList(res.data);
        })
    }, []);
    useEffect(() => {
        axios.get('http://localhost:3003/animals')
        .then(res => {
            setAnimalList(res.data);
        })
    }, []);


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
                                    {
                                        treeList ? treeList.map(t => <Tree key={t.id} tree={t}></Tree>) : null
                                    }
                                </ul>
                            </div>
                        </div>

                        <div className="card m-4">
                            <div className="card-header">
                                <h2>Animals List</h2>
                            </div>
                            <div className="card-body">
                                <ul className="list-group">
                                {
                                        animalList ? animalList.map(a => <Animal key={a.id} animal={a}></Animal>) : null
                                    }
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