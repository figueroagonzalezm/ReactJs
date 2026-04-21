# UI Styles Project

## Project Overview

This React learning project demonstrates different approaches to styling React components. The project features a book catalog that showcases two primary styling methods: inline styles and external CSS files. It provides a practical comparison of styling techniques and helps understand when to use each approach in React applications.

#### This project was created following the [React Escentials](https://www.linkedin.com/learning/react-esencial-22877511/desplegar-tus-proyectos-de-forma-profesional-con-react?dApp=53239054&leis=LAA&u=2113185) course from LinkedIn

## Functionality

The application provides a book catalog display with the following features:
- Display a grid of classic literature books with titles and publication years
- Responsive flexbox layout for book cards
- Styled book cards with borders, backgrounds, and spacing
- CSS-based styling for book card components
- Inline styles for container layout

## Key React Concepts

### 1. **Inline Styles**
- JavaScript object syntax for styles
- CamelCase property names (flexWrap instead of flex-wrap)
- Dynamic styling capabilities
- Component-scoped styling approach

### 2. **External CSS Files**
- Importing CSS files into components
- Using className attribute (not class)
- Traditional CSS syntax support
- Global CSS scope

### 3. **Styling Approaches Comparison**
- Inline styles for simple, dynamic layouts
- External CSS for complex styling with pseudo-classes
- Trade-offs between different styling methods

### 4. **CSS Features in React**
- Flexbox layouts for responsive design
- CSS custom properties (CSS variables) in index.css
- Nested selectors and descendant selectors
- Pseudo-classes and state-based styling
- Media queries for responsive design

### 5. **Component Organization**
- Keeping component-specific styles in component folders
- Organizing CSS files alongside JSX files
- Global styles in root-level CSS files

## Styling Approaches Demonstrated

### Inline Styles (Catalog.jsx)
```javascript
style={{
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px'
}}
```
**Use for:** Simple, dynamic styles that need JavaScript values

### External CSS (Book.jsx + Book.css)
```javascript
import './Book.css'
<div className="item">
```
**Use for:** Complex styling with pseudo-classes, animations, and media queries

## Project Files

### Core React Files

- **`src/main.jsx`** - Application entry point that mounts the root component, wraps app in `StrictMode`, and imports global styles (index.css)

- **`src/App.jsx`** - Root component that imports global App.css styles and renders the Catalog component, demonstrates importing CSS files in React

- **`src/components/Catalog.jsx`** - Container component that manages book data array and demonstrates **inline styling** using JavaScript objects for flexbox layout (display, flexWrap, gap properties)

- **`src/components/Book/Book.jsx`** - Book card component that demonstrates **external CSS styling** by importing Book.css and using className attribute to apply styles

### Style Files

- **`src/index.css`** - Global styles including CSS custom properties (CSS variables) for theming, root element styling, dark mode support with @media (prefers-color-scheme), and base typography styles

- **`src/App.css`** - Application-level styles with nested CSS syntax, advanced selectors, pseudo-classes (&:hover, &:focus-visible), transforms and animations, and responsive media queries

- **`src/components/Book/Book.css`** - Component-specific styles for book cards including .item class with border, background, padding, flexbox layout for internal elements, and descendant selectors (.item h2, .item span)

### Configuration Files

- **`vite.config.js`** - Vite build tool configuration
- **`eslint.config.js`** - ESLint linting rules configuration
- **`package.json`** - Project dependencies and scripts

## Technology Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server with HMR (Hot Module Replacement)
- **CSS3** - Styling with modern features (custom properties, flexbox, nested selectors)
- **ESLint** - Code linting

## Styling Methods Comparison

| Feature | Inline Styles | External CSS |
|---------|--------------|--------------|
| Syntax | JavaScript objects | Traditional CSS |
| Property Names | camelCase | kebab-case |
| Pseudo-classes | ❌ Not supported | ✅ Supported |
| Media Queries | ❌ Not supported | ✅ Supported |
| Animations | ❌ Not supported | ✅ Supported |
| Performance | Slower (recalculated) | Faster (cached) |
| Scope | Component-scoped | Global |
| Dynamic Values | ✅ Easy | ⚠️ Requires CSS variables |
| Best For | Simple, dynamic styles | Complex, static styles |

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
- Two primary approaches to styling React components
- When to use inline styles vs external CSS files
- How to import and apply CSS in React components
- Difference between 'className' and 'class' attributes
- Writing inline styles as JavaScript objects with camelCase properties
- Organizing component-specific CSS files in component folders
- Using CSS custom properties (variables) for theming
- Implementing responsive layouts with Flexbox
- Managing global vs component-specific styles
- Trade-offs between different styling approaches
- Modern CSS features (nested selectors, custom properties, dark mode)
- Best practices for styling React applications
