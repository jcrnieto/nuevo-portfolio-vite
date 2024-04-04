import "./about.css";
import fotoPerfil from "../../media/fotoPerfil.jpg";
import CV from '../../media/CV-Juan-Cruz-Nieto-dev.pdf';
import { saveAs } from 'file-saver';
import Cards from "../cards/Cards";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function About() {
  const handleDownload = () => {
    const fileUrl = CV;
    const fileName = 'CV.pdf';
    saveAs(fileUrl, fileName);
  };

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);


  return (
    <div className="container-about" id='about-me'>
      <h1 className="title-about"> Sobre Mí </h1>
      <div className="container-content" data-aos="fade-up">
        <div className="container-cv">
          <div className="container-img">
            <img src={fotoPerfil} alt="Imagen-CV" className="img-cv" />
          </div>
          <div>
            <button className="button-cv" onClick={handleDownload}>
              <div className="cti">
                <a>
                  descargar CV
                </a>
              </div>
            </button>
          </div>
        </div>

        <div className="container-cards">
          <Cards />
        </div>
      </div>
    </div>
  );
}

export default About