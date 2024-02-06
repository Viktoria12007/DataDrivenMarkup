import './ProductList.css';

export default function ProductList ({ products }) {
    return (
        <ul className="product-list">
            { products.map((product) => {
               return <li className="product-item" key={product.id}>
                        <img src={product.imageUrl} className="product-image" loading="lazy"/>
                        <div className="product-price-wrap">
                            <span className={`product-price ${product.discount && "product-price_discount"}`}>
                                {`${product.discount ? product.price - (product.price * product.discount) : product.price} ₽`}
                            </span>
                            {product.discount && <span className="product-old-price">{`${product.price} ₽`}</span>}
                        </div>
                        <h2 className="product-title">{product.title}</h2>
                      </li>
            })}
        </ul>
    )
}
