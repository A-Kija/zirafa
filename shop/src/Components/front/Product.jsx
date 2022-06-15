import { useState } from "react";

function Product({ product }) {

    const [count, setCount] = useState(1);

    const clickCount = e => {
        const count = parseInt(e.target.value);
        setCount(count > 0 ? count : 1);
    }

    return (
        <div className="product">
            <div className="product__bin">
                <div className="product__bin__top">
                    <h2>{product.title}</h2><i>{product.code}</i>
                </div>
                <div className="product__bin__mid">
                    <div className="product__bin__mid__img">
                        {
                            product.photo ? <img src={product.photo} alt={product.title} /> : <img src="http://localhost:3000/no-image.jpg" alt={product.title} />
                        }
                    </div>
                    <div className="product__bin__mid__desc">
                        <p>{product.description}</p>
                    </div>
                </div>
                <div className="product__bin__bottom">
                    <span>{product.price.toFixed(2)} EUR</span>
                    <div>
                        <input type="number" value={count} onChange={clickCount} />
                        <button>Pirkti</button>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default Product;