# E-Commerce Bookstore Project

## Project Overview

### Objective
Build a fully functional e-commerce bookstore application using React and TypeScript to practice advanced concepts including:
- Building dynamic and flexible components with React and TypeScript
- Type-safe state management with Redux
- Complex component patterns and interactions
- Real-world application architecture

### Learning Goals
- Practice TypeScript interfaces, enums, and union types
- Implement Redux for global state management in a type-safe manner
- Build reusable, type-safe React components
- Handle complex state interactions (cart, filters, search, sorting)
- Create a production-ready application structure

## Technology Stack
- **Frontend Framework:** React 18+ with TypeScript
- **State Management:** Redux Toolkit
- **Routing:** React Router v6
- **Styling:** TBD
- **Build Tool:** Vite

## Code Guidelines

### Comments for Learning
Since this is a learning project, add comments to explain key React concepts when:
- Setting up providers (Redux Provider, Router)
- Using React hooks (useState, useEffect, custom hooks)
- Implementing Redux patterns (slices, selectors, actions)
- Using React Router features (routes, navigation, params)
- Applying component composition patterns
- Implementing TypeScript generic types or complex type definitions

Keep comments concise and focused on the "why" behind React-specific patterns, not obvious code behavior.

## Type Definitions

### Enums

```typescript
export enum BookGenre {
  Fiction = 'Fiction',
  NonFiction = 'Non-Fiction',
  Mystery = 'Mystery',
  ScienceFiction = 'Science Fiction',
  Fantasy = 'Fantasy',
  Romance = 'Romance',
  Thriller = 'Thriller',
  Biography = 'Biography',
  History = 'History',
  SelfHelp = 'Self-Help',
  Business = 'Business',
  Technology = 'Technology',
}

export enum BookCategory {
  Bestseller = 'Bestseller',
  NewRelease = 'New Release',
  Classic = 'Classic',
  Award = 'Award Winner',
  Educational = 'Educational',
  YoungAdult = 'Young Adult',
  Children = 'Children',
}
```

### Interfaces

```typescript
// Book entity
export interface Book {
  id: string;
  title: string;
  author: string;
  description: string;
  price: number;
  salePrice?: number; // Optional discounted price
  genre: BookGenre;
  categories: BookCategory[];
  coverImage: string;
  stock: number;
  isbn: string;
  publisher: string;
  publicationYear: number;
}

// Cart item with embedded book data (Approach B - Full book object + quantity)
export interface CartItem {
  book: Book;
  quantity: number;
}

// Filter state for product listing
export interface FilterOptions {
  genres: BookGenre[];
  priceRange: {
    min: number;
    max: number;
  };
  searchQuery: string;
  inStockOnly: boolean;
}

// Sort options as union type
export type SortOption =
  | 'price-asc'
  | 'price-desc'
  | 'title-asc'
  | 'title-desc'
  | 'year-newest'
  | 'year-oldest';

// View mode for product display
export type ViewMode = 'grid' | 'list';
```

## Features

### Core Features
- [x] Product listing page with grid/list view toggle
- [x] Individual product detail pages
- [x] Search functionality
- [x] Category and price range filters
- [x] Multiple sorting options (price, title, publication year)
- [ ] ~~User reviews/ratings~~ (Excluded from scope)

### Cart Functionality
- [x] Add items to cart
- [x] Remove items from cart
- [x] Adjust item quantities
- [x] Persist cart data using localStorage
- [x] Display cart total and subtotal
- [ ] ~~Checkout flow~~ (Excluded from scope)

### State Management
- **Choice:** Redux Toolkit for global state management
- **Rationale:** Practice structured, scalable state management with full TypeScript support

## Design Decisions

### CartItem Structure
**Decision:** Use embedded Book object approach (Approach B)
- CartItem contains full book data plus quantity
- **Pros:** Simpler selectors, no lookups needed, better learning experience
- **Cons:** Data duplication, but acceptable for this project scope

### Product Type
**Decision:** Bookstore specialization
- Focus on book-specific properties (ISBN, author, publisher, publication year)
- Allows for domain-specific features and realistic data modeling

## Project Checklist

### Phase 0: Foundation ✅
- [x] Initialize project with Vite + React + TypeScript
- [x] Install dependencies (Redux Toolkit, React Router, etc.)
- [x] Create folder structure
- [x] Define TypeScript interfaces and types
- [ ] Choose and set up styling solution
- [x] Set up Redux Provider in main.tsx
- [x] Set up React Router in App.tsx
- [x] Configure Redux store with DevTools
- [x] Write type-safe Redux hooks (useAppDispatch, useAppSelector)

---

### Feature 1: Basic Layout & Navigation ✅
**Goal:** App shell with header, footer, and routing foundation

#### Types & Constants
- [x] Define route constants

#### Redux/State
- [x] Create UI slice (for cart drawer state, loading states)

#### Mock Data
- [ ] Create minimal mock book data (3-5 books for testing) - *Deferred to Feature 2*

#### Utilities
- [x] Create price formatting utility (already existed)

#### Components
- [x] Header component with logo
- [x] Footer component  
- [x] Layout wrapper component

#### Pages/Routing
- [x] Set up route configuration
- [x] Create Home/Shop page (empty container)
- [x] Create 404 page

#### Styling
- [x] Style Header, Footer
- [x] Make layout responsive

#### Testing
- [x] Test navigation between pages
- [x] Test 404 page

---

### Feature 2: Product Catalog Display ✅
**Goal:** Display books in grid/list view with view mode toggle

#### Redux/State
- [x] Create books slice (state, actions, reducers)
- [x] Add view mode state to books slice
- [x] Create selector to get all books
- [x] Create selector to get view mode
- [x] Add books reducer to store

#### Mock Data
- [x] Create mock book data (25 books with variety)

#### Components
- [x] ProductCard component (grid variant)
- [x] ProductCard component (list variant)  
- [x] ProductList container component
- [x] ViewToggle button component
- [x] EmptyState component

#### Pages/Routing
- [x] Complete Home/Shop page with ProductList

#### Styling
- [x] Style ProductCard (grid and list)
- [x] Style ProductList container
- [x] Style ViewToggle
- [x] Add responsive grid/list layouts
- [x] Add hover effects

#### Testing
- [x] Test grid view display
- [x] Test list view display
- [x] Test view toggle switching
- [x] Test empty state

---

### Feature 3: Product Details ✅
**Goal:** View individual book details and navigate to/from detail page

#### Redux/State
- [x] Create selector to find book by ID

#### Components
- [x] ProductDetail component (includes BookInfo, StockIndicator, BackButton inline)

#### Pages/Routing
- [x] Create ProductDetail page route (/product/:id)
- [x] Add link from ProductCard to detail page

#### Styling
- [x] Style ProductDetail page layout
- [x] Style book information display
- [x] Make detail page responsive

#### Testing
- [x] Test navigation to detail page
- [x] Test book not found scenario
- [x] Test back navigation

---

### Feature 4: Shopping Cart - Add Items ✅
**Goal:** Add books to cart and display cart badge

#### Redux/State
- [x] Create cart slice (state structure)
- [x] Add addToCart action and reducer
- [x] Create selector for cart items count
- [x] Create selector for cart total

#### Components
- [x] AddToCartButton component
- [x] CartBadge component (in Header)

#### Integration
- [x] Add AddToCartButton to ProductCard
- [x] Add AddToCartButton to ProductDetail
- [x] Connect CartBadge to cart count

#### Styling
- [x] Style AddToCartButton
- [x] Style CartBadge

#### Testing
- [x] Test add to cart from ProductCard
- [x] Test add to cart from ProductDetail
- [x] Test cart badge updates
- [x] Test adding same book multiple times

---

### Feature 5: Shopping Cart - View & Manage ✅
**Goal:** View cart contents, adjust quantities, remove items

#### Redux/State
- [x] Add removeFromCart action and reducer
- [x] Add updateQuantity action and reducer
- [x] Add clearCart action and reducer
- [x] Add cart drawer open/close to UI slice
- [x] Create selector for cart items
- [x] Add localStorage persistence middleware

#### Utilities
- [x] Create cart total calculation utility (selector in cartSlice)

#### Components
- [x] CartDrawer/Modal component
- [x] CartItem component
- [x] CartSummary component
- [x] QuantitySelector component
- [x] EmptyCart component

#### Integration
- [x] Connect CartBadge to open drawer
- [x] Connect CartDrawer to cart state
- [x] Connect CartItem to update/remove actions

#### Styling
- [x] Style CartDrawer/Modal
- [x] Style CartItem
- [x] Style CartSummary
- [x] Style QuantitySelector
- [x] Add drawer animations

#### Testing
- [x] Test open/close cart drawer
- [x] Test remove item from cart
- [x] Test quantity increment/decrement
- [x] Test quantity direct input
- [x] Test stock validation
- [x] Test cart totals calculation
- [x] Test empty cart state
- [x] Test localStorage persistence
- [x] Test clear cart

---

### Feature 6: Search ✅
**Goal:** Search books by title, author, or description

#### Redux/State
- [x] Add search query to UI slice
- [x] Create selector for filtered books (by search)

#### Utilities
- [x] Create search filter utility function (implemented in selector)

#### Components
- [x] SearchBar component
- [x] SearchResultsCount component (integrated in Home subtitle)
- [x] NoResults component (using EmptyState)

#### Integration
- [x] Add SearchBar to Header/Shop page
- [x] Connect ProductList to filtered books
- [x] Show results count
- [x] Show no results state

#### Styling
- [x] Style SearchBar
- [x] Style results count display
- [x] Style no results state

#### Testing
- [x] Test search by title
- [x] Test search by author
- [x] Test search by description
- [x] Test search with no results
- [x] Test clear search
- [x] Test search with special characters

---

### Feature 7: Filters ✅
**Goal:** Filter by genre, price range, and stock availability

#### Redux/State
- [x] Add filter options to UI slice (genres, priceRange, inStockOnly)
- [x] Create selector for filtered books (search + filters)

#### Utilities
- [x] Create filter logic utility functions (implemented in selector)
- [x] Create genre list constant
- [x] Create category list constant (deferred - not needed yet)

#### Components
- [x] FilterPanel component
- [x] GenreFilter component (multi-select)
- [x] PriceRangeFilter component
- [x] InStockFilter component (checkbox)
- [x] ActiveFilters component (filter chips)
- [x] ClearFilters button component (integrated in ActiveFilters)

#### Integration
- [x] Add FilterPanel to Shop page
- [x] Connect filters to UI slice
- [x] Connect ProductList to filtered books
- [x] Show active filters as chips

#### Styling
- [x] Style FilterPanel
- [x] Style filter controls
- [x] Style active filter chips
- [x] Make filters responsive (mobile drawer)

#### Testing
- [x] Test single genre filter
- [x] Test multiple genre filters
- [x] Test price range filter
- [x] Test in-stock filter
- [x] Test combining filters
- [x] Test clear individual filter
- [x] Test clear all filters
- [x] Test filters with search

---

### Feature 8: Sorting ✅
**Goal:** Sort books by price, title, publication year

#### Redux/State
- [x] Add sort option to UI slice
- [x] Create selector for sorted books (search + filters + sort)

#### Utilities
- [x] Create sorting utility functions (implemented in selector)

#### Components
- [x] SortDropdown component

#### Integration
- [x] Add SortDropdown to Shop page
- [x] Connect to UI slice
- [x] Connect ProductList to sorted books

#### Styling
- [x] Style SortDropdown

#### Testing
- [x] Test sort by price ascending
- [x] Test sort by price descending
- [x] Test sort by title A-Z
- [x] Test sort by title Z-A
- [x] Test sort by year newest
- [x] Test sort by year oldest
- [x] Test sort with filters and search

---

### Phase 9: Polish & Optimization
- [ ] Add loading states
- [ ] Add error boundaries
- [ ] Add error handling
- [ ] Accessibility audit (keyboard nav, ARIA)
- [ ] Performance optimization (React.memo, useMemo)
- [ ] Cross-browser testing
- [ ] Mobile responsiveness final pass
- [ ] Code review and refactoring

### Phase 10: Documentation
- [ ] Write README with setup instructions
- [ ] Document component props
- [ ] Add learning-focused code comments
- [ ] Create architecture diagram (optional)
- [ ] Deploy application (optional)

## Architecture Decisions (To Be Defined)

### Redux Store Structure
- **Slices:** TBD
- **Middleware:** TBD
- **Persistence:** localStorage for cart

### Component Organization
- **Strategy:** TBD (feature-based vs. type-based folders)

### Routing Structure
- **Routes:** TBD
- **Route protection:** None (no authentication)

### Data Source
- **Strategy:** TBD (mock JSON, hardcoded, json-server)

## Notes & Learnings

### Session 1 (2026-05-08)
- Defined project scope and core features
- Designed TypeScript interfaces with enums for type safety
- Chose Redux for state management practice
- Decided on embedded book approach for CartItem
- Excluded checkout logic and user ratings from scope
- Installed dependencies: Redux Toolkit, React Redux, React Router
- Created complete folder structure with feature-based organization
- Implemented all Redux slices:
  - booksSlice: Book data management with CRUD operations
  - cartSlice: Shopping cart with localStorage persistence and quantity validation
  - uiSlice: Filters, search, sort, view mode, and cart drawer state
- Created type-safe Redux hooks (useAppDispatch, useAppSelector)
- Configured Redux store with DevTools support
- Changed BookGenre and BookCategory from enums to union types

**Key Decisions:**
- Redux store structure: 3 slices (books, cart, ui)
- Component organization: Feature-based within type folders
- Data source: Mock data in TypeScript files
- Routing: 4 main routes (/, /product/:id, /cart, /404)

---

### Session 2 (2026-05-11)
- Implemented Phase 0 Foundation:
  - Created TypeScript types (Book, CartItem, FilterOptions, SortOption, ViewMode)
  - Set up Redux store with DevTools
  - Created type-safe Redux hooks (useAppDispatch, useAppSelector)
  - Added Redux Provider to main.tsx
- Implemented Feature 1 (Basic Layout & Navigation):
  - Created route constants
  - Created UI slice for cart drawer and loading states
  - Built Header, Footer, Layout components with styling
  - Created Home and NotFound pages
  - Set up complete routing in App.tsx
- Started Feature 2 (Product Catalog Display):
  - Created books slice with view mode state
  - Added selectors for books and view mode
  - Integrated books reducer into store

**Next Steps:**
1. Create mock book data (25 books)
2. Build ProductCard component (grid/list variants)
3. Build ProductList and ViewToggle components
4. Connect to Redux and display books

---

### Session 3 (2026-05-12)
- Completed Feature 2 (Product Catalog Display):
  - Created mock book data with 25 diverse books (src/data/mockBooks.ts)
  - Built ProductCard component with grid/list view variants
  - Created ViewToggle component with SVG icons
  - Built ProductList container using .map() pattern
  - Created EmptyState component for no-results UI
  - Updated Home page to connect to Redux (useAppSelector, useAppDispatch)
  - Added learning comments throughout components
  - Created formatPrice utility (src/utils/formatPrice.ts)
  - Styled all components with responsive layouts and hover effects
- Created CLAUDE.md documentation for future sessions
- Organized hooks in centralized src/hooks/ folder

**Key Decisions:**
- Centralized hooks approach: All custom hooks in src/hooks/ folder
- Mock books initialized directly in booksSlice initialState
- BEM naming convention for CSS
- Educational comments added per PROJECT.md guidelines

**Next Steps:**
1. Feature 3: Product detail pages with routing
2. Add selector to find book by ID
3. Create ProductDetail page component

---

### Session 4 (2026-05-13)
- Completed Feature 3 (Product Details):
  - ProductDetail page component with full book information
  - Book-by-ID selector (already existed in booksSlice)
  - Integrated ProductDetail route into App.tsx
  - Back navigation and not-found handling
  - Responsive styling with mobile-first approach
  - ProductCard already had Link navigation set up
- Completed Feature 4 (Shopping Cart - Add Items):
  - Created cartSlice with addToCart action and reducer
  - Implemented cart selectors (selectCartItems, selectCartItemsCount, selectCartTotal)
  - Built AddToCartButton component with success feedback animation
  - Created CartBadge component with item count display
  - Integrated AddToCartButton into ProductCard (secondary variant) and ProductDetail (primary, full width)
  - Added CartBadge to Header
  - Cart enforces stock limits when adding items

**Key Decisions:**
- ProductDetail component combines BookInfo, StockIndicator, and BackButton inline (no separate components needed)
- AddToCartButton uses local state for temporary success feedback (not Redux)
- AddToCartButton stops event propagation to prevent card click when inside Link
- CartBadge uses animated pop effect when count increases
- Cart uses embedded Book approach as planned (CartItem = Book + quantity)

**Next Steps:**
1. Feature 6: Search functionality
2. Feature 7: Filters (genre, price range, stock)
3. Feature 8: Sorting

---

### Session 5 (2026-06-05)
- Completed Feature 5 (Shopping Cart - View & Manage):
  - All Redux actions already existed (removeFromCart, updateQuantity, clearCart)
  - Cart drawer state already in uiSlice
  - localStorage persistence middleware already configured
  - Built QuantitySelector component with increment/decrement and direct input
  - Built CartItem component with quantity controls and remove button
  - Built CartSummary component with totals and clear cart
  - Built EmptyCart component with continue shopping link
  - Updated CartDrawer to integrate all new components
  - Updated CartBadge from Link to button with openCartDrawer dispatch
  - Added CartDrawer to App.tsx for overlay rendering
  - Added Escape key handler and body scroll prevention
  - Fully responsive with mobile-optimized layouts

**Key Decisions:**
- CartBadge opens drawer instead of navigating to cart page
- CartDrawer uses slide-in animation from right with backdrop overlay
- QuantitySelector validates input on blur and Enter key
- CartItem displays full book info with link to detail page
- Sale prices displayed with strikethrough original price

- Completed Feature 6 (Search):
  - Added searchQuery state to uiSlice with setSearchQuery and clearSearch actions
  - Created selectFilteredBooks memoized selector using createSelector
  - Built SearchBar component with real-time search and clear button
  - Updated Home page to use filtered books and display results count
  - Search filters by title, author, and description (case-insensitive)
  - Empty state shows "No results found" when search returns nothing
  - SearchBar placed at top of Home page above header

**Key Decisions:**
- Real-time search: dispatches on every keystroke for immediate feedback
- Memoized selector prevents unnecessary re-renders when unrelated state changes
- Results count integrated into Home subtitle (no separate component)
- No results uses existing EmptyState component with search-specific message
- Search icon on left, clear button on right (only shown when typing)

- Completed Feature 7 (Filters):
  - Added filter state to uiSlice (genres array, priceRange object, inStockOnly boolean)
  - Updated selectFilteredBooks to combine search + all filters
  - Created ALL_GENRES constant in constants/genres.ts
  - Built GenreFilter with multi-select checkboxes using toggleGenre action
  - Built PriceRangeFilter with dual range sliders (min/max)
  - Built InStockFilter with single checkbox
  - Built ActiveFilters showing removable filter chips
  - Built FilterPanel combining all filter components
  - Added sidebar layout to Home page with sticky positioning
  - Filters work in combination with search
  - Price range applies to sale price when available

**Key Decisions:**
- Filter logic centralized in memoized selector for performance
- Price range slider applies on mouse up (not real-time) for better UX
- Active filters shown as blue chips with remove buttons
- Clear All button in ActiveFilters header
- Sidebar sticky on desktop, full-width on mobile/tablet
- Filter state persists during navigation (in Redux, not localStorage)

- Completed Feature 8 (Sorting):
  - Added sortOption state to uiSlice with default 'title-asc'
  - Updated selectFilteredBooks to apply sorting after filtering
  - Built SortDropdown component with 6 sort options
  - Added SortDropdown to Home page controls (next to ViewToggle)
  - Sort applies to sale price when available (consistent with filters)
  - Sorting uses localeCompare for proper string comparison

**Key Decisions:**
- Default sort is title A-Z for predictable initial display
- Sort dropdown shows user-friendly labels (e.g., "Price: Low to High")
- Sorting happens in selector for centralized logic and memoization
- Sort controls grouped with view toggle in controls section
- Mobile: sort dropdown stacks vertically below title on small screens

---

**Last Updated:** 2026-06-05
**Current Phase:** Features 5-8 complete (cart, search, filters, sorting)
