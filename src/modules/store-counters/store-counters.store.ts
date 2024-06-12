import { useSyncExternalStore } from 'react'

type Listener<State extends Record<string, unknown>> = (state: State) => void

type Store<State extends Record<string, unknown>> = {
  getState: () => State
  setState: (newState: State) => void
  subscribe: (listener: Listener<State>) => () => boolean
}

const createStore = <State extends Record<string, unknown>>(
  initialState: State,
): Store<State> => {
  let currentState = initialState

  const listeners = new Set<Listener<State>>()

  return {
    getState: () => currentState,
    setState: (newState) => {
      currentState = newState
      listeners.forEach((listener) => listener(currentState))
    },
    subscribe: (listener) => {
      listeners.add(listener)
      return () => listeners.delete(listener)
    },
  }
}

export type State = {
  value1: number
  value2: number
}

const initialState: State = {
  value1: 0,
  value2: 0,
}

export const store = createStore<State>(initialState)

type UseStoreSnapshot<S extends Record<string, unknown>> = (
  getSnapshot: (state: S) => S[keyof S],
) => S[keyof S]

export const useStoreSnapshot: UseStoreSnapshot<State> = (getSnapshot) =>
  useSyncExternalStore(store.subscribe, () => getSnapshot(store.getState()))
