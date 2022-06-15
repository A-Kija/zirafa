import { useReducer } from 'react';
import FrontContext from '../../Contexts/FrontContext';
import '../../front.scss';
import productsReducer from '../../Reducers/productsReducer';
import Loader from './Loader';
import Products from './Products';
import TopBar from './TopBar';



function Front() {

  const [products, dp] = useReducer(productsReducer, null);
  return (
    <FrontContext.Provider value={{}}>
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