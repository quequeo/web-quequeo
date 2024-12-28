import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProviderCustom } from './context/ThemeContext';
import Home from './pages/Home';
import Quequeo from './pages/Quequeo';
import SimpleNavbar from './components/SimpleNavbar';
import Footer from './components/Footer';
import Ring from './pages/Ring';
import Loop from './pages/Loop';
import Oyga from './pages/Oyga';

function App() {
  return (
    <ThemeProviderCustom>
      <SimpleNavbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quequeo" element={<Quequeo />} />
          <Route path="/ring" element={<Ring />} />
          <Route path="/loop" element={<Loop />} />
          <Route path="/oyga" element={<Oyga />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProviderCustom>
  );
}

export default App;
