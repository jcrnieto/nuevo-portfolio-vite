import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import './slider.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


function Sliders({ slidesInfo }) {
 return (
    <div className="carousel-container">
      <div className="carousel-title">
        <h2>Mis proyectos</h2>
      </div>
      <div className="sliders-container">
        <Swiper
          modules={[Navigation, Scrollbar, A11y, Autoplay]}
          spaceBetween={1}
          slidesPerView={1}
          navigation
          scrollbar={{ draggable: true }}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
          {
            slidesInfo.map((slide) => (
              <SwiperSlide key={slide.id} >
                <div className="slider-container">
                <img src={slide.src} alt={slide.src} className="img"/>
                <div className="slide-desc">
                   <span><a href={slide.desc} target="_blank" className='link'>Ver Proyecto</a></span>
                </div>
                </div>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
    </div>
  )
}

export default Sliders;

