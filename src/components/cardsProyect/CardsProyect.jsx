import './cardsProyect.css';
import { cardProyect } from "../../date";

//style={{ backgroundImage: `url(${proyect.img})` }}
const CardsProyect = () => {
    //console.log('card', cardProyect)
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
                                <span>
                                    <a href={proyect.url} target="_blank" className='link-proyect'>Ver Proyecto</a>
                                </span>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default CardsProyect