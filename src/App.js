import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Signup from './components/Signup';
import Home from './components/Home';
import About from './components/About';
import Subjects from './components/Subjects';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import './App.css';

const App = () => {
  // Simulated state to track signup completion
  const [isSignedUp, setIsSignedUp] = React.useState(false);

  const handleSignup = () => {
    // Perform signup logic here
    console.log('Signup completed');
    // Set isSignedUp to true after successful signup
    setIsSignedUp(true);
  };

  return (
    <Router>
      <div className="app">
        <Header />
        <div className="app-container">
          <nav className="sidebar">
            <ul>
              {/* Hide sidebar links until signup is completed */}
              {isSignedUp && (
                <>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/about">About</Link></li>
                  <li><Link to="/subjects">Subjects</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                </>
              )}
            </ul>
          </nav>
          <div className="content">
            <Routes>
              <Route
                path="/"
                element={isSignedUp ? <Home /> : <Signup handleSignup={handleSignup} />}
              />
              <Route path="/about" element={<About />} />
              <Route path="/subjects" element={<Subjects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            {/* Redirect to home page after successful signup */}
            {isSignedUp && <Navigate to="/" />}
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;



