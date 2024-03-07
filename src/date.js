import cabania from "./media/cabaña.png";
import placares from "./media/foto-placeres.png";
import fundacion from "./media/img-fundacion.jpg";
import recetas from "./media/img-recetas.png";
import alarma from "./media/alarma.jpg";

export const dateIcons = [
  {
    id:1,
    title:"React",
    img:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" 
  },
  {
    id:2,
    title:"Redux",
    img:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
  },
  {
    id:3,
    title:"CSS3",
    img:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
  },
  {
    id:4,
    title:"HTML",
    img:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
  },
  {
    id:5,
    title:"UI",
    img:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg"
  },
  {
    id:6,
    title:"Node",
    img:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
  },
  {
    id:7,
    title:"postgres",
    img:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg"
  },
  {
    id:8,
    title:"Sequelize",
    img:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg"
  },
  {
    id:9,
    title:"Bootstrap",
    img:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original-wordmark.svg" 
  }
]

export const cardProyect = [
  {
    id:1,
    proyect:"Placeres Sin Tacc",
    description:"Proyecto en desarrollo. Placeres Sin Tacc es una empresa que se dedica a la elaboración de productos libres de gluten. El mismo está desarrollado con Node, Express en Backend. La base de datos es Postgres y Prisma. Para convertir una imagen en url y guardarlas uso Firebase. El Frontend lo estoy desarrollando con React y para los estilos el framework bootstrap.",
    url:"https://frontend-placeressintacc.vercel.app/",
    img:placares
  },
  {
    id:2,
    proyect:"Fundación Uno",
    description:"Es un proyecto para una fundación que ayuda a merenderos, escuelitas de fútbol y tiene una orientación a la concientización sobre el medio ambiente y el bienestar en general. El desarrollo está realizado con React, Bootstrap y CSS. Utilizo Nodemailer para mandar los datos del formulario hacia la casilla de correo.",
    url:"https://fundacion-uno.vercel.app/",
    img:fundacion
  },
  {
    id:3,
    proyect:"Cabañas Balcón del Río",
    description:"Es un proyecto realizado para un cliente que tiene una cabaña de alquiler en las sierras de Córdoba. El mismo lo quiere para adjuntarlo en sus redes sociales como así también en páginas de turismo. Está realizado con React-Vite. Para lo estilos usé styled-component. Utilizé algunas librerías como react-hook-form para el control del formulario, leaflet para adjuntar la ubicación del mapa donde se encuentra ubicada la cabaña y swiper para hacer el carrusel de fotos del lugar.",
    url:"https://proyecto-cabania.vercel.app/",
    img:cabania
  },
  {
    id:4,
    proyect:"Recetas",
    description:"Desarrollé para el bootcamp Henry, una Single Page Application la cual consume información de una api externa (Spoonacular),como también de una base de datos. Las funcionalidades que ofrecen son: búsqueda por nombre, crear tu propia receta mediante un formulario controlado y filtrados: por tipo de dietas, alfabéticamente A a Z y viceversa y por puntuación",
    url:"https://integrador-ayi-react.vercel.app/",
    img:recetas
  },
  {
    id:5,
    proyect:"Venta de Alarmas",
    description:"Actualmente me encuentro trabajando en dicho proyecto. El frontend está realizado con React y el backend con Node y Express",
    url:"https://proyecto-alarma.vercel.app/",
    img:alarma
  }
]

 



