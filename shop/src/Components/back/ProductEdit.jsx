import { useContext, useRef, useState } from "react";
import BackContext from "../../Contexts/BackContext";

const empty = {
    title: '',
    price: '',
    code: '',
    description: ''
};

function ProductEdit() {

    const { setCreateProductData } = useContext(BackContext);

    const [inputs, setInputs] = useState(empty);

    const handleInputs = (e, input) => setInputs(i => ({ ...i, [input]: e.target.value }));

    const edit = () => {
        setCreateProductData({...inputs, price: parseFloat(inputs.price)});
        setInputs(empty);
    }

    return (
        <div className="modal">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h2>Redaguoti produktą</h2>
                        <button type="button" className="close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="card mt-4">
                            <div className="card-body">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="form-group">
                                                <label className="fu gray">Pavadinimas:</label>
                                                <input type="text" className="form-control" value={inputs.title} onChange={e => handleInputs(e, 'title')} />
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="form-group">
                                                <label className="fu gray">Kaina:</label>
                                                <input type="text" className="form-control" value={inputs.price} onChange={e => handleInputs(e, 'price')} />
                                            </div>
                                        </div>
                                        <div className="col-8">
                                            <div className="form-group">
                                                <label className="fu gray">Kodas:</label>
                                                <input type="text" className="form-control" value={inputs.code} onChange={e => handleInputs(e, 'code')} />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group">
                                                <label className="fu gray">Aprašymas:</label>
                                                <textarea className="form-control" rows="3" value={inputs.description} onChange={e => handleInputs(e, 'description')}></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-outline-secondary fu up">Uždaryti</button>
                        <button type="button" className="btn btn-outline-primary fu up">Išsaugoti</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductEdit;