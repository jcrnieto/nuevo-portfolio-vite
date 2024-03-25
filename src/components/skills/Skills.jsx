import './skills.css';
import { dateIcons } from '../../date';
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Skills = () => {
  // console.log('date',dateIcons)
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <div className="container-skills">
      <h1 className="title-skills">Tecnologías que uso en mis proyectos</h1>
      <div className='container-icons'>
        {
          dateIcons.map(icon => (
            <div data-aos="zoom-in-up">
              <div>
                <h3 className='skill-title'>{icon.title}</h3>
              </div>
              <div className='icon-container' key={icon.id}>
                <img src={icon.img} alt="skill" className='img-icon' />
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Skills