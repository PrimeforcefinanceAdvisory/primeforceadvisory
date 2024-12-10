import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Services from './components/Services';
import Feature from './components/Featue';
import About from './components/About';
import Contact from './components/Contact';



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Services/>
      <Feature/>
      <About/>
      <Contact/>
    </div>
  );
}

export default App;
