import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { AuthContext } from './context/AuthContext';
import { ThemeProviderCustom } from './context/ThemeContext';
import Home from './pages/Home';
import CreateProject from './components/deprecated/CreateProject';
import EditProject from './components/deprecated/EditProject';
import Projects from './pages/Projects';
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
            {/* Rutas para usuarios no autenticados */}
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            {/* Rutas para usuarios autenticados */}
            <Route path="/create-project" element={<PrivateRoute><CreateProject /></PrivateRoute>} />
            <Route path="/edit-project/:id" element={<PrivateRoute><EditProject /></PrivateRoute>} />
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
