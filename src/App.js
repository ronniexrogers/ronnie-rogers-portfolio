import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './app_components/About'
import Contact from './app_components/Contact'
import Home from './app_components/Home'
import Nav from './app_components/Navigation'
import Resume from './app_components/Resume'
import Portfolio from './app_components/Portfolio'
import 'animate.css'

const titleAnimation = 'animate__animated animate__backInLeft'


function App() {

  return (
    <div className="App">
      <Router> 
        <Nav />
        <Routes>
          <Route path="/" element={ <Home titleAnimation={ titleAnimation } /> } />
          <Route path="/About" element={ <About titleAnimation={ titleAnimation } /> } />
          <Route path="/Contact" element={ <Contact titleAnimation={ titleAnimation } /> } />
          <Route path="/Resume" element={ <Resume titleAnimation={ titleAnimation } /> } />
          <Route path="/Portfolio" element={ <Portfolio titleAnimation={ titleAnimation } /> } />
        </Routes>
      </Router>
    </div>
  )
}

export default App
