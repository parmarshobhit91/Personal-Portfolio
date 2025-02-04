import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

import Home from './pages/home/Home'
import AboutMe from './pages/about/AboutMe'
import Contact from './pages/contact/Contact'
import Experience from './pages/experience/Experience'
import Projects from './pages/projects/Projects'
import Navbar from './components/Navbar'


function App() {

  return (
    <div id='app'>
      {/* <h1 className='font-display'>hello</h1> */}
      <div id='app-container-routes'>
        <Router>
      <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<AboutMe />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/experience' element={<Experience />} />
            <Route path='/projects' element={<Projects />} />
          </Routes>
        </Router>
      </div>
    </div>
  )
}

export default App
