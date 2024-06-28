import { FC } from 'react'

import { Count } from './count'
import { FastContextCountersProvider } from './fast-context-counters.context'
import { IncrementButton } from './increment-button'

export const FastContextCounters: FC = () => (
  <FastContextCountersProvider>
    <div className="w-max-[600] grid grid-cols-2 gap-4">
      <IncrementButton stateFieldName="value1" />
      <Count stateFieldName="value1" />
      <IncrementButton stateFieldName="value2" />
      <Count stateFieldName="value2" />
    </div>
  </FastContextCountersProvider>
)
