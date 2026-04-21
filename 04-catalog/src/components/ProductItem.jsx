

const ProductItem = ({ product }) => {
    return (
        <div className="card">
            <div className="item">
                <h2>{product.name}</h2>
                <strong> <p>Price: ${product.price.toFixed(2)}</p> </strong>
                <button>Comprar</button>
            </div>
        </div>
    );
}

export default ProductItem;
