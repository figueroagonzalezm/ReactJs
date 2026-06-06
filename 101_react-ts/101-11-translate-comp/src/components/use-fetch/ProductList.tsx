import { useEffect, useState } from "react"
import type { Product } from ".";
import { ProductItem } from "./ProductItem";

export const ProductList = () => {
    const [count, setCount] = useState(0);
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const getData = async () => {
            const res = await fetch('https://dummyjson.com/products');
            const json = await res.json();
            setProducts(json.products)
            console.log(json);
        }
        getData();

        return () => {
            console.log("Cleanup before unmount or next run");
        }
    }, [count]) // use efect executes query retrieval every time the count changes


    return (
        <div>
            <span>Count value: {count}</span>
            <ul>

                {products.map(product =>
                    <ProductItem key={product.id} {...product} />
                )}
            </ul>
            <br />
            <button onClick={() => setCount(count + 1)}> increase count and retrieve data again</button>
        </div>
    )

}