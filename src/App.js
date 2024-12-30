import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProviderCustom } from './context/ThemeContext';
import AboutMe from './pages/AboutMe';
import Quequeo from './pages/Quequeo';
import SimpleNavbar from './components/SimpleNavbar';
import Footer from './components/Footer';
import WorkExperience from './pages/WorkExperience';

function App() {
  return (
    <ThemeProviderCustom>
      <Router>
      <SimpleNavbar />
        <Routes>
          <Route path="/" element={<Quequeo />} />
          <Route path="/quequeo" element={<Quequeo />} />
          <Route path="/about_me" element={<AboutMe />} />
          <Route path="/work_experience" element={<WorkExperience />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProviderCustom>
  );
}

export default App;
