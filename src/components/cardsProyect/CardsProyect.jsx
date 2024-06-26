import './cardsProyect.css';
import { cardProyect } from "../../date";
import "aos/dist/aos.css";

const CardsProyect = () => {

    return (
        <div className="container-proyects">
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