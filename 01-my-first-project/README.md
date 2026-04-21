# My First React Project

## Project Overview

This is a foundational React learning project that demonstrates core React concepts including component creation, state management, props, and event handling. The project features an interactive counter application built with React and Vite.

#### This project was created following the [React Escentials](https://www.linkedin.com/learning/react-esencial-22877511/desplegar-tus-proyectos-de-forma-profesional-con-react?dApp=53239054&leis=LAA&u=2113185) course from LinkedIn


## Functionality

The application provides a simple counter interface with the following features:
- Display a numeric counter starting at 0
- Increment button to increase the counter value
- Decrement button to decrease the counter value
- Real-time UI updates reflecting state changes

## Key React Concepts

### 1. **Component Architecture**
- Functional components using modern React syntax
- Component composition and reusability
- Separation of concerns with dedicated component files

### 2. **React Hooks**
- `useState` hook for managing component state
- State updater functions with functional updates (`prevState` pattern)

### 3. **Props**
- Passing data from parent to child components
- Props destructuring for cleaner code

### 4. **Event Handling**
- onClick event handlers for button interactions
- Event handler functions defined within components

### 5. **JSX**
- JSX syntax for component rendering
- Embedding JavaScript expressions in JSX
- Fragment usage (`<>...</>`)

## Project Files

### Core React Files

- **`src/main.jsx`** - Application entry point that mounts the root component to the DOM using `createRoot` and wraps the app in `StrictMode`

- **`src/App.jsx`** - Root component that imports and renders child components, serves as the main application container

- **`src/components/Contador.jsx`** - Interactive counter component implementing state management with `useState`, increment/decrement functionality, and event handlers

- **`src/components/MyButton.jsx`** - Reusable button component demonstrating props usage by accepting and rendering text content (currently commented out in App.jsx)

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
- Setting up a React project with Vite
- Creating and organizing React components
- Managing local component state
- Handling user interactions
- Component communication via props
- Modern React best practices (functional components, hooks)
