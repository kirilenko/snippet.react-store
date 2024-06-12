import { reduxCountersSlice, ReduxCountersState } from './redux-counters.slice'
import { useAppDispatch } from './store'

export const useReduxCountersAction = () => {
  const dispatch = useAppDispatch()
  const { actions } = reduxCountersSlice

  return {
    increase: (props: keyof ReduxCountersState) =>
      dispatch(actions.increment(props)),
  }
}
