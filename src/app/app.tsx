import { FC } from 'react'
import { Global } from '@emotion/react'

import { env } from '@app/config'
import { ContextCounters } from '@modules/context-counters'
import { ReduxCounters } from '@modules/redux-counters'
import { StoreCounters } from '@modules/store-counters'
import { StoreCounters as StoreCountersBeforeReact18 } from '@modules/store-counters-before-react-18'

import './styles/tailwind.css'
import { AppStyle } from './styles/app.style'
import { GlobalStyles } from './styles/global.style'

export const App: FC = () => (
  <>
    <Global styles={GlobalStyles} />
    <AppStyle>
      <p className="text-xs">
        It is an experiment to compare the performance of the context API and
        the store pattern.
      </p>
      <p className="text-xs">
        Look to react-dev-tools (ensure that `Highlight updates when components
        render` is enabled).
      </p>
      <p className="text-xs">
        This is using of the react-store w/ independent fields (a changing some
        field does not trigger a re-render of the component who depended on
        another field of the store).
        <br />
        It requires React 18.
      </p>
      <StoreCounters />
      <p className="mt-4 text-xs">The same as above but using React 17.</p>
      <StoreCountersBeforeReact18 />
      <p className="mt-4 text-xs">
        This is using of the context API (a changing some field trigger
        re-render another component who depended on another field of the
        context).
      </p>
      <ContextCounters />
      <p className="mt-4 text-xs">
        This is using of the redux w/ independent fields (a changing some field
        does not trigger a re-render of the component who depended on another
        field of the store).
      </p>
      <ReduxCounters />
    </AppStyle>
    <span className="hidden">{env.VITE_TIMESTAMP}</span>
  </>
)
