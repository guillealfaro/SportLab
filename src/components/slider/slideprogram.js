import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../slider/slidersh.scss";

import { EffectCoverflow, Pagination, Navigation } from "swiper";
import andres from "../slider/screen2.png";
import mae from "../slider/adult.jpg";
import baby from "../slider/guila.jpg";

const Slider = () => {
  return (
    <div className="container">
      <Swiper
        effect={"coverflow"}
        loop={true}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 20,
          depth: 100,
          modifier: 2,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide className="imagen">
          <img className="imagenandres" src={andres} alt="slide_image" />
          <div className="overlay">
            <p className="price">100$</p>
            <p className="complete">Nutrition</p>
            <p className="prim-text">Hard work</p>
            <p className="prim-text">beats talent.</p>
            <a href="#progrms">MORE INFO</a>
          </div>
        </SwiperSlide>
        <SwiperSlide className="imagen">
          <img className="imagenmaeadulto" src={mae} alt="slide_image" />
          <div className="overlay">
            <p className="price">100$</p>
            <p className="complete">Performance</p>
            <p className="prim-text">Hard work</p>
            <p className="prim-text">beats talent.</p>
            <a href="#progrms">MORE INFO</a>
          </div>
        </SwiperSlide>
        <SwiperSlide className="imagen">
          <img className="imagenguilababy" src={baby} alt="slide_image" />
          <div className="overlay">
            <p className="price">100$</p>
            <p className="complete">Rehab</p>
            <p className="prim-text">Hard work</p>
            <p className="prim-text">beats talent.</p>
            <a href="#progrms">MORE INFO</a>
          </div>
        </SwiperSlide>

        <div className="slider_controler">
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
};
export default Slider;
