import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Header from './components/Header/Header'
import Middle from './components/Middle/Middle'
import Testimonials from './components/Middle/Testimonials'
import Agents from './components/Middle/Agents'
import Blog from './components/Middle/Blog'
import Footer from './components/footer/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Middle/>
    <Testimonials/>
    <Agents/>
    <Blog/>
    <Footer/>
      </>
      )
     
  
}

export default App
