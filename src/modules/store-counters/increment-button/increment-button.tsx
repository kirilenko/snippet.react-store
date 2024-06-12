import { FC } from 'react'

import { State, store } from '../store-counters.store'

type IncrementButtonProps = {
  stateFieldName: keyof State
}

export const IncrementButton: FC<IncrementButtonProps> = ({
  stateFieldName,
}) => (
  <button
    className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
    onClick={() => {
      const state = store.getState()
      store.setState({
        ...state,
        [stateFieldName]: state[stateFieldName] + 1,
      })
    }}
    type="button"
  >
    Increment {stateFieldName}
  </button>
)
