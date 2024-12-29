import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProviderCustom } from './context/ThemeContext';
import Me from './pages/Me';
import Quequeo from './pages/Quequeo';
import SimpleNavbar from './components/SimpleNavbar';
import Footer from './components/Footer';
import Experience from './pages/Experience';

function App() {
  return (
    <ThemeProviderCustom>
      <Router>
      <SimpleNavbar />
        <Routes>
          <Route path="/" element={<Quequeo />} />
          <Route path="/me" element={<Me />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProviderCustom>
  );
}

export default App;
