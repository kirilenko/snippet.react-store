import { FC } from 'react'

import { State, useSnapshot17 } from '../store-counters.store'

type CountProps = {
  stateFieldName: keyof State
}

export const Count: FC<CountProps> = ({ stateFieldName }) => {
  const count = useSnapshot17(stateFieldName)

  // eslint-disable-next-line no-console
  console.log(
    '%c• StoreCounters.Count.render:',
    'color: yellow',
    stateFieldName,
  )

  return (
    <div className="m-4">
      {stateFieldName}: <span className="text-blue-500">{count}</span>
    </div>
  )
}
