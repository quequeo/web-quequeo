import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { AuthContext } from './context/AuthContext';
import { ThemeProviderCustom } from './context/ThemeContext';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Profile from './pages/Profile';
import CreateProject from './pages/CreateProject';
import EditProject from './pages/EditProject';
import Experience from './pages/Experience';
import SimpleNavbar from './components/SimpleNavbar';
import Login from './components/Login';
import Footer from './components/Footer';

function App() {
  
  return (
    <AuthProvider>
      <ThemeProviderCustom>
        <SimpleNavbar />
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/create-project" element={<PrivateRoute><CreateProject /></PrivateRoute>} />
            <Route path="/edit-project/:id" element={<PrivateRoute><EditProject /></PrivateRoute>} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/login" element={<Login />} />
          </Routes>
          <Footer />
        </Router>
      </ThemeProviderCustom>
    </AuthProvider>
  );
}

function PrivateRoute({ children }) {
  const { isAuthenticated } = React.useContext(AuthContext);
  return isAuthenticated ? children : <Navigate to="/login" />;
}

export default App;
