// MySwiper.js
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import malowanie1 from "../img/malowanie1.jpg";

const MySwiper = () => {
  const swiperRef = useRef();

  return (
    <div style={{ width: "100%", maxWidth: "600px", margin: "0 auto", padding: "2rem 0" }}>
      <div className="estimate-title-box">ZOBACZ NASZE PRACE</div>
      <p style={{textAlign:"center"}}>przesuń zdjęcie w prawo</p>

      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          console.log("Swiper INIT", swiper);
        }}
        spaceBetween={30}
        slidesPerView={1}
        style={{ height: "300px" }}
      >
        <SwiperSlide>
          <div className="swiper">
            <img className="swpier-img" src={malowanie1} alt="malowanie" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper">Slide 2</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper">Slide 3</div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MySwiper;
