// src/components/MySwiper.js
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import malowanie1 from "../img/malowanie1.jpg"

const MySwiper = () => {
  return (
    <div style={{ width: "100%", maxWidth: "600px", margin: "0 auto", padding: "2rem 0" }}>
        <div className="estimate-title-box">ZOBACZ NASZE PRACE</div>
        <div className="swiper-title-box"><i class="fa-solid fa-arrow-left swiper-arrow" style={{marginRight:"80px"}}></i>  
           przesuń w prawo lub lewo   
        <i class="fa-solid fa-arrow-right swiper-arrow" style={{marginLeft:"70px"}}></i></div>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        onSlideChange={() => console.log("slide changed")}
        onSwiper={(swiper) => console.log(swiper)}
        style={{ height: "300px" }} // Wysokość całego Swipera
      >
        <SwiperSlide>
          <div className="swiper">
            <img className="swpier-img" src={malowanie1}></img>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="swiper">
            Slide 2
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="swiper">
            Slide 3
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MySwiper;
