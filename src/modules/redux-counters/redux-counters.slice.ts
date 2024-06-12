import { CaseReducer, createSlice, PayloadAction } from '@reduxjs/toolkit'

export type ReduxCountersState = {
  value1: number
  value2: number
}

const initialState: ReduxCountersState = {
  value1: 0,
  value2: 0,
}

const increment: CaseReducer<
  ReduxCountersState,
  PayloadAction<keyof ReduxCountersState>
> = (state, action) => ({
  ...state,
  [action.payload]: state[action.payload] + 1,
})

export const reduxCountersSlice = createSlice({
  initialState,
  name: 'reduxCountersSlice',
  reducers: {
    increment,
  },
})
