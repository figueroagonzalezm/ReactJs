// Type definitions for the E-Commerce Bookstore

// Union types for book categorization
export type BookGenre =
  | 'Fiction'
  | 'Non-Fiction'
  | 'Mystery'
  | 'Science Fiction'
  | 'Fantasy'
  | 'Romance'
  | 'Thriller'
  | 'Biography'
  | 'History'
  | 'Self-Help'
  | 'Business'
  | 'Technology'

export type BookCategory =
  | 'Bestseller'
  | 'New Release'
  | 'Classic'
  | 'Award Winner'
  | 'Educational'
  | 'Young Adult'
  | 'Children'

// Book entity
export interface Book {
  id: string
  title: string
  author: string
  description: string
  price: number
  salePrice?: number // Optional discounted price
  genre: BookGenre
  categories: BookCategory[]
  coverImage: string
  stock: number
  isbn: string
  publisher: string
  publicationYear: number
}

// Cart item with embedded book data
export interface CartItem {
  book: Book
  quantity: number
}

// Filter state for product listing
export interface FilterOptions {
  genres: BookGenre[]
  priceRange: {
    min: number
    max: number
  }
  searchQuery: string
  inStockOnly: boolean
}

// Sort options as union type
export type SortOption =
  | 'price-asc'
  | 'price-desc'
  | 'title-asc'
  | 'title-desc'
  | 'year-newest'
  | 'year-oldest'

// View mode for product display
export type ViewMode = 'grid' | 'list'
