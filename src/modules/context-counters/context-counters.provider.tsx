import { FC, PropsWithChildren, useMemo, useState } from 'react'

import {
  ContextCountersContext,
  ContextCountersContextValue,
} from './context-counters.context'

export const ContextCountersProvider: FC<PropsWithChildren> = ({
  children,
}) => {
  const [value1, setValue1] = useState<number>(0)
  const [value2, setValue2] = useState<number>(0)

  const value = useMemo<ContextCountersContextValue>(
    () => ({
      setValue1,
      setValue2,
      value1,
      value2,
    }),
    [value1, value2],
  )

  return (
    <ContextCountersContext.Provider {...{ value }}>
      {children}
    </ContextCountersContext.Provider>
  )
}
