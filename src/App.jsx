import { Fragment } from 'react'
import { GlobalStyle } from '../style/global_style'

import Nav from './components/Nav'
import Home from './components/Home'

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Nav />
      <Home />
    </Fragment>
  )
}

export default App
