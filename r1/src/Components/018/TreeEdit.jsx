import { useEffect, useState } from 'react';
function TreeEdit({editTreeModalData, setEditTreeModalData, setEditTreeData}) {

    const [title, setTitle] = useState('');
    const [height, setHeight] = useState('');
    const [type, setType] = useState('1');

    useEffect(() => {
        if (null === editTreeModalData) {
            return;
        }
        setTitle(editTreeModalData.title);
        setHeight(editTreeModalData.height);
        setType(editTreeModalData.type);
    }, [editTreeModalData])

    const clickSave = () => {
        setEditTreeData({ title, height, type, id: editTreeModalData.id});
        setEditTreeModalData(null);
    }

    if (!editTreeModalData) {
        return null;
    }

    return (
        <div className="modal">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Edit Trees</h5>
                        <button type="button" className="close" onClick={() => setEditTreeModalData(null)}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="form-group">
                            <label>Title</label>
                            <input type="text" className="form-control" onChange={e => setTitle(e.target.value)} value={title} />
                        </div>
                        <div className="form-group">
                            <label>Height</label>
                            <input type="text" className="form-control" onChange={e => setHeight(e.target.value)} value={height} />
                        </div>
                        <div className="form-group">
                            <label>Type select</label>
                            <select className="form-control" value={type} onChange={e => setType(e.target.value)}>
                                <option value="1">Leaf</option>
                                <option value="2">Spike</option>
                                <option value="3">Palm</option>
                            </select>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-outline-secondary" onClick={() => setEditTreeModalData(null)}>Close</button>
                            <button type="button" className="btn btn-outline-primary" onClick={clickSave}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TreeEdit;