import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Header/Navbar';


import Footer from './components/footer/Footer'
import About from './pages/About';
import Home from './pages/Home';
import Agents from './pages/Agents';
import Services from './pages/Services';
import Properties from './pages/Properties';
import Contact from './pages/Contact';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Router>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About />} />
    <Route path="/agents" element={<Agents />} />
    <Route path="/services" element={<Services />} />
    <Route path="/properties" element={<Properties />} />
    <Route path="/contact" element={<Contact />} />
    </Routes>
    <Footer/>
   </Router>
      </>
      )
     
  
}

export default App
