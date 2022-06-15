import { useEffect, useReducer } from 'react';
import FrontContext from '../../Contexts/FrontContext';
import '../../front.scss';
import productsReducer from '../../Reducers/productsReducer';
import Loader from './Loader';
import Products from './Products';
import TopBar from './TopBar';
import axios from 'axios';
import { getProductsFromServer } from '../../Actions/products';



function Front() {

  const [products, dp] = useReducer(productsReducer, null);

  useEffect(() => {
    axios.get('http://localhost:3003/products')
      .then(res => dp(getProductsFromServer(res.data))
      )
  }, []);

  return (
    <FrontContext.Provider value={{products}}>
      <div id="shop">
        <div className="bin">
          <TopBar></TopBar>
          {
            products !== null ? <Products></Products> : <Loader></Loader>
          }

        </div>
      </div>
    </FrontContext.Provider>
  );
}

export default Front;