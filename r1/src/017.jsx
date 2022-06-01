import './bootstrap.css';
import './App.scss';
import { useState } from 'react';
import List from './Components/016/List';
import rand from './Functions/rand';
import Edit from './Components/016/Edit';
import Create from './Components/016/Create';
function App() {

    const [list, setList] = useState([]); // listo rodymas

    const [modal, setModal] = useState(null); // modalo rodymas

    const add = obj => {
        obj.id = rand(10000, 99999);
        setList(oldList => [...oldList, obj]);
    }

    const edit = obj => {
        setList(oldList => oldList.map(o => o.id === obj.id ? obj : o));
    }

    const sortName = () => {
        setList(oldList => {
            return [...oldList].sort((a, b) => {
                if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
                if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
                return 0;
            });
        });
    }

    const sortColor = () => {
        setList(oldList => {
            return [...oldList].sort((a, b) => {
                if (a.color.toLowerCase() > b.color.toLowerCase()) return 1;
                if (a.color.toLowerCase() < b.color.toLowerCase()) return -1;
                return 0;
            });
        });
    }

    const deleteItem = id => {
        setList(oldList => oldList.filter(obj => obj.id !== id));
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <Create add={add}></Create>
                    </div>
                    <div className="col-8">
                        <div className="card m-4">
                            <div className="card-header">
                                List
                            </div>
                            <div className="card-body">
                                <ul className="list-group">
                                    {
                                        list.map((obj, i) => <List key={obj.id} obj={obj} index={i + 1} deleteItem={deleteItem} setModal={setModal}></List>)
                                    }
                                </ul>
                                <button type="button" className="btn btn-outline-warning mt-4 mr-2" onClick={sortName}>Sort name</button>
                                <button type="button" className="btn btn-outline-info mt-4 mr-2" onClick={sortColor}>Sort Color</button>
                                <button type="button" className="btn btn-outline-danger mt-4 mr-2" onClick={() => setList([])}>Clear</button>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            <Edit modal={modal} setModal={setModal} edit={edit}></Edit>
        </>
    );

}

export default App;