import { useEffect, useState } from 'react';
function AnimalEdit({ editAnimalModalData, setEditAnimalModalData, setEditAnimalData }) {

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [type, setType] = useState('1');
    const [hasOwner, setHasOwner] = useState(false);

    useEffect(() => {
        if (null === editAnimalModalData) {
            return;
        }
        setName(editAnimalModalData.name);
        setAge(editAnimalModalData.age);
        setType(editAnimalModalData.type);
        setHasOwner(editAnimalModalData.has_owner);
    }, [editAnimalModalData])


    const clickSave = () => {
        setEditAnimalData({ name, age, type, has_owner: hasOwner ? '1' : '0', id: editAnimalModalData.id });
        setEditAnimalModalData(null);
    }

    if (!editAnimalModalData) {
        return null;
    }

    return (
        <div className="modal">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Edit Animals</h5>
                        <button type="button" className="close" onClick={() => setEditAnimalModalData(null)}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" className="form-control" onChange={e => setName(e.target.value)} value={name} />
                        </div>
                        <div className="form-group">
                            <label>Age</label>
                            <input type="text" className="form-control" onChange={e => setAge(e.target.value)} value={age} />
                        </div>
                        <div className="form-group">
                            <label>Type select</label>
                            <select className="form-control" value={type} onChange={e => setType(e.target.value)}>
                                <option value="1">Cat</option>
                                <option value="2">Dog</option>
                                <option value="3">Rat</option>
                                <option value="4">Racoon</option>
                            </select>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="has-owner" checked={hasOwner} onChange={() => setHasOwner(o => !o)} />
                            <label className="form-check-label" htmlFor="has-owner">
                                Has Owner
                            </label>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-outline-secondary" onClick={() => setEditAnimalModalData(null)}>Close</button>
                            <button type="button" className="btn btn-outline-primary" onClick={clickSave}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AnimalEdit;