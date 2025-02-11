import { useState } from 'react'
import Home from '.pages/Home'
import About from './pages/About'
import Skills from '.pages/Skills'
import Services from './pages/Services'
import Navbar from './pages/Navbar'

function App() {

  return (
    <div className="content">
      <Home/>
      <About/>
      <Skills/>
    </div>
    
  )
}

export default App
