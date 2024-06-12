import { FC, useContext } from 'react'

import { ContextCountersContext } from '../context-counters.context'

type CountProps = {
  stateFieldName: 'value1' | 'value2'
}

export const Count: FC<CountProps> = ({ stateFieldName }) => {
  // eslint-disable-next-line no-console
  console.log(
    '%c• ContextCounters.Count.render:',
    'color: magenta',
    stateFieldName,
  )

  const count = useContext(ContextCountersContext)[stateFieldName]

  return (
    <div className="m-4">
      {stateFieldName}: <span className="text-blue-500">{count}</span>
    </div>
  )
}
