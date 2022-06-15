import { useContext } from "react";
import FrontContext from "../../Contexts/FrontContext";
import Product from "./Product";

function Products() {

    const {products} = useContext(FrontContext);

    return (
        <div className="products">
            {
                products.map(p => <Product key={p.id} product={p}></Product>)
            }
        </div>
    );
}

export default Products;