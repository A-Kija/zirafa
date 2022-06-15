function Product({ product }) {

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
                    <span>{product.price}</span>
                    <button>Pirkti</button>
                </div>
            </div>
        </div>
    );
}

export default Product;