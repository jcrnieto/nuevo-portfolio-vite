import './skills.css';
import {dateIcons} from '../../date';
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Skills = () => {
    // console.log('date',dateIcons)
    useEffect(() => {
      Aos.init({ duration: 3000 });
    }, []);
  
  return (
    <div className="container-skills" id='skills'>
        <h1 className="title-skills">Tecnologías que uso en mis proyectos</h1>
        <div className='container-icons'>
        {
           dateIcons.map(icon => (
              <div className='icon-container' key={icon.id} data-aos="zoom-in-up">
                <img src={icon.img} alt="skill" className='img-icon'/>
              </div>
           ))
        }
         </div>
    </div>
  )
}

export default Skills