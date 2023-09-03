import cabania from "./media/cabaña.png";
import placares from "./media/foto-placeres.png";
import fundacion from "./media/fundacion-uno.png";

export const dateIcons = [
  {
    id:1,
    img:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" 
  },
  {
    id:2,
    img:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
  },
  {
    id:3,
    img:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
  },
  {
    id:4,
    img:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
  },
  {
    id:5,
    img:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg"
  },
  {
    id:6,
    img:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
  },
  {
    id:7,
    img:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg"
  },
  {
    id:8,
    img:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg"
  },
  {
    id:9,
    img:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original-wordmark.svg" 
  }
]

export const cardProyect = [
  {
    id:1,
    proyect:"Placeres Sin Tacc",
    description:"Proyecto en desarrollo. Placeres Sin Tacc es una empresa que se dedica a la elaboración de productos libres de gluten. El mismo está desarrollado con Node, Express en Backend. La base de datos es Postgres y prisma. Para convertir una imagen en url y guardarlas uso Firebase. El Frontend lo estoy desarrollando con React y para los estilos el framework bootstrap",
    url:"https://frontend-placeressintacc.vercel.app/",
    img:placares
  },
  {
    id:2,
    proyect:"Fundación Uno",
    description:"Es un proyecto para una fundación la cual ayuda a merenderos, escuelitas de futbol y tiene una orientación a la concientización sobre el medio ambiente y el bien estar en general. El desarrollo está echo con React, Bootstrap y CSS. Utilizo Nodemailer para mandar los datos del formulario hacia la casilla de correo",
    url:"fundacionuno.com.ar",
    img:fundacion
  },
  {
    id:3,
    proyect:"Cabañas Balcón del Río",
    description:"Es un proyecto realizado para un cliente que tiene una cabaña de alquiler en las sierras de Córdoba. El mismo lo quiere para adjuntarlo en sus redes sociales como así también en páginas de turismo. Está echo con React-Vite. para lo estilos usé styled-component. Utilizé algunas librerías como react-hook-form para el control del formulario, leaflet para adjuntar la ubicación del mapa donde se encuentra ubicada la cabaña y swiper para hacer el carrousel de fotos del lugar",
    url:"https://proyecto-cabania.vercel.app/",
    img:cabania
  },
  {
    id:4,
    proyect:"Recetas",
    description:"Desarrollo de una Single Page Application (SPA) utilizando React para el Front-End y Redux como state management.Todos los componentes fueron desarrollados con CSS sin uso de librerías externas. El backend esta echo con java-springboot. Es el mismo front que el proyecto food-APP. Solo se modificó el backend para un trabajo practicofinal para la academia ayi-group. Features del proyecto: Caché de búsquedas, ordenamientos y filtros",
    url:"https://integrador-ayi-react.vercel.app/",
    img:fundacion
  }
]

 



