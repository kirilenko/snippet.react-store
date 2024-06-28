import { FC } from 'react'

import {
  FastContextCountersState,
  useFastContextCounters,
} from '../fast-context-counters.context'

type CountProps = {
  stateFieldName: keyof FastContextCountersState
}

export const Count: FC<CountProps> = ({ stateFieldName }) => {
  // eslint-disable-next-line no-console
  console.log(
    '%c• FastContextCounters.Count.render:',
    'color: orange',
    stateFieldName,
  )

  const { snapshot: count } = useFastContextCounters([stateFieldName])[
    stateFieldName
  ]

  return (
    <div className="m-4">
      {stateFieldName}: <span className="text-blue-500">{count}</span>
    </div>
  )
}
