# External Data and Context API Project

## Project Overview

This React learning project demonstrates advanced state management using the Context API, external data fetching, and building a functional shopping cart application. The project showcases how to avoid prop drilling by sharing state across multiple components, fetch data from external sources, and manage complex application state with multiple consumers.

#### This project was created following the [React Escentials](https://www.linkedin.com/learning/react-esencial-22877511/desplegar-tus-proyectos-de-forma-profesional-con-react?dApp=53239054&leis=LAA&u=2113185) course from LinkedIn

## Functionality

The application provides a complete shopping cart experience with the following features:
- Display a catalog of electronic products loaded from external JSON file
- Add products to shopping cart with "Comprar" (Buy) button
- View selected items in a persistent shopping cart sidebar
- Remove items from cart with "Remover" (Remove) button
- Real-time cart updates synchronized across components
- Product status management (selected/unselected)
- Filtered cart display showing only selected items
- Responsive two-column layout (products and cart)

## Key React Concepts

### 1. **Context API**
- Creating context with `createContext()`
- Context Provider pattern for sharing state
- Context Consumer with `useContext()` hook
- Avoiding prop drilling across component hierarchy

### 2. **State Management**
- Global state shared across multiple components
- State updates from different consumer components
- Immutable state updates with spread operator and map
- Status tracking for products (selected/unselected)

### 3. **Data Fetching**
- Fetching external JSON data with `fetch()` API
- Promise handling with `.then()` chains
- Error handling with `.catch()`
- Loading data on component mount

### 4. **useEffect Hook**
- Side effects for data fetching
- Empty dependency array for one-time execution
- Component lifecycle management

### 5. **useContext Hook**
- Consuming context values in functional components
- Accessing shared state and updater functions
- Multiple components consuming same context

### 6. **Array Methods**
- `.map()` for rendering and transforming arrays
- `.filter()` for conditional data display
- Immutable array updates with functional patterns

### 7. **Component Communication**
- Sibling component communication via shared context
- Updating shared state from multiple components
- Synchronized UI updates across component tree

## Project Files

### Core React Files

- **`src/main.jsx`** - Application entry point that mounts the root component, wraps app in `StrictMode`, and imports Bootstrap CSS for styling

- **`src/App.jsx`** - Root component that wraps ProductList and CartList with DataProvider to share context, demonstrates the provider pattern at the application level

- **`src/components/DataContext.jsx`** - Context definition and provider component that fetches products from external JSON, manages global state with useState, and provides data/setData to all consumers via Context.Provider

- **`src/components/ProductList.jsx`** - Product catalog component that consumes DataContext, displays all products in a grid layout, handles "Buy" button clicks to update product status to 'selected', and demonstrates useContext for state consumption

- **`src/components/CartList.jsx`** - Shopping cart component that consumes DataContext, filters products by 'selected' status, displays cart items with remove functionality, and updates product status to 'un-selected' when items are removed

- **`src/components/Product.jsx`** - Reusable product card component (alternative implementation, currently not used in favor of inline rendering in ProductList)

- **`src/components/CartItem.jsx`** - Cart item card component that receives product data and onClick handler as props, renders product details with a remove button

### Data Files

- **`public/products.json`** - External JSON file containing product data (id, name, price, description, status) that simulates an API response

### Configuration Files

- **`vite.config.js`** - Vite build tool configuration
- **`eslint.config.js`** - ESLint linting rules configuration
- **`package.json`** - Project dependencies (includes Bootstrap) and scripts

## Technology Stack

- **React 18** - UI library with Context API
- **Vite** - Build tool and dev server with HMR (Hot Module Replacement)
- **Bootstrap 5** - CSS framework for responsive layout and styling
- **ESLint** - Code linting

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
- Implementing the Context API for global state management
- Avoiding prop drilling with context providers and consumers
- Fetching external data with the Fetch API
- Using useEffect for side effects and data loading
- Using useContext to consume context in functional components
- Managing complex application state across multiple components
- Synchronizing state between sibling components
- Filtering and transforming data for conditional rendering
- Building a functional shopping cart with add/remove operations
- Immutable state updates with array methods (map, filter)
- Integrating third-party CSS frameworks (Bootstrap)
- Structuring larger React applications with multiple consumers
- Modern React patterns for state management without external libraries
