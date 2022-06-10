function ProductLine({ product }) {

    return (
        <li className="list-group-item">
            <div className="product-line">

                <div className="product-line__content">
                    <div className="product-line__content__top">
                        <div className="product-line__content__top__title">
                            {product.title}
                        </div>
                        <div className="product-line__content__top__price">
                            {product.price}
                        </div>
                        <div className="product-line__content__top__code">
                            {product.code}
                        </div>
                    </div>
                    <div className="product-line__content__bottom">
                        {product.description}
                    </div>
                </div>
                <div className="product-line__buttons">

                </div>

            </div>

        </li>
    );
}

export default ProductLine;