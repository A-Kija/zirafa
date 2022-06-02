import './bootstrap.css';
import './App.scss';
import axios from 'axios';

import { useEffect, useState } from 'react';
import Tree from './Components/018/Tree';
import Animal from './Components/018/Animal';
import CreateTree from './Components/018/CreateTree';
import CreateAnimal from './Components/018/CreateAnimal';
import TreeEdit from './Components/018/TreeEdit';
import AnimalEdit from './Components/018/AnimalEdit';

function App() {

    const [lastTreeUpdate, setLastTreeUpdate] = useState(Date.now());
    const [lastAnimalUpdate, setLastAnimalUpdate] = useState(Date.now());

    const [editTreeModalData, setEditTreeModalData] = useState(null);
    const [editAnimalModalData, setEditAnimalModalData] = useState(null);


    const [treeList, setTreeList] = useState(null);
    const [animalList, setAnimalList] = useState(null);

    const [createTreeData, setCreateTreeData] = useState(null);
    const [createAnimalData, setCreateAnimalData] = useState(null);

    const [deleteTreeData, setDeleteTreeData] = useState(null);
    const [deleteAnimalData, setAnimalTreeData] = useState(null);

    const [editTreeData, setEditTreeData] = useState(null);


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
    useEffect(() => {
        if (null === deleteAnimalData) {
            return;
        }
        axios.delete('http://localhost:3003/animals/' + deleteAnimalData.id)
        .then(res => {
            setLastAnimalUpdate(Date.now());
        })
    }, [deleteAnimalData]);

    // EDIT
        useEffect(() => {
            if (null === editTreeData) {
                return;
            }
            axios.put('http://localhost:3003/trees/' + editTreeData.id, editTreeData)
            .then(res => {
                setLastTreeUpdate(Date.now());
            })
        }, [editTreeData]);


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
                                        treeList ? treeList.map((t, i) => <Tree key={t.id} index={i + 1} tree={t} setDeleteTreeData={setDeleteTreeData} setEditTreeModalData={setEditTreeModalData}></Tree>) : null
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
                                        animalList ? animalList.map((a, i) => <Animal key={a.id} index={i + 1} animal={a} setAnimalTreeData={setAnimalTreeData} setEditAnimalModalData={setEditAnimalModalData}></Animal>) : null
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <TreeEdit setEditTreeData={setEditTreeData} editTreeModalData={editTreeModalData} setEditTreeModalData={setEditTreeModalData}></TreeEdit>
            <AnimalEdit setEditAnimalModalData={setEditAnimalModalData} editAnimalModalData={editAnimalModalData}></AnimalEdit>
        </>
    );

}

export default App;