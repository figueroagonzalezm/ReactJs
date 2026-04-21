# Product Catalog Project

## Project Overview

This React learning project demonstrates list rendering, data mapping, and component composition patterns. The project features a product catalog interface that showcases how to render dynamic lists of data, use keys for efficient rendering, implement conditional rendering, and structure reusable card components for displaying product information.

#### This project was created following the [React Escentials](https://www.linkedin.com/learning/react-esencial-22877511/desplegar-tus-proyectos-de-forma-profesional-con-react?dApp=53239054&leis=LAA&u=2113185) course from LinkedIn

## Functionality

The application provides a product catalog display with the following features:
- Display a list of products with name and price
- Product cards with consistent styling
- Buy button for each product
- Conditional rendering based on product availability
- Empty state message when no products exist
- Price formatting with two decimal places
- Responsive grid layout for product display

## Key React Concepts

### 1. **List Rendering**
- Using the `.map()` method to render arrays of data
- Unique `key` props for list items (using product id)
- Transforming data arrays into React elements

### 2. **Conditional Rendering**
- Ternary operator for conditional display
- Empty state handling
- Fallback UI when data is unavailable

### 3. **Component Composition**
- Parent component (Catalog) managing data
- Child component (ProductItem) for individual items
- Separation of concerns between list container and list items

### 4. **Props**
- Passing complex objects as props
- Props destructuring for cleaner code
- Accessing nested object properties

### 5. **Data Structures**
- Working with arrays of objects
- Object property access and manipulation
- Data-driven UI rendering

### 6. **JavaScript Methods in JSX**
- Using `.length` for conditional logic
- `toFixed()` for number formatting
- Array iteration with `.map()`

## Project Files

### Core React Files

- **`src/main.jsx`** - Application entry point that mounts the root component to the DOM using `createRoot` and wraps the app in `StrictMode`

- **`src/App.jsx`** - Root component that imports and renders the Catalog component, serves as the main application container

- **`src/components/Catalog.jsx`** - Container component that manages the products array, implements conditional rendering for empty states, and maps product data to ProductItem components with proper key assignment

- **`src/components/ProductItem.jsx`** - Presentational component that receives a product object as props and renders a product card with name, formatted price, and purchase button

### Configuration Files

- **`vite.config.js`** - Vite build tool configuration
- **`eslint.config.js`** - ESLint linting rules configuration
- **`package.json`** - Project dependencies and scripts

## Technology Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server with HMR (Hot Module Replacement)
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
- Rendering lists of data with the map() method
- Using unique keys for list items to optimize rendering
- Implementing conditional rendering with ternary operators
- Creating reusable presentational components
- Passing object props to child components
- Destructuring props for cleaner component code
- Formatting numbers for currency display
- Handling empty states gracefully
- Separating data management from presentation
- Building card-based UI layouts
- Modern React patterns for data-driven interfaces
