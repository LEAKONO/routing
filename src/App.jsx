import { useState } from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Services from './pages/Services'
import Navbar from './pages/Navbar'

function App() {

  return (
    <div className="content">
      <Router>
      <Navbar/>
        <Routes>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/skills" component={Skills} />
          <Route path="/services" component={Services} />
        </Routes>
      </Router>
      
    </div>
    
  )
}

export default App
