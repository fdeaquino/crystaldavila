import React from 'react';
import Nav from './components/Nav';
// import Hero from './components/Hero';
import About from './components/About';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <main>
      <Nav></Nav>
      
      {/* <Hero></Hero> */}
      <About></About>

      <Footer></Footer>
      </main>
    </div>
  );
}

export default App;
