# React Forms Project

## Project Overview

This React learning project demonstrates comprehensive form handling patterns including controlled components, form validation, error management, and event handling. The project features a user registration form that showcases best practices for managing form state, validating user input, and handling various form events in React applications.

#### This project was created following the [React Escentials](https://www.linkedin.com/learning/react-esencial-22877511/desplegar-tus-proyectos-de-forma-profesional-con-react?dApp=53239054&leis=LAA&u=2113185) course from LinkedIn

## Functionality

The application provides a complete registration form with the following features:
- Input fields for username, email, and password
- Real-time form data capture and state updates
- Form validation on submission
- Dynamic error messages for required fields
- Error clearing when user starts typing
- Event propagation control demonstrations
- Console logging for debugging form interactions
- Prevention of default form submission behavior

## Key React Concepts

### 1. **Controlled Components**
- Form inputs controlled by React state
- Two-way data binding with value and onChange
- Single source of truth for form data

### 2. **Form State Management**
- Multiple state objects for different concerns (data vs. errors)
- Dynamic state updates using computed property names
- Immutable state updates with spread operator
- Previous state preservation during updates

### 3. **Form Validation**
- Client-side validation on form submission
- Required field validation
- Dynamic error state management
- Conditional error message rendering

### 4. **Event Handling**
- Form submission with `preventDefault()`
- Input change events with event destructuring
- Multiple event types (onChange, onSubmit, onClick, onMouseOver)
- Event propagation control with `stopPropagation()`

### 5. **React Hooks**
- Multiple `useState` hooks for managing form state
- State updater functions with functional updates
- Proper state initialization with object structures

### 6. **Dynamic Rendering**
- Conditional rendering of error messages
- Dynamic className assignments
- Form field binding with name attributes

## Project Files

### Core React Files

- **`src/main.jsx`** - Application entry point that mounts the root component to the DOM using `createRoot` and wraps the app in `StrictMode`

- **`src/App.jsx`** - Root component that imports and renders the form component, serves as the main application container

- **`src/components/MyForm.jsx`** - Complete form component implementing controlled inputs, state management for form data and errors, validation logic, event handlers (handleChange, handleSubmit), error clearing on input, and event propagation demonstrations

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
- Building controlled form components in React
- Managing complex form state with multiple fields
- Implementing form validation patterns
- Handling form submission and preventing default behavior
- Displaying dynamic error messages
- Using event object destructuring for efficient updates
- Controlling event propagation in nested elements
- Clearing validation errors on user input
- Working with multiple event handlers on form elements
- Best practices for form accessibility (htmlFor, id, name attributes)
- Modern React form patterns without external libraries
