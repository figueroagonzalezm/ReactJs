// USEPARAMS HOOK:
// useParams is a React Router hook that extracts URL parameters from the current route.
// It returns an object containing all route parameters as key-value pairs.
import { useParams } from 'react-router-dom';

const Product = () => {

    // EXTRACTING URL PARAMETERS:
    // El hook useParams nos permite acceder a los parámetros de la URL. En este caso, estamos accediendo
    // al parámetro "nombreParam" que definimos en la ruta "/product/:nombreParam". Este parámetro se puede
    // utilizar para mostrar información específica del producto en función del valor que se capture de la URL.
    //
    // The useParams hook allows us to access URL parameters. In this case, we're accessing the "nombreParam"
    // parameter that we defined in the route "/product/:nombreParam". This parameter can be used to display
    // specific product information based on the value captured from the URL.
    //
    // HOW IT WORKS:
    // 1. Route is defined in App.jsx as: <Route path="/product/:nombreParam" element={<Product />} />
    // 2. User clicks link: /product/Product 1
    // 3. useParams() extracts: { nombreParam: "Product 1" }
    // 4. Access the value: params.nombreParam
    //
    // PARAMETER NAMING:
    // - The parameter name (nombreParam) must match the route definition
    // - Route: /product/:nombreParam → Access: params.nombreParam
    // - Route: /product/:id → Access: params.id
    // - Route: /user/:userId/post/:postId → Access: params.userId, params.postId
    //
    // MULTIPLE PARAMETERS EXAMPLE:
    // Route: <Route path="/category/:categoryId/product/:productId" />
    // URL: /category/electronics/product/123
    // Result: { categoryId: "electronics", productId: "123" }
    //
    // IMPORTANT NOTES:
    // - All parameters are returned as strings (even if they look like numbers)
    // - URL encoding/decoding is handled automatically (spaces become %20)
    // - Parameters are undefined if the route doesn't match
    // - To convert to number: Number(params.id) or parseInt(params.id)
    const params = useParams();



    return (
        <div>
            {/* DISPLAYING URL PARAMETERS:
                El valor de "params.nombreParam" se mostrará en el encabezado h1, lo que permitirá
                identificar qué producto se está visualizando en la página.

                The value of "params.nombreParam" will be displayed in the h1 heading, which allows
                identification of which product is being viewed on the page.

                Example: URL "/product/Product 2" displays "Product 2" as the heading.

                COMMON PATTERNS:
                - Display product name: {params.nombreParam}
                - Fetch data by ID: fetch(`/api/products/${params.id}`)
                - Conditional rendering: {params.category === 'electronics' && <Badge />}
                - Build breadcrumbs: Home > {params.category} > {params.productName} */}
            <h1> { params.nombreParam } </h1>
            <p>This is the product page.</p>
        </div>
    )
}

export default Product