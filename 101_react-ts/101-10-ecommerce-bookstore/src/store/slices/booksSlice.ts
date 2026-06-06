import { createSlice, type PayloadAction, createSelector } from '@reduxjs/toolkit'
import type { RootState } from '..'
import type { Book } from '../../types'
import { mockBooks } from '../../data/mockBooks'
import { selectSearchQuery, selectFilters, selectSortOption } from './uiSlice'

interface BooksState {
  books: Book[]
  viewMode: 'grid' | 'list'
}

// Initialize Redux state with mock books data
const initialState: BooksState = {
  books: mockBooks,
  viewMode: 'grid',
}

// Books slice manages the catalog of books and view mode
const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    // Set the entire book catalog (used on initial load)
    setBooks: (state, action: PayloadAction<Book[]>) => {
      state.books = action.payload
    },
    // Toggle between grid and list view
    setViewMode: (state, action: PayloadAction<'grid' | 'list'>) => {
      state.viewMode = action.payload
    },
    toggleViewMode: (state) => {
      state.viewMode = state.viewMode === 'grid' ? 'list' : 'grid'
    },
  },
})

// Export actions
export const { setBooks, setViewMode, toggleViewMode } = booksSlice.actions

// Selectors
export const selectAllBooks = (state: RootState) => state.books.books
export const selectViewMode = (state: RootState) => state.books.viewMode
export const selectBookById = (state: RootState, bookId: string) =>
  state.books.books.find((book) => book.id === bookId)

// Memoized selector for filtered and sorted books
// Combines search, filters, and sorting - only recalculates when dependencies change
export const selectFilteredBooks = createSelector(
  [selectAllBooks, selectSearchQuery, selectFilters, selectSortOption],
  (books, searchQuery, filters, sortOption) => {
    let filteredBooks = [...books]

    // Apply search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      filteredBooks = filteredBooks.filter(
        (book) =>
          book.title.toLowerCase().includes(query) ||
          book.author.toLowerCase().includes(query) ||
          book.description.toLowerCase().includes(query)
      )
    }

    // Apply genre filter
    if (filters.genres.length > 0) {
      filteredBooks = filteredBooks.filter((book) =>
        filters.genres.includes(book.genre)
      )
    }

    // Apply price range filter
    filteredBooks = filteredBooks.filter((book) => {
      const price = book.salePrice || book.price
      return price >= filters.priceRange.min && price <= filters.priceRange.max
    })

    // Apply in-stock filter
    if (filters.inStockOnly) {
      filteredBooks = filteredBooks.filter((book) => book.stock > 0)
    }

    // Apply sorting
    switch (sortOption) {
      case 'price-asc':
        filteredBooks.sort((a, b) => {
          const priceA = a.salePrice || a.price
          const priceB = b.salePrice || b.price
          return priceA - priceB
        })
        break
      case 'price-desc':
        filteredBooks.sort((a, b) => {
          const priceA = a.salePrice || a.price
          const priceB = b.salePrice || b.price
          return priceB - priceA
        })
        break
      case 'title-asc':
        filteredBooks.sort((a, b) => a.title.localeCompare(b.title))
        break
      case 'title-desc':
        filteredBooks.sort((a, b) => b.title.localeCompare(a.title))
        break
      case 'year-newest':
        filteredBooks.sort((a, b) => b.publicationYear - a.publicationYear)
        break
      case 'year-oldest':
        filteredBooks.sort((a, b) => a.publicationYear - b.publicationYear)
        break
      default:
        break
    }

    return filteredBooks
  }
)

// Export reducer
export default booksSlice.reducer
