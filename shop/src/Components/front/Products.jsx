import { useContext } from "react";
import FrontContext from "../../Contexts/FrontContext";
import filterShow from "../../Functions/filterShow";
import Product from "./Product";

function Products() {

    const {products} = useContext(FrontContext);

    return (
        <div className="products">
            {
                products.map(p => filterShow(p.show) ? <Product key={p.id} product={p}></Product> : null)
            }
        </div>
    );
}

export default Products;