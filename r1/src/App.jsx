import './bootstrap.css';
import './App.scss';
import axios from 'axios';

import { useEffect, useState } from 'react';
import Tree from './Components/018/Tree';
import Animal from './Components/018/Animal';
import CreateTree from './Components/018/CreateTree';
import CreateAnimal from './Components/018/CreateAnimal';

function App() {

    const [lastTreeUpdate, setLastTreeUpdate] = useState(Date.now());
    const [lastAnimalUpdate, setLastAnimalUpdate] = useState(Date.now());

    const [treeList, setTreeList] = useState(null);
    const [animalList, setAnimalList] = useState(null);

    const [createTreeData, setCreateTreeData] = useState(null);
    const [createAnimalData, setCreateAnimalData] = useState(null);

    const [deleteTreeData, setDeleteTreeData] = useState(null);


    // READ
    useEffect(() => {
        axios.get('http://localhost:3003/trees')
        .then(res => {
            setTreeList(res.data);
        })
    }, [lastTreeUpdate]);
    useEffect(() => {
        axios.get('http://localhost:3003/animals')
        .then(res => {
            setAnimalList(res.data);
        })
    }, [lastAnimalUpdate]);

    // CREATE
    useEffect(() => {
        if (null === createTreeData) {
            return;
        }
        axios.post('http://localhost:3003/trees', createTreeData)
        .then(res => {
            setLastTreeUpdate(Date.now());
        })
    }, [createTreeData]);

    useEffect(() => {
        if (null === createAnimalData) {
            return;
        }
        axios.post('http://localhost:3003/animals', createAnimalData)
        .then(res => {
            setLastAnimalUpdate(Date.now());
        })
    }, [createAnimalData]);

    // DELETE
    useEffect(() => {
        if (null === deleteTreeData) {
            return;
        }
        axios.delete('http://localhost:3003/trees/' + deleteTreeData.id)
        .then(res => {
            setLastTreeUpdate(Date.now());
        })
    }, [deleteTreeData]);


    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <CreateTree setCreateTreeData={setCreateTreeData}></CreateTree>
                        <CreateAnimal setCreateAnimalData={setCreateAnimalData}></CreateAnimal>
                    </div>
                    <div className="col-8">
                        <div className="card m-4">
                            <div className="card-header">
                                <h2>Trees List</h2>
                            </div>
                            <div className="card-body">
                                <ul className="list-group">
                                    {
                                        treeList ? treeList.map((t, i) => <Tree key={t.id} index={i + 1} tree={t} setDeleteTreeData={setDeleteTreeData}></Tree>) : null
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
                                        animalList ? animalList.map((a, i) => <Animal key={a.id} index={i + 1} animal={a}></Animal>) : null
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