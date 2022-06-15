function Product({product}) {

    return (
        <div className="product">
            <div className="product__bin">
            {product.title}
            </div>
        </div>
    );
}

export default Product;