import { FC } from 'react'

import { ReduxCountersState } from '@modules/redux-counters/redux-counters.slice' // eslint-disable-line import/no-internal-modules
import { useReduxCountersAction } from '@modules/redux-counters/use.redux-counters.action' // eslint-disable-line import/no-internal-modules

type IncrementButtonProps = {
  stateFieldName: keyof ReduxCountersState
}

export const IncrementButton: FC<IncrementButtonProps> = ({
  stateFieldName,
}) => {
  const { increase } = useReduxCountersAction()

  return (
    <button
      className="rounded bg-cyan-500 px-4 py-2 font-bold text-white hover:bg-cyan-700"
      onClick={() => {
        increase(stateFieldName)
      }}
      type="button"
    >
      Increment {stateFieldName}
    </button>
  )
}
