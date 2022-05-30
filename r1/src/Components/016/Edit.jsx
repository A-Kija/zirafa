import { useState } from 'react';
function Edit() {

    const [name, setName] = useState('');
    const [color, setColor] = useState('');

    return (
        <div className="modal">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Modal title</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
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
                        <button type="button" className="btn btn-outline-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-outline-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Edit;