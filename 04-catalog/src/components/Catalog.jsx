import ProductItem from "./ProductItem";

const Catalog = () => {

    const products = [
        { id: 1, name: 'Camiseta', price: 29.99 },
        { id: 2, name: 'Pantalon', price: 49.99 },
        { id: 3, name: 'Zapatos', price: 19.99 },
    ];

    return (
        <>
            <h2>Products Catalog</h2>
            {
                products.length === 0 ? (
                    <p>No products available.</p>
                ) : (

                    <div className="products">
                        {products.map(product => (
                            <ProductItem key={product.id} product={product} />
                        ))}
                    </div>
                )
            }
        </>
    );
}

export default Catalog;