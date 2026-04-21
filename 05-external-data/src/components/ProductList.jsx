import { useContext } from 'react'
import { DataContext } from './DataContext'
import Product from './Product'

const ProductList = () => {

    // CONSUMIR CONTEXTO: useContext permite acceder a los valores del contexto
    // sin necesidad de prop drilling (pasar props a través de múltiples niveles)
    const { data, setData } = useContext(DataContext)

    const handleClick = (event) => {
        const id = event.id;
        setData(prevData => prevData.map(item =>
            item.id === id ? { ...item, status: 'selected' } : item
        ));
    }

    return (
        <div className="col-md-9">
            <h2>products</h2>
            <div className="row">

                {data.map(product => (

                    <div className="col-md-4 mb-4" key={product.id}>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{product.name}</h5>
                                <p className="card-text">${product.price}</p>
                                <button href="#" className="btn btn-primary"
                                    onClick={() => { handleClick(product) }}
                                >Comprar</button>
                            </div>
                        </div>
                    </div>

                ))}
            </div>
        </div>
    )
}

export default ProductList
