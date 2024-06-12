import { FC } from 'react'

import { ContextCountersProvider } from './context-counters.provider'
import { Count } from './count'
import { IncrementButton } from './increment-button'

export const ContextCounters: FC = () => (
  <ContextCountersProvider>
    <div className="w-max-[600] grid grid-cols-2 gap-4">
      <IncrementButton stateFieldName="value1" />
      <Count stateFieldName="value1" />
      <IncrementButton stateFieldName="value2" />
      <Count stateFieldName="value2" />
    </div>
  </ContextCountersProvider>
)
