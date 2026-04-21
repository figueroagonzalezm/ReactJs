import { useContext } from "react";
import { DataContext } from "./DataContext";
import CartItem from "./CartItem";

const CartList = () => {

    // CONSUMIR CONTEXTO: Accediendo al mismo contexto que ProductList
    // Ambos componentes comparten el estado 'data' sin pasar props desde App.jsx
    const { data, setData } = useContext(DataContext);

    const removeItem = (product) => {
        const id = product.id;
        setData(prevData => prevData.map(item =>
            item.id === id ? { ...item, status: 'un-selected' } : item
        ));
    }

    const filteredData = data.filter(product => product.status === 'selected');

    return (
        <div className="col-md-3 border-start border-4 border-secondary">
            <div className="sticky-top " >
                <h2>Shopping Cart</h2>
                {filteredData.map(product => (
                    <CartItem key={product.id} product={product}
                        onClick={() => { removeItem(product) }}
                    />
                ))}
            </div>
        </div>
    )
}

export default CartList