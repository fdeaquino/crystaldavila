import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import GetInvolved from './components/GetInvolved';
import OnTheIssues from './components/OnTheIssues';
import Vision from './components/Vision';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <div>
        <Nav />
        <main>
          <Routes>
            <Route
              path="/"
              element={<Hero />}
            />
            <Route
              path="/about"
              element={<About />}
            />
            <Route
              path="/on-the-issues"
              element={<OnTheIssues />}
            />
            <Route
              path="/vision"
              element={<Vision />}
            />
            <Route
              path="/get-involved"
              element={<GetInvolved />}
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
