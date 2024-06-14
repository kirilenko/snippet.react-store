import { createStore, snapshotHookCreator } from '@shared/store'

export type State = {
  value1: number
  value2: number
}

const initialState: State = {
  value1: 0,
  value2: 0,
}

export const store = createStore<State>(initialState)

export const useSnapshot = snapshotHookCreator<State>(store)
