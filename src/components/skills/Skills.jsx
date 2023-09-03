import './skills.css';
import {dateIcons} from '../../date';

const Skills = () => {
    // console.log('date',dateIcons)

  return (
    <div className="container-skills" id='skills'>
        <h1 className="title-skills">Tecnilogías que uso en mis proyectos</h1>
        <div className='container-icons'>
        {
           dateIcons.map(icon => (
              <div className='icon-container' key={icon.id}>
                <img src={icon.img} alt="skill" className='img-icon'/>
              </div>
           ))
        }
         </div>
    </div>
  )
}

export default Skills