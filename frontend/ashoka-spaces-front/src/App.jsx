import { Routes, Route } from "react-router-dom";
import './App.css';

import Navbar from './components/Header/Navbar';
import Footer from './components/footer/Footer';

import Home from './pages/Home';
import About from './pages/About';
import AgentsPage from './pages/AgentsPage';
import Services from './pages/Services';
import Properties from './pages/Properties';
import Contact from './pages/Contact';

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/agents" element={<AgentsPage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
