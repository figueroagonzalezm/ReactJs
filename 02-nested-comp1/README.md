# Nested Components Project

## Project Overview

This React learning project demonstrates advanced component composition, parent-child communication, and callback patterns. The project features an interactive travel destination search interface that showcases how data flows between nested components and how child components can communicate back to parent components.

#### This project was created following the [React Escentials](https://www.linkedin.com/learning/react-esencial-22877511/desplegar-tus-proyectos-de-forma-profesional-con-react?dApp=53239054&leis=LAA&u=2113185) course from LinkedIn

## Functionality

The application provides an interactive message display with the following features:
- Display a dynamic message that changes based on user interaction
- "Search a destination" button that updates the message with a travel prompt
- "Callback" button that demonstrates child-to-parent data communication
- Visual emoji display for enhanced UI
- Real-time message updates based on button clicks

## Key React Concepts

### 1. **Nested Component Architecture**
- Hierarchical component structure with parent-child relationships
- Component composition with multiple child components
- Props passing down the component tree

### 2. **React Hooks**
- `useState` hook for managing dynamic message state
- `useCallback` hook for memoizing callback functions and optimizing performance
- Dependency arrays to control hook behavior

### 3. **Props and Data Flow**
- Passing primitive data (strings) as props
- Passing event handlers as props
- Unidirectional data flow from parent to child

### 4. **Callback Pattern**
- Child-to-parent communication using callback functions
- Passing data from child component back to parent
- Event handlers that accept parameters from child components

### 5. **Event Handling**
- Custom onClick handlers passed as props
- Inline arrow functions for parameter passing
- Multiple button handlers with different behaviors

### 6. **Performance Optimization**
- `useCallback` for preventing unnecessary re-renders
- Memoization of callback functions with dependency arrays

## Project Files

### Core React Files

- **`src/main.jsx`** - Application entry point that mounts the root component to the DOM using `createRoot` and wraps the app in `StrictMode`

- **`src/App.jsx`** - Parent component managing application state, defining callback handlers, and orchestrating child components. Demonstrates useState and useCallback hooks for state management and performance optimization

- **`src/components/MyButton.jsx`** - Reusable button component that accepts text and onClick props. Demonstrates child-to-parent communication by passing local data through the callback function

- **`src/components/MyEmoji.jsx`** - Simple presentational component that renders an emoji prop, demonstrating basic prop passing and component composition

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
- Creating nested component hierarchies
- Implementing parent-child communication patterns
- Using callback functions to pass data from child to parent
- Optimizing component performance with useCallback
- Managing state in parent components
- Composing multiple child components
- Handling events across component boundaries
- Modern React best practices (hooks, memoization, component composition)
