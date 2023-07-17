import "./about.css";
import fotoPerfil from "../../media/fotoPerfil.jpg";
import CV from '../../media/CV.pdf';
import { saveAs } from 'file-saver';

function About() {
  const handleDownload = () => {
    const fileUrl = CV; // Reemplaza con la ruta correcta hacia tu archivo PDF
    const fileName = 'CV.pdf'; // Nombre del archivo que se descargará
  
    saveAs(fileUrl, fileName);
  };

//  const ref = React.createRef();

  return (
    <div className="about-container">
      <div className="about-desc">
        <h3>A cerca de mi</h3>
        <p>
          Soy Técnico Superior Mecatrónico y me encuentro sumergiéndome al mundo
          del Desarrollo Web. Mi objetivo principal es seguir aprendiendo y
          especializándome en el rubro. Me gusta estar capacitándome
          continuamente.
        </p>
        <button className="button-cv" onClick={handleDownload}>
           <a>
             descargar CV
           </a>
        </button>
      </div>
      <div className="about-img">
        <img src={fotoPerfil} alt="about" />
      </div>
    </div>
  );
}

export default About