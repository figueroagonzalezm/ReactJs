import { useContext } from "react";
import { DataContext } from "./DataContext";


const Product = ({ product }) => {

    return (
        <>
            <div className="col-md-4 mb-4">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{product.name}</h5>
                        <p className="card-text">${product.price}</p>
                        <a href="#" className="btn btn-primary">Comprar</a>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Product;