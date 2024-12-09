import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider, AuthContext } from './context/AuthContext';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Profile from './pages/Profile';
import CreateProject from './pages/CreateProject';
import Navbar from './components/Navbar';
// import Register from './components/Register';
import Login from './components/Login';
import background from './assets/images/background.webp';
import { Box } from '@mui/material';

function App() {

  return (
    <Box 
      sx={{ backgroundImage: `url(${background})`, 
      backgroundSize: 'cover', 
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      height: '100vh',
      width: '100%',
    }}>
      <AuthProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Navigate to="/projects" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/create-project" element={<PrivateRoute><CreateProject /></PrivateRoute>} />
            {/* <Route path="/register" element={<Register />} /> */}
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
      </AuthProvider>
    </Box>
  );
}

function PrivateRoute({ children }) {
  const { isAuthenticated } = React.useContext(AuthContext);
  return isAuthenticated ? children : <Navigate to="/login" />;
}

export default App;