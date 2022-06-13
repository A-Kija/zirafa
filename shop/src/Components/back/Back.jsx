import '../../bootstrap.css';
import '../../back.scss';
import BackContext from '../../Contexts/BackContext';
import NavBar from './NavBar';
import { useEffect, useState } from 'react';
import ProductsList from './ProductsList';
import axios from 'axios';
import ProductCreate from './ProductCreate';
import Message from './Message';
function Back() {

    const [products, setProducts] = useState(null);
    const [lastProductsUpdate, setLastProductsUpdate] = useState(Date.now());
    const [message, setMessage] = useState({show: false});

    const [createProductData, setCreateProductData] = useState(null);
    const [deleteProductData, setDeleteProductData] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:3003/admin/products')
            .then(res => setProducts(res.data));
    }, [lastProductsUpdate]);

    useEffect(() => {
        if (createProductData === null) return;
        axios.post('http://localhost:3003/admin/products', createProductData)
            .then(_ => {
                setLastProductsUpdate(Date.now());
                showMessage('success', 'Naujas produktas pridėtas');
            });
    }, [createProductData]);

    useEffect(() => {
        if (deleteProductData === null) return;
        axios.delete('http://localhost:3003/admin/products/' + deleteProductData.id)
            .then(_ => {
                setLastProductsUpdate(Date.now());
                showMessage('success', 'Produktas sėkmingai ištrintas');
            });
    }, [deleteProductData]);


    const showMessage = (type, text) => {
        setMessage({
            type,
            text,
            show: true
        });
        setInterval(() => setMessage({show: false}), 4000);
    }

    return (
        <BackContext.Provider value={{ 
            products, 
            setCreateProductData, 
            message,
            setDeleteProductData
            }}>
            <div className="container">
                <div className="row">
                    <NavBar></NavBar>
                    <ProductCreate></ProductCreate>
                    <ProductsList></ProductsList>
                </div>
            </div>
            <Message></Message>
        </BackContext.Provider>
    );
}

export default Back;