import { FC, useContext } from 'react'

import { ContextCountersContext } from '../context-counters.context'

type IncrementButtonProps = {
  stateFieldName: 'value1' | 'value2'
}

export const IncrementButton: FC<IncrementButtonProps> = ({
  stateFieldName,
}) => {
  const { setValue1, setValue2 } = useContext(ContextCountersContext)

  return (
    <button
      className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
      onClick={() => {
        ;[setValue1, setValue2][+!(stateFieldName === 'value1')](
          (prev) => prev + 1,
        )
      }}
      type="button"
    >
      Increment {stateFieldName}
    </button>
  )
}
