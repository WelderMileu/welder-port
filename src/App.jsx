import { Fragment } from 'react'
import { GlobalStyle } from '../style/global_style'

import Nav from './components/Nav'
import Home from './components/Home'
import About from './components/About'
import SoftSkill from './components/Soft-Skills'
import Plus from './components/Plus'

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Nav />
      <Home />
      <About />
      <SoftSkill />
      <Plus />
    </Fragment>
  )
}

export default App
