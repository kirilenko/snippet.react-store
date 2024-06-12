import { FC } from 'react'
import { Provider } from 'react-redux'

import { Count } from './count'
import { IncrementButton } from './increment-button'
import { store } from './store'

export const ReduxCounters: FC = () => (
  <Provider {...{ store }}>
    <div className="w-max-[600] grid grid-cols-2 gap-4">
      <IncrementButton stateFieldName="value1" />
      <Count stateFieldName="value1" />
      <IncrementButton stateFieldName="value2" />
      <Count stateFieldName="value2" />
    </div>
  </Provider>
)
