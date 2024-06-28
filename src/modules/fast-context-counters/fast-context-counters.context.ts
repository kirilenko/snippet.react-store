import { createFastContext } from '@shared/fast-context'

export type FastContextCountersState = {
  value1: number
  value2: number
}

export const {
  FastContextProvider: FastContextCountersProvider,
  useFastContext: useFastContextCounters,
} = createFastContext<FastContextCountersState>({
  value1: 0,
  value2: 0,
})
