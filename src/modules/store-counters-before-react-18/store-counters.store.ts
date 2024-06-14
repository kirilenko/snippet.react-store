import { createStore, snapshot17HookCreator } from '@shared/store'

export type State = {
  value1: number
  value2: number
}

const initialState: State = {
  value1: 0,
  value2: 0,
}

export const store = createStore<State>(initialState)

export const useSnapshot17 = snapshot17HookCreator<State>(store)
