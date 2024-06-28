import {
  createContext,
  FC,
  PropsWithChildren,
  useCallback,
  useContext,
  useRef,
  useSyncExternalStore,
} from 'react'

export const createFastContext = <State extends Record<string, unknown>>(
  initialState: State,
) => {
  type FastContextValue = {
    get: () => State
    set: (value: Partial<State>) => void
    subscribe: (callback: () => void) => () => void
  }

  const useFastContextValue = (): FastContextValue => {
    const stateRef = useRef<State>(initialState)

    const get = useCallback(() => stateRef.current, [])

    const subscribers = useRef(new Set<() => void>())

    const set = useCallback((value: Partial<State>) => {
      stateRef.current = { ...stateRef.current, ...value }
      subscribers.current.forEach((callback) => callback())
    }, [])

    const subscribe = useCallback((callback: () => void) => {
      subscribers.current.add(callback)
      return () => subscribers.current.delete(callback)
    }, [])

    return {
      get,
      set,
      subscribe,
    }
  }

  const FastContext = createContext<FastContextValue | null>(null)

  const FastContextProvider: FC<PropsWithChildren> = ({ children }) => (
    <FastContext.Provider value={useFastContextValue()}>
      {children}
    </FastContext.Provider>
  )

  type UseFastContextResult = Record<
    keyof State,
    { snapshot: State[keyof State]; set: (value: State[keyof State]) => void }
  >

  type UseFastContext = (fieldNames: (keyof State)[]) => UseFastContextResult

  const useFastContext: UseFastContext = (fieldNames) => {
    const fastContext = useContext(FastContext)
    if (!fastContext) {
      throw new Error('Fast context not found')
    }

    const result = {} as UseFastContextResult

    // eslint-disable-next-line no-restricted-syntax
    for (const fieldName of fieldNames) {
      result[fieldName] = {
        set: (value: State[keyof State]) =>
          fastContext.set({ [fieldName]: value } as Partial<State>),

        // eslint-disable-next-line react-hooks/rules-of-hooks
        snapshot: useSyncExternalStore(
          fastContext.subscribe,
          () => fastContext.get()[fieldName],
          () => initialState[fieldName],
        ),
      }
    }

    return result
  }

  return {
    FastContextProvider,
    useFastContext,
  }
}
