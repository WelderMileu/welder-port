import { Fragment } from 'react'
import { GlobalStyle } from '../style/global_style'

import Nav from './components/Nav'
import Home from './components/Home'
import About from './components/About'

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Nav />
      <Home />
      <About />
    </Fragment>
  )
}

export default App
