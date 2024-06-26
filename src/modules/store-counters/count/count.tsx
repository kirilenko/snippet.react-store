import { FC } from 'react'

import { State, useSnapshot } from '../store-counters.store'

type CountProps = {
  stateFieldName: keyof State
}

export const Count: FC<CountProps> = ({ stateFieldName }) => {
  console.log('%c• StoreCounters.Count.render:', 'color: green', stateFieldName) // eslint-disable-line no-console

  return (
    <div className="m-4">
      {stateFieldName}:{' '}
      <span className="text-blue-500">{useSnapshot(stateFieldName)}</span>
    </div>
  )
}
