import { useEffect, useReducer } from 'react';
import FrontContext from '../../Contexts/FrontContext';
import '../../front.scss';
import productsReducer from '../../Reducers/productsReducer';
import Loader from './Loader';
import Products from './Products';
import TopBar from './TopBar';
import axios from 'axios';
import { getProductsFromServer } from '../../Actions/products';
import Bar from './Bar';
import { useRef } from 'react';





function Front() {

  const min = useRef();
  const max = useRef();
  const [products, dp] = useReducer(productsReducer, null);

  useEffect(() => {
    axios.get('http://localhost:3003/products')
      .then(res => {
        const pr = [...res.data];
        pr.sort((a, b) => a.price - b.price);
        min.current = Math.floor(pr.shift().price);
        max.current = Math.ceil(pr.pop().price);
        dp(getProductsFromServer(res.data));
      })
  }, []);

  return (
    <FrontContext.Provider value={
      {
        products,
        dp,
        min: min.current,
        max: max.current
      }
    }>
      <div id="shop">
        <div className="bin">
          <TopBar></TopBar>
          <Bar></Bar>
          {
            products !== null ? <Products></Products> : <Loader></Loader>
          }

        </div>
      </div>
    </FrontContext.Provider>
  );
}

export default Front;