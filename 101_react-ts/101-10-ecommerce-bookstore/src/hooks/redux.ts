import { useDispatch, useSelector } from 'react-redux'
import type { AppDispatch, RootState } from '../store'

// Type-safe version of useDispatch hook
// Use this throughout the app instead of plain useDispatch
// Ensures dispatched actions are properly typed
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()

// Type-safe version of useSelector hook
// Use this throughout the app instead of plain useSelector
// Provides autocomplete for state and ensures type safety
export const useAppSelector = useSelector.withTypes<RootState>()
