import { useAppSelector } from '@modules/redux-counters/store' // eslint-disable-line import/no-internal-modules
import { ReduxCountersState } from './redux-counters.slice'

export const useReduxCountersSelector = (
  stateFieldName: keyof ReduxCountersState,
) => useAppSelector((state) => state.reduxCountersSlice[stateFieldName])
