# Architecture & Folder Structure

## Folder Structure

```
src/
├── main.tsx                 # Application entry point
├── App.tsx                  # Root component with Router
├── index.css                # Global styles
│
├── types/                   # TypeScript type definitions
│   ├── book.types.ts        # Book, BookGenre, BookCategory
│   ├── cart.types.ts        # CartItem
│   └── filter.types.ts      # FilterOptions, SortOption, ViewMode
│
├── store/                   # Redux store configuration
│   ├── index.ts             # Store setup and exports
│   ├── hooks.ts             # Typed useAppDispatch, useAppSelector
│   └── slices/              # Redux slices
│       ├── booksSlice.ts    # Books data and operations
│       ├── cartSlice.ts     # Shopping cart with localStorage
│       └── uiSlice.ts       # Filters, search, sort, view mode
│
├── data/                    # Mock data and constants
│   ├── mockBooks.ts         # Sample book data
│   └── constants.ts         # Genre lists, category lists
│
├── utils/                   # Utility functions
│   ├── formatters.ts        # Price formatting, date formatting
│   ├── filters.ts           # Filter logic functions
│   └── sorting.ts           # Sort logic functions
│
├── components/              # React components
│   ├── layout/              # Layout components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Navigation.tsx
│   │
│   ├── products/            # Product-related components
│   │   ├── ProductCard.tsx
│   │   ├── ProductList.tsx
│   │   ├── ProductDetail.tsx
│   │   ├── SearchBar.tsx
│   │   ├── FilterPanel.tsx
│   │   └── SortDropdown.tsx
│   │
│   ├── cart/                # Cart-related components
│   │   ├── CartItem.tsx
│   │   ├── CartSummary.tsx
│   │   ├── CartDrawer.tsx
│   │   └── CartBadge.tsx
│   │
│   └── common/              # Reusable/shared components
│       ├── Button.tsx
│       ├── Input.tsx
│       └── Loading.tsx
│
└── pages/                   # Page components (routes)
    ├── HomePage.tsx         # Main shop/listing page
    ├── ProductDetailPage.tsx # Individual product page
    ├── CartPage.tsx         # Full cart page
    └── NotFoundPage.tsx     # 404 page
```

## Redux Store Structure

### Slices

#### 1. Books Slice (`booksSlice.ts`)
**State:**
```typescript
{
  books: Book[],
  loading: boolean,
  error: string | null
}
```
**Responsibilities:**
- Store all available books
- Handle book data loading
- Provide selectors for filtered/sorted books

#### 2. Cart Slice (`cartSlice.ts`)
**State:**
```typescript
{
  items: CartItem[],
  lastUpdated: number
}
```
**Responsibilities:**
- Manage cart items (add, remove, update quantity)
- Persist to localStorage
- Calculate totals and subtotals
- Restore from localStorage on load

#### 3. UI Slice (`uiSlice.ts`)
**State:**
```typescript
{
  filters: FilterOptions,
  sortOption: SortOption,
  viewMode: ViewMode,
  searchQuery: string,
  isCartDrawerOpen: boolean
}
```
**Responsibilities:**
- Manage UI state (filters, search, sort, view)
- Handle cart drawer visibility
- Track user preferences

## Routing Structure

```
/ (HomePage)
  - Main product listing
  - Shows all books with filters/search/sort

/product/:id (ProductDetailPage)
  - Individual book details
  - Add to cart functionality

/cart (CartPage)
  - Full cart view
  - Adjust quantities, remove items
  - View totals

* (NotFoundPage)
  - 404 page for invalid routes
```

## Data Flow

1. **Books Data:** Loaded into Redux store on app initialization
2. **Filtering/Sorting:** UI slice stores filter state → selectors compute filtered books
3. **Cart Operations:** Dispatch actions → cartSlice updates → localStorage syncs
4. **Page Navigation:** React Router handles routing → pages connect to Redux

## Component Organization Strategy

**Feature-based within component types:**
- Group by component role (layout, products, cart, common)
- Related components stay together
- Easy to locate and maintain

## Data Source Strategy

**Mock data approach:**
- Hardcoded book array in `data/mockBooks.ts`
- Loaded into Redux store on initialization
- Simulates real API structure
- Easy to replace with real API later

---

**Created:** 2026-05-08
**Status:** Proposed structure for Phase 1
