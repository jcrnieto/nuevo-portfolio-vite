import { useState } from 'react'
import './navBar.css';
import { AiOutlineMenu } from 'react-icons/ai';
import { MdClose } from 'react-icons/md';
import logo from "../../media/logo-azul.png";

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
      
        <div className="container-logo">
          <img src={logo} alt="logo" className='img-logo'/>
        </div> 
        <ul className={`menu-items ${menuOpen ? "open" : ""}`}>
          <li>
            <a href='#about-me' onClick={(e) => { handleScroll(e, 'about-me'); setMenuOpen(!menuOpen)}}>Sobre Mí</a>
          </li>
          <li>
            <a href='portfolio' onClick={(e) => { handleScroll(e, 'portfolio'); setMenuOpen(!menuOpen)}}>Portfolio</a>
          </li>
          <li>
            <a href='service' onClick={(e) => { handleScroll(e, 'service'); setMenuOpen(!menuOpen)}}>Servicios</a>
          </li>

          <li>
            <a href='contact' onClick={(e) => { handleScroll(e, 'contact'); setMenuOpen(!menuOpen)}}>Contacto</a>
          </li>
        </ul>

        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <MdClose style={{ color: 'white !important' }} /> : <AiOutlineMenu />}
        </div>
    </nav>
  )
}

export default Navbar