import { FC } from 'react'
import { Global } from '@emotion/react'

import { env } from '@app/config'
import { StoreCounters } from '@modules/store-counters'

import './styles/tailwind.css'
import { AppStyle } from './styles/app.style'
import { GlobalStyles } from './styles/global.style'

const App: FC = () => (
  <>
    <Global styles={GlobalStyles} />
    <AppStyle>
      <p className="text-xs">
        Ensure that the console is open to see the logs.
        <br />
        This is using of the react-store w/ independent fields (a changing some
        field does not trigger a re-render of the component who depended on
        another field of the store).
      </p>
      <StoreCounters />
    </AppStyle>
    <span className="hidden">{env.VITE_TIMESTAMP}</span>
  </>
)

export default App
