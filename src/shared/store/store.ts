import { useEffect, useState, useSyncExternalStore } from 'react'

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

type GetSnapshot<State extends S> = (state: State) => Snapshot<State>

type UseSnapshot<State extends S> = (
  getSnapshot: GetSnapshot<State>,
) => Snapshot<State>

// required React >= 18:
export const snapshotHookCreator = <State extends S>(
  store: Store<State>,
): UseSnapshot<State> => (getSnapshot) =>
  useSyncExternalStore(store.subscribe, () => getSnapshot(store.getState()))

// for React < 18:
export const snapshot17HookCreator = <State extends S>(
  store: Store<State>,
): UseSnapshot<State> => (getSnapshot) => {
  const [snapshot, setSnapshot] = useState<Snapshot<State>>(
    getSnapshot(store.getState()),
  )

  useEffect(
    () =>
      store.subscribe((currentState) => setSnapshot(getSnapshot(currentState))),
    [getSnapshot],
  )

  return snapshot
}
