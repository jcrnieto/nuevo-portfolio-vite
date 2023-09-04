import './cardsProyect.css';
import { cardProyect } from "../../date";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const CardsProyect = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 });
      }, []);
    
    
    return (
        <div className="container-proyects" data-aos="zoom-in">
            {
                cardProyect.map(proyect => (
                    <div className="card-proyect">
                        <div className="proyect-card">
                            <div className="img-content">
                                <p className='title-proyect'>{proyect.proyect}</p>
                                <img src={proyect.img} alt="" />
                            </div>
                            <div className="content">
                                <p className="heading">{proyect.proyect}</p>
                                <p className="description">{proyect.description}</p>
                           </div>
                        </div>
                        <button className='button'>
                        <a href={proyect.url} target="_blank" className='link-proyect'>Ver Proyecto</a> 
                        </button>
                    </div>
                ))
            }
        </div>
    )
}

export default CardsProyect