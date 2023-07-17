import React, {useState, useEffect} from 'react';
import './App.css';
import About from './components/about/About';
import Cover from './components/cover/Cover';
import Footer from './components/footer/Footer';
import Info from './components/info/Info';
import Navbar from './components/navbar/Navbar.jsx'
import Sliders from './components/slider/Sliders';
//import ComponentePrueba from './components/ComponentePrueba';
import slidesInfo from "./date";

function App() {
const [scrollHeight, setScrollHeight] = useState(0);

const handleScroll = () => {
  const position = window.pageYOffset;
  setScrollHeight(position)
}

useEffect(() => {
  
  window.addEventListener("scroll", handleScroll)
},[scrollHeight])
  //console.log("slide app",slidesInfo)
  return (
    <div className="App">
     <Navbar isScrolling={scrollHeight} />
     <Cover/>
     <About/>
     <Sliders slidesInfo={slidesInfo}/>
     <Info/>
     <Footer/>
     {/* <ComponentePrueba/> */}
    </div>
  );
}

export default App;

