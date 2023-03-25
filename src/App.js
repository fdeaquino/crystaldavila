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
        <main className='content-padding'>
          <Routes>
            <Route
              path="/crystaldavila"
              element={<Hero />}
            />
            <Route
              path="/crystaldavila/about"
              element={<About />}
            />
            <Route
              path="/crystaldavila/on-the-issues"
              element={<OnTheIssues />}
            />
            <Route
              path="/crystaldavila/vision"
              element={<Vision />}
            />
            <Route
              path="/crystaldavila/get-involved"
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
