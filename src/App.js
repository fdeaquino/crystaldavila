import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LanguageSwitcherWrapper from './components/LanguageSwitcherWrapper';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import GetInvolved from './components/GetInvolved';
import OnTheJob from './components/OnTheJob';
import Vision from './components/Vision';
import Footer from './components/Footer';
import VolunteerSignUp from './components/VolunteerSignUp';



function App() {
  return (
    <LanguageSwitcherWrapper>
      <Router>
        <div>
          <Nav />
          <main className='content-padding'>
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
                path="/on-the-job"
                element={<OnTheJob />}
              />
              <Route
                path="/vision"
                element={<Vision />}
              />
              <Route
                path="/get-involved"
                element={<GetInvolved />}
              />
              <Route
                path="/volunteer-sign-up"
                element={<VolunteerSignUp />}
              />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </LanguageSwitcherWrapper>
  );
}

export default App;
