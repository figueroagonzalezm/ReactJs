# React Routing Project

## Project Overview

This React learning project demonstrates client-side routing using React Router v6. The project features a multi-page application with navigation between different views, dynamic route parameters, and programmatic navigation. It showcases how to build single-page applications (SPAs) with multiple routes and navigate between them without full page reloads.

#### This project was created following the [React Escentials](https://www.linkedin.com/learning/react-esencial-22877511/desplegar-tus-proyectos-de-forma-profesional-con-react?dApp=53239054&leis=LAA&u=2113185) course from LinkedIn

## Functionality

The application provides a complete routing system with the following features:
- Navigation bar with Home and About links
- Home page displaying a list of clickable products
- Product detail pages with dynamic URL parameters
- About page with programmatic navigation button
- Client-side routing without page reloads
- Active link styling with NavLink
- URL parameter extraction and display
- Content reuse across multiple pages

## Key React Router Concepts

### 1. **BrowserRouter**
- Wraps the entire application to enable routing
- Manages browser history and URL synchronization
- Provides routing context to all child components

### 2. **Routes and Route**
- `<Routes>` container for defining all application routes
- `<Route>` individual route definitions with path and element
- Path matching and component rendering

### 3. **Dynamic Route Parameters**
- URL parameters defined with `:paramName` syntax
- Capturing dynamic values from URLs
- Creating routes like `/producto/:nombreParam`

### 4. **useParams Hook**
- Extracting URL parameters in components
- Accessing dynamic route values
- Displaying parameter-based content

### 5. **Link and NavLink**
- `<Link>` for client-side navigation without page reload
- `<NavLink>` for navigation with active state styling
- Programmatic link generation with template literals

### 6. **useNavigate Hook**
- Programmatic navigation from event handlers
- Navigating to routes from button clicks
- Imperative navigation control

### 7. **Nested Components**
- Reusing components across different routes
- Component composition in routed views

## Project Files

### Core React Files

- **`src/main.jsx`** - Application entry point that mounts the root component and wraps app in `StrictMode`

- **`src/App.jsx`** - Root component that sets up BrowserRouter, defines all application routes with Routes/Route components, implements navigation bar with NavLink components for Home and About pages, and integrates Bootstrap for styling

- **`src/components/Home.jsx`** - Home page component that displays a product list, uses Link components to create dynamic links to product detail pages (`/product/${product.name}`), and demonstrates list rendering with routing

- **`src/components/Product.jsx`** - Product detail component that uses useParams hook to extract the `nombreParam` URL parameter and displays the product name from the URL

- **`src/components/About.jsx`** - About page component that demonstrates programmatic navigation using useNavigate hook, includes a button that navigates to home page on click, and reuses Content component multiple times

- **`src/components/Content.jsx`** - Reusable content component with Lorem Ipsum text, demonstrates component reuse across different routes (used in Home and About pages)

### Configuration Files

- **`vite.config.js`** - Vite build tool configuration
- **`eslint.config.js`** - ESLint linting rules configuration
- **`package.json`** - Project dependencies (includes react-router-dom and Bootstrap) and scripts

## Technology Stack

- **React 18** - UI library
- **React Router v6** - Client-side routing library
- **Vite** - Build tool and dev server with HMR (Hot Module Replacement)
- **Bootstrap 5** - CSS framework for navbar and styling
- **ESLint** - Code linting

## React Router API Usage

### Route Definition
```javascript
<Route path="/product/:nombreParam" element={<Product />} />
```

### Link Navigation
```javascript
<Link to={`/product/${product.name}`}>Product Name</Link>
```

### NavLink with Active State
```javascript
<NavLink to='/' className='nav-link'>Home</NavLink>
```

### Extract URL Parameters
```javascript
const params = useParams();
console.log(params.nombreParam);
```

### Programmatic Navigation
```javascript
const navigate = useNavigate();
navigate('/');
```

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Learning Outcomes

This project teaches:
- Setting up React Router v6 in a React application
- Defining routes with the Routes and Route components
- Creating navigation links with Link and NavLink
- Implementing dynamic routes with URL parameters
- Extracting route parameters with useParams hook
- Programmatic navigation with useNavigate hook
- Building multi-page SPAs without page reloads
- Active link styling for current route indication
- Creating nested routes and shared layouts
- Component reuse across different routes
- Integrating Bootstrap with React Router for styled navigation
- Best practices for client-side routing in React applications
