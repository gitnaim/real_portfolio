import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { useSelector } from 'react-redux';
import "swiper/css";

import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';

export default function App() {
  // let data=useSelector(state => state.OpenSourceList);

  return (
    <>

      {/* <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        breakpoints= {{
          560: {
            slidesPerView: 2.5
          },
          760: {
            slidesPerView: 3.5
          },
          1300: {
            slidesPerView: 4.5   
          }
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <a href="">
            <div className="img">
              <img href="" src="./assets/images/cat.svg"/>
            </div>
            <div className="desc">
              <p>2222222222222222222222</p>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="">
            <div className="img">
              <img href="" src="./assets/images/cat.svg"/>
            </div>
            <div className="desc">
              <p>2222222222222222222222</p>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="">
            <div className="img">
              <img href="" src="./assets/images/cat.svg"/>
            </div>
            <div className="desc">
              <p>2222222222222222222222</p>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="">
            <div className="img">
              <img href="" src="./assets/images/cat.svg"/>
            </div>
            <div className="desc">
              <p>2222222222222222222222</p>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="">
            <div className="img">
              <img href="" src="./assets/images/cat.svg"/>
            </div>
            <div className="desc">
              <p>2222222222222222222222</p>
            </div>
          </a>
        </SwiperSlide>

      </Swiper> */}
    </>
  );
}

// export default Personal;