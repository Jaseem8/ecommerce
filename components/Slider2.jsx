import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import classes from "./ImageSlider.module.css";

// import required modules
import { Keyboard, Pagination, Navigation } from "swiper";

export default function ImageSlider() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className={classes.swiperslide}>
          <img src="https://m.media-amazon.com/images/S/aplus-media/vc/6cce3b69-f526-405b-b66f-118265512282.__CR0,0,970,300_PT0_SX970_V1___.jpg" />
        </SwiperSlide>
        <SwiperSlide className={classes.swiperslide}>
          <img src="https://www.tccq.com/image/cache/catalog/Home%20Page%20Sliders/iphone-14-pro-banner(1)-1400x500.jpg" />
        </SwiperSlide>
        <SwiperSlide className={classes.swiperslide}>
          <img src="https://ac-systems.lu/media/35/ff/ab/1675670764/LXP4089%20FLX-SW51_Samsung_Webbanner_1920x481px_1.png" />
        </SwiperSlide>
        <SwiperSlide className={classes.swiperslide}>
          <img src="https://images-na.ssl-images-amazon.com/images/G/01/consumerelectronics/CAC/Category_Storefronts/1367476_us_he_handpicked_laptops_1500x440.jpg" />
        </SwiperSlide>
        <SwiperSlide className={classes.swiperslide}>
          <img src="https://thumbs.dreamstime.com/b/yellow-flatlay-jeans-baseball-cap-headphones-top-view-summer-sale-website-header-banner-background-template-flat-lay-fashion-173927879.jpg" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
