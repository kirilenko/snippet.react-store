import { FC } from 'react'
import { Global } from '@emotion/react'

import { env } from '@app/config'
import viteLogo from '@public/vite.svg'

import './styles/tailwind.css'
import { AppStyle } from './styles/app.style'
import { GlobalStyles } from './styles/global.style'

const App: FC = () => (
  <>
    <Global styles={GlobalStyles} />
    <AppStyle>
      <img src={viteLogo} className="logo" alt="Vite logo" />
      <span>
        snipped.<span className="text-red-300">react-store</span>
      </span>
    </AppStyle>
    <span className="hidden">{env.VITE_TIMESTAMP}</span>
  </>
)

export default App
