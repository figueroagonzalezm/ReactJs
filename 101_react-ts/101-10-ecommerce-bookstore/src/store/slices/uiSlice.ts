import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '..'
import type { BookGenre, SortOption } from '../../types'

// UI state manages view preferences and transient UI elements
interface UIState {
  isCartDrawerOpen: boolean
  isLoading: boolean
  searchQuery: string
  sortOption: SortOption
  filters: {
    genres: BookGenre[]
    priceRange: {
      min: number
      max: number
    }
    inStockOnly: boolean
  }
}

const initialState: UIState = {
  isCartDrawerOpen: false,
  isLoading: false,
  searchQuery: '',
  sortOption: 'title-asc',
  filters: {
    genres: [],
    priceRange: {
      min: 0,
      max: 100,
    },
    inStockOnly: false,
  },
}

// UI slice manages UI-specific state like modals, drawers, loading states
const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    openCartDrawer: (state) => {
      state.isCartDrawerOpen = true
    },
    closeCartDrawer: (state) => {
      state.isCartDrawerOpen = false
    },
    toggleCartDrawer: (state) => {
      state.isCartDrawerOpen = !state.isCartDrawerOpen
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload
    },
    clearSearch: (state) => {
      state.searchQuery = ''
    },
    // Filter actions
    setGenreFilter: (state, action: PayloadAction<BookGenre[]>) => {
      state.filters.genres = action.payload
    },
    toggleGenre: (state, action: PayloadAction<BookGenre>) => {
      const genre = action.payload
      const index = state.filters.genres.indexOf(genre)
      if (index > -1) {
        state.filters.genres.splice(index, 1)
      } else {
        state.filters.genres.push(genre)
      }
    },
    setPriceRange: (state, action: PayloadAction<{ min: number; max: number }>) => {
      state.filters.priceRange = action.payload
    },
    setInStockOnly: (state, action: PayloadAction<boolean>) => {
      state.filters.inStockOnly = action.payload
    },
    clearFilters: (state) => {
      state.filters.genres = []
      state.filters.priceRange = { min: 0, max: 100 }
      state.filters.inStockOnly = false
    },
    // Sort action
    setSortOption: (state, action: PayloadAction<SortOption>) => {
      state.sortOption = action.payload
    },
  },
})

// Export actions
export const {
  openCartDrawer,
  closeCartDrawer,
  toggleCartDrawer,
  setLoading,
  setSearchQuery,
  clearSearch,
  setGenreFilter,
  toggleGenre,
  setPriceRange,
  setInStockOnly,
  clearFilters,
  setSortOption,
} = uiSlice.actions

// Selectors
export const selectIsCartDrawerOpen = (state: RootState) => state.ui.isCartDrawerOpen
export const selectIsLoading = (state: RootState) => state.ui.isLoading
export const selectSearchQuery = (state: RootState) => state.ui.searchQuery
export const selectSortOption = (state: RootState) => state.ui.sortOption
export const selectFilters = (state: RootState) => state.ui.filters
export const selectGenreFilters = (state: RootState) => state.ui.filters.genres
export const selectPriceRange = (state: RootState) => state.ui.filters.priceRange
export const selectInStockOnly = (state: RootState) => state.ui.filters.inStockOnly

// Export reducer
export default uiSlice.reducer
