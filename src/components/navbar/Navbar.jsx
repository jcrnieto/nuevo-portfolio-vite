import { useState } from 'react'
import './navBar.css';
import {AiOutlineMenu} from 'react-icons/ai';
import {GrClose} from 'react-icons/gr';

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);
  

  const handleScroll = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
      setMenuOpen(false);
    }
  };

  return (

    <nav className='navbar'>
      <ul className={`menu-items ${menuOpen ? "open" : ""}`}>
        <li>
          <a href='#about-me' onClick={(e) => { handleScroll(e, 'about-me');setMenuOpen(!menuOpen)}}>Sobre Mí</a>
        </li>
        <li>
          <a href='portfolio' onClick={(e) => { handleScroll(e, 'portfolio');setMenuOpen(!menuOpen)}}>Portfolio</a>
        </li>
        <li>
          <a href='skills' onClick={(e) => { handleScroll(e, 'skills');setMenuOpen(!menuOpen)}}>Skills</a>
        </li>
       
        <li>
          <a href='contact' onClick={(e) => { handleScroll(e, 'contact');setMenuOpen(!menuOpen)}}>Contacto</a>
        </li>
      </ul>
      
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          { menuOpen ? <GrClose/> : <AiOutlineMenu/>}
      </div>
     
    </nav>
  )
}

export default Navbar