// REACT ROUTER IMPORTS:
// BrowserRouter: Provides routing context using HTML5 history API (clean URLs without #)
// Route: Defines a mapping between a URL path and a React component
// Routes: Container component that holds all Route definitions (replaces Switch in React Router v6)
// Link: Component for navigation without page reload (replaces <a> tags)
// NavLink: Like Link but with active state styling capabilities
import { BrowserRouter, Link, Route, Routes, NavLink } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Content from './components/Content'
import Product from './components/Product'
import 'bootstrap/dist/css/bootstrap.min.css';


import './App.css'

function App() {

  return (
    // BROWSERROUTER COMPONENT:
    // BrowserRouter must wrap your entire app to enable routing functionality.
    // It manages the browser's history stack and keeps the UI in sync with the URL.
    // Alternative routers: HashRouter (uses #/ in URL), MemoryRouter (for testing)
    <BrowserRouter>

      {/* NAVIGATION BAR:
          This nav section is OUTSIDE the Routes component, so it appears on all pages.
          Components outside Routes remain visible regardless of the current route. */}
      <nav className='navbar navbar-expand navbar-light bg-light'>
        <ul className='navbar-nav'>
          <li className="nav-item">
            {/* NAVLINK COMPONENT:
                NavLink is like Link but automatically applies styling to the active route.
                - 'to' prop: the destination path
                - 'className' prop: CSS classes to apply
                - Automatically gets 'active' class when the route matches
                - Prevents full page reload (client-side navigation)
                - Better than <a> tags because it doesn't cause page refresh */}
            <NavLink to='/' className='nav-link' > Home </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to='/about' className='nav-link'> About </NavLink>
          </li>
        </ul>
      </nav>

      <div className="container">
        {/* ROUTES COMPONENT:
            Routes (formerly Switch in React Router v5) acts as a container for all Route components.
            It renders the FIRST Route that matches the current URL.
            Only ONE route is rendered at a time (the first match). */}
        <Routes>
          {/* STATIC ROUTES:
              These routes have fixed paths without parameters */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/content" element={<Content />} />

          {/* DYNAMIC ROUTE WITH URL PARAMETERS:
              Para rutas dinámicas, se utiliza el símbolo ":" seguido del nombre del parámetro que queremos capturar.
              En este caso, "nombreParam" es el nombre del parámetro que se capturará de la URL.

              For dynamic routes, we use the ":" symbol followed by the parameter name we want to capture.
              In this case, "nombreParam" is the name of the parameter that will be captured from the URL.

              HOW IT WORKS:
              - Route definition: /product/:nombreParam
              - URL example: /product/Laptop
              - Extracted parameter: nombreParam = "Laptop"
              - Access in component: const params = useParams(); → params.nombreParam

              MULTIPLE PARAMETERS EXAMPLE:
              <Route path="/category/:categoryId/product/:productId" element={<Product />} />
              URL: /category/electronics/product/123
              Result: { categoryId: "electronics", productId: "123" }

              PARAMETER NAMING RULES:
              - Use descriptive names (id, userId, productName)
              - CamelCase convention for multi-word parameters
              - Must start with a letter */}
          <Route path='/product/:nombreParam' element={<Product />} />

        </Routes>
      </div>

    </BrowserRouter>
  )
}

export default App
