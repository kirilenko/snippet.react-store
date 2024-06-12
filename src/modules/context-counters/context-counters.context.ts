import { createContext } from 'react'

export type ContextCountersContextValue = {
  setValue1: (value: number | ((prev: number) => number)) => void
  setValue2: (value: number | ((prev: number) => number)) => void
  value1: number
  value2: number
}

export const ContextCountersContext = createContext<ContextCountersContextValue>(
  {
    setValue1: () => {},
    setValue2: () => {},
    value1: 0,
    value2: 0,
  },
)
