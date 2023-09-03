import CardsProyect from "../cardsProyect/CardsProyect";
import './portfolio.css'


const Portfolio = () => {
  return (
    <div className="container-portfolio" id='portfolio'>
       <h1 className="title-portfolio"> Mis proyectos </h1>
       <CardsProyect/>
    </div>
  )
}

export default Portfolio