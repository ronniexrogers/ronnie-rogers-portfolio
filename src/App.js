import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './app_components/About'
import Contact from './app_components/Contact'
import Footer from './app_components/Footer'
import Home from './app_components/Home'
import Nav from './app_components/Navigation'
import Resume from './app_components/Resume'
import Portfolio from './app_components/Portfolio'


function App() {
  return (
    <div className="App">
      <Router> 
        <Nav />
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/About" element={ <About /> } />
          <Route path="/Contact" element={ <Contact /> } />
          <Route path="/Resume" element={ <Resume /> } />
          <Route path="/Portfolio" element={ <Portfolio /> } />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </div>
  )
}

export default App
