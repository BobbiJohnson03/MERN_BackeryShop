import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import slide_image_1 from "./assets/images/photo1.png";
import slide_image_2 from "./assets/images/photo2.png";
import slide_image_3 from "./assets/images/photo3.png";
import slide_image_4 from "./assets/images/photo4.png";
import slide_image_5 from "./assets/images/photo5.png";
import slide_image_6 from "./assets/images/photo1.png";
import slide_image_7 from "./assets/images/photo2.png";

import "./index.css";


const SwiperComponent = () => {
  return (
    <div className="container">
      <h1 className="heading">Flower Gallery</h1>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true, 
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className='swiper_container'
      >
        <SwiperSlide>
          <img src={slide_image_1} alt="slide" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={slide_image_2} alt="slide" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={slide_image_3} alt="slide" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={slide_image_4} alt="slide" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={slide_image_5} alt="slide" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={slide_image_6} alt="slide" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={slide_image_7} alt="slide" />
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/gallery" element={<SwiperComponent />} />
      </Routes>
    </Router>
  );
};

export default App;
