import { FC } from 'react'

import {
  FastContextCountersState,
  useFastContextCounters,
} from '../fast-context-counters.context'

type IncrementButtonProps = {
  stateFieldName: keyof FastContextCountersState
}

export const IncrementButton: FC<IncrementButtonProps> = ({
  stateFieldName,
}) => {
  const { set, snapshot } = useFastContextCounters([stateFieldName])[
    stateFieldName
  ]

  return (
    <button
      className="rounded bg-orange-500 px-4 py-2 font-bold text-white hover:bg-orange-700"
      onClick={() => {
        set(snapshot + 1)
      }}
      type="button"
    >
      Increment {stateFieldName}
    </button>
  )
}
