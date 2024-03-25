import React from 'react';
import './footer.css';
import { FaWhatsapp } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { ImLocation2 } from 'react-icons/im'; 

function Footer() {
    return (
        <footer className="footer">
            <div className='container-info'>
               
                    <div className='email'>
                        <a href="https://jcrnietos@gmail.com" target="_blank" rel="noreferrer">
                             <i className="icon-gmail"><FaEnvelope size={35}/></i> 
                        </a>
                        <p className='text-email'>jcrnietos@gmail.com</p>
                    </div>
                    <div className='ubication'>
                        <a href=''>
                           <i className='icon-location'><ImLocation2/></i>
                        </a>
                        <p className='text-ubication'>Córdoba-Argentina</p>
                    </div>
            </div>

            <div className='design-by'>
               <p className='text-design'>Diseñado por Juan cruz Nieto</p>
            </div>

            <div className="container-links">
                <a href="https://linkedin.com/in/juan-cruz-nieto-developer" target="_blank" rel="noreferrer" className='icon linkedin'>
                    <i className="icon-linkedin"><FaLinkedin size={35} /></i>
                </a>
                <a href="https://github.com/jcrnieto" target="_blank" rel="noreferrer" className='icon github'>
                    <i className="icon-github"><FaGithub size={35} /></i>
                </a>
                <a href="https://wa.me/+543516468746" target="_blank" rel="noreferrer" className='icon wattsap'>
                    <i className="icon-whatsapp"><FaWhatsapp size={35} /></i>
                </a>
            </div>

           
        </footer >
    )
}

export default Footer