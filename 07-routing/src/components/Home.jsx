// LINK COMPONENT:
// Link is the primary way to navigate between routes in React Router.
// It renders an <a> tag but intercepts clicks to prevent full page reload.
// This provides instant navigation without losing application state.
import { Link } from "react-router-dom";
import Content from "./Content"

const Home = () => {

  const products = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 30 },
  ];

  return (
    <>
      <h1>Home</h1>
      <Content />

      <h2>Products</h2>
      <ul className="list-group">
        {/* DYNAMIC LINKS WITH ROUTE PARAMETERS:
            This demonstrates creating dynamic links that include data in the URL.

            KEY CONCEPTS:
            - Template literals (`/product/${product.name}`) build dynamic URLs
            - Each product name becomes part of the URL path
            - Example URLs generated: "/product/Product 1", "/product/Product 2"
            - The URL parameter can be extracted in the Product component using useParams()

            LINK vs <a> TAG:
            - Link: Client-side navigation, no page reload, faster, preserves app state
            - <a>: Server-side navigation, full page reload, slower, loses app state

            THE 'to' PROP:
            - Accepts string paths: to="/about"
            - Can use template literals for dynamic paths: to={`/product/${id}`}
            - Can accept objects: to={{ pathname: '/about', search: '?id=123' }}

            ACCESSIBILITY:
            - Link renders as an <a> tag, so it's keyboard accessible
            - Screen readers recognize it as a navigation element
            - Right-click still works (open in new tab, copy link)

            PERFORMANCE:
            - React Router prefetches route components
            - No network request needed for navigation
            - Instant page transitions */}
        {products.map(product => (
          <Link
            key={product.id}
            to={`/product/${product.name}`}
            className="list-group-item list-group-item-action"
          >
            {product.name} - ${product.price}
          </Link>
        ))}
      </ul>

    </>

  )
}

export default Home