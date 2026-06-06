# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **learning project** for an e-commerce bookstore built with React 18+, TypeScript, Redux Toolkit, and React Router v6. The primary goal is to practice advanced React patterns and type-safe state management.

**Key characteristics:**
- Learning-focused code with educational comments explaining React patterns
- Uses React Compiler (enabled in Vite config)
- Feature-based development tracked in `docs/PROJECT.md`
- Mock data approach (no backend)

## Development Commands

```bash
# Start development server with HMR
npm run dev

# Build for production (TypeScript check + Vite build)
npm run build

# Run ESLint
npm run lint

# Preview production build
npm run preview
```

## Architecture

### State Management: Redux Toolkit

The app uses Redux Toolkit with a **3-slice architecture**:

1. **`booksSlice`** (`src/store/slices/booksSlice.ts`)
   - Manages book catalog data
   - Handles view mode (grid/list)
   - Initialized with mock data from `src/data/mockBooks.ts`

2. **`uiSlice`** (`src/store/slices/uiSlice.ts`)
   - Search query, filters, sorting
   - Cart drawer open/closed state
   - Loading states

3. **`cartSlice`** (planned for Feature 4-5)
   - Shopping cart items
   - localStorage persistence

**Type-safe Redux hooks:**
- Use `useAppDispatch` and `useAppSelector` from `src/hooks/redux.ts`
- Never use plain `useDispatch` or `useSelector`

**Redux patterns used:**
- Redux DevTools enabled in development
- Selectors defined in slice files using `createSelector` for memoization
- Actions and reducers use Redux Toolkit's Immer for immutable updates

### Routing Structure

React Router v6 with route constants in `src/constants/routes.ts`:

```typescript
ROUTES.HOME              // "/"
ROUTES.PRODUCT_DETAIL    // "/product/:id"
ROUTES.CART              // "/cart"
ROUTES.NOT_FOUND         // "*"
```

All pages wrapped in `<Layout>` component (header + footer).

### Component Organization

```
src/
  components/
    common/       # Reusable UI components (EmptyState, etc.)
    layout/       # Header, Footer, Layout wrapper
    product/      # Product-specific components (ProductCard, ProductList, ViewToggle)
  pages/          # Route-level page components
  hooks/          # Custom React hooks (centralized, not feature-based)
  store/          # Redux store, slices, and configuration
  data/           # Mock data files
  types/          # TypeScript type definitions
  constants/      # App-wide constants
```

### Type System

All types defined in `src/types/index.ts`:

- **Book interface**: Core data model with ISBN, author, stock, genres, categories
- **CartItem interface**: Embedded book approach (stores full Book object + quantity)
- **Union types**: `BookGenre`, `BookCategory`, `SortOption`, `ViewMode`
- **FilterOptions interface**: Multi-criteria filtering state

**Type casting pattern used:**
When assigning to union types from string literals, use `as` assertions:
```typescript
genre: 'Fiction' as BookGenre
categories: ['Bestseller'] as BookCategory[]
```

### Data Flow

**Component → Redux → Component:**
```typescript
// Read state
const books = useAppSelector(selectAllBooks)
const viewMode = useAppSelector(selectViewMode)

// Update state
const dispatch = useAppDispatch()
dispatch(setViewMode('grid'))
```

**Cart will use localStorage persistence** via custom middleware (Feature 5).

## Code Guidelines

### Comments for Learning

This project **requires educational comments** explaining React patterns. Add comments when:
- Setting up providers (Redux Provider, BrowserRouter)
- Using React hooks (useState, useEffect, custom hooks)
- Implementing Redux patterns (slices, selectors, actions)
- Using React Router features (routes, navigation, params)
- Applying component composition patterns
- Using TypeScript generics or complex type definitions

**Comment style:**
```typescript
// Controlled component pattern: receives state and callback from parent
// Component description: displays X and handles Y
{/* Conditional rendering: only shown when condition is true */}
```

Keep comments concise, focused on the "why" behind React patterns, not obvious code behavior.

### Component Patterns

**View mode variants:**
ProductCard adapts layout based on `viewMode` prop ('grid' | 'list'). CSS handles the layout differences using BEM modifiers: `.product-card--grid` and `.product-card--list`.

**Conditional rendering patterns used:**
- `{condition && <Component />}` for showing/hiding elements
- `{condition ? <A /> : <B />}` for either/or rendering
- Array `.map()` for lists with `key` prop

**Link components:**
Use React Router's `<Link>` component for navigation, not `<a>` tags. Enables client-side routing without page reloads.

### Styling Approach

- CSS files co-located with components
- BEM naming convention: `.block__element--modifier`
- Responsive design with mobile-first media queries
- No CSS-in-JS or styled-components

### File Creation

**Always prefer editing existing files over creating new ones** unless explicitly required for new features.

**When creating components:**
1. Create `.tsx` file with component
2. Create co-located `.css` file
3. Add educational comments
4. Export from parent directory if needed

## Development Workflow

**Feature development tracked in `docs/PROJECT.md`:**
- Current phase and completed features documented
- Each feature has checklist of types, components, Redux state, styling, and testing
- Session notes capture key decisions

**Before starting new features:**
1. Check `docs/PROJECT.md` for current phase
2. Review completed features and decisions
3. Follow checklist structure for new work

**When adding new Redux state:**
1. Define types in `src/types/index.ts` first
2. Create/update slice with actions, reducers, selectors
3. Add reducer to store in `src/store/index.ts`
4. Create type-safe hooks if needed

## Project Decisions

**CartItem design choice:**
Uses **embedded Book object approach** (CartItem contains full book data + quantity). This causes data duplication but simplifies selectors and provides better learning experience for Redux patterns.

**No checkout flow:**
Project scope excludes payment processing and order management. Cart features end at view/manage items.

**No user authentication:**
No login/signup. All state is local (Redux + localStorage).

**Mock data source:**
Books initialized from `src/data/mockBooks.ts` (25 books). No API calls or json-server.

## React Compiler

React Compiler is **enabled** in this project (see `vite.config.ts`). This impacts dev and build performance but provides automatic memoization.

**Implications:**
- Avoid manual `React.memo`, `useMemo`, `useCallback` unless profiling shows need
- Compiler optimizes re-renders automatically
- Component functions are automatically memoized

## Project Status

**Current Phase:** Feature 2 (Product Catalog Display) - In Progress

**Completed:**
- Phase 0: Foundation (Redux store, hooks, types)
- Feature 1: Basic Layout & Navigation (Header, Footer, routing)
- Feature 2: Product catalog with grid/list views (in progress)

**Next:**
- Feature 3: Product detail pages
- Feature 4: Add to cart
- Feature 5: Cart management with localStorage
- Feature 6: Search
- Feature 7: Filters
- Feature 8: Sorting

See `docs/PROJECT.md` for detailed feature checklist and session notes.
