import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'

import { reduxCountersSlice } from './redux-counters.slice'

export const store = configureStore({
  reducer: {
    [reduxCountersSlice.name]: reduxCountersSlice.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch<AppDispatch>

// eslint-disable-next-line prettier/prettier
export const useAppSelector = useSelector as TypedUseSelectorHook<RootState>
