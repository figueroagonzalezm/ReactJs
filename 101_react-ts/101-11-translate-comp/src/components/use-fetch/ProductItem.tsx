import type { Product } from ".";



export const ProductItem = ({title, description}:Product) =>{

    return (
        <li>{title} -- {description}</li>
    );
    
}