import '../../front.scss';
import Products from './Products';
import TopBar from './TopBar';

function Front() {
  return (
    <div id="shop">
      <div className="bin">
        <TopBar></TopBar>
        <Products></Products>
      </div>
    </div>
  );
}

export default Front;