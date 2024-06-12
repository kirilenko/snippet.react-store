import { FC } from 'react'

import { useReduxCountersSelector } from '@modules/redux-counters/use.redux-counters.selector' // eslint-disable-line import/no-internal-modules

type CountProps = {
  stateFieldName: 'value1' | 'value2'
}

export const Count: FC<CountProps> = ({ stateFieldName }) => {
  console.log('%c• ReduxCounters.Count.render:', 'color: aqua', stateFieldName) // eslint-disable-line no-console

  const count = useReduxCountersSelector(stateFieldName)

  return (
    <div className="m-4">
      {stateFieldName}: <span className="text-blue-500">{count}</span>
    </div>
  )
}
