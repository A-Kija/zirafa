import { useEffect, useState } from 'react';
function Edit({modal, setModal, edit}) {

    const [name, setName] = useState('');
    const [color, setColor] = useState('');

    const clickEdit = () => {
        const obj = {name, color, id: modal.id}
        edit(obj);
    }

    useEffect(() => {
        if (null === modal) {
            return;
        }
        setName(modal.name);
        setColor(modal.color);
    }, [modal]);

    if(!modal) {
        return null;
    }

    return (
        <div className="modal">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Edit List</h5>
                        <button type="button" className="close" onClick={() => setModal(null)}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" className="form-control" onChange={e => setName(e.target.value)} value={name} />
                        </div>
                        <div className="form-group">
                            <label>Color</label>
                            <input type="text" className="form-control" onChange={e => setColor(e.target.value)} value={color} />
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-outline-secondary" onClick={() => setModal(null)}>Close</button>
                        <button type="button" className="btn btn-outline-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Edit;