import { useCallback, useEffect, useState, useSyncExternalStore } from 'react'

type S = Record<string, unknown>

type Listener<State extends S> = (state: State) => void

type Store<State extends S> = {
  getState: () => State
  setState: (newState: State) => void
  subscribe: (listener: Listener<State>) => () => void
}

export const createStore = <State extends S>(
  initialState: State,
): Store<State> => {
  let currentState = initialState

  const listeners = new Set<Listener<State>>()

  return {
    getState: (): State => currentState,
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

type Snapshot<State extends S> = State[keyof State]

type UseSnapshot<State extends S> = (
  stateFieldName: keyof State,
) => Snapshot<State>

// required React >= 18:
export const snapshotHookCreator = <State extends S>(
  store: Store<State>,
): UseSnapshot<State> => (stateFieldName) => {
  const selector = useCallback((state: State) => state[stateFieldName], [
    stateFieldName,
  ])

  return useSyncExternalStore(store.subscribe, () => selector(store.getState()))
}

// for React < 18:
export const snapshot17HookCreator = <State extends S>(
  store: Store<State>,
): UseSnapshot<State> => (stateFieldName) => {
  const selector = useCallback((state: State) => state[stateFieldName], [
    stateFieldName,
  ])

  const [snapshot, setSnapshot] = useState<Snapshot<State>>(
    selector(store.getState()),
  )

  useEffect(() => store.subscribe((state) => setSnapshot(selector(state))), [
    selector,
  ])

  return snapshot
}
