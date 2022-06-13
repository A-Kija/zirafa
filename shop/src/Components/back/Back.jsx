import '../../bootstrap.css';
import '../../back.scss';
import BackContext from '../../Contexts/BackContext';
import NavBar from './NavBar';
import { useEffect, useState } from 'react';
import ProductsList from './ProductsList';
import axios from 'axios';
import ProductCreate from './ProductCreate';
function Back() {

    const [products, setProducts] = useState(null);
    const [lastProductsUpdate, setLastProductsUpdate] = useState(Date.now());

    const [createProductData, setCreateProductData] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:3003/admin/products')
            .then(res => setProducts(res.data));
    }, [lastProductsUpdate]);

    useEffect(() => {
        if (createProductData === null) return;
        axios.post('http://localhost:3003/admin/products', createProductData)
            .then(_ => setLastProductsUpdate(Date.now()));
    }, [createProductData]);

    return (
        <BackContext.Provider value={{ products, setCreateProductData }}>
            <div className="container">
                <div className="row">
                    <NavBar></NavBar>
                    <ProductCreate></ProductCreate>
                    <ProductsList></ProductsList>
                </div>
            </div>
        </BackContext.Provider>
    );
}

export default Back;