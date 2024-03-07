//import React, {useState, useEffect} from 'react';
import './App.css';
//import ComponentePrueba from './components/ComponentePrueba';
import About from './components/about/About';
import Cover from './components/cover/Cover';
import Footer from './components/footer/Footer';
import Form from './components/form/Form';
import Navbar from './components/navbar/Navbar.jsx'
import Portfolio from './components/portfolio/Portfolio';
import Skills from './components/skills/Skills';


function App() {

  return (
    <div className="App">
     <Navbar/>
     <Cover/>
     <About/>
     <Portfolio/>
     <Skills/>
     <Form/>
     {/* <ComponentePrueba/> */}
     <Footer/>
    </div>
  );
}

export default App;

