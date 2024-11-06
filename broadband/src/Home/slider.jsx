import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./styles.css";
import Button1 from "../Buttons/button1";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

export default function App() {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper bg-[#EAEDF4] "
      >
        <SwiperSlide>
          <div className="relative bg-[#EAEDF4] max-w-[1712px] mx-auto pt-24 px-8 pb-8">
            <div className="relative flex flex-col md:flex-row items-center mt-10 md:mt-10">
              {/* Left Text Content */}
              <div className="md:w-1/2 lg:w-3/5 md:pl-10 relative flex flex-col justify-between">
                {/* Text Paragraph */}
                <div className="relative flex-1 ">
                  <h1 className="text-lg sm:text-xl md:text-6xl font-bold text-black mb-4 z-20 relative  ">
                    Now get double speed in single price
                  </h1>
                  <p className="relative text-xl sm:text-lg md:text-lg mb-7">
                    Now enjoy uniterrupted broadbad wi-fi for you and your
                    family at the best in class prices and dedicated customer
                    service
                  </p>
                </div>
                <Button1>Browse Plans</Button1>
              </div>
              {/* Left Image */}
              <div className="z-30 w-full md:w-1/2 lg:w-2/5 mb-8 md:mb-0 relative">
                <img
                  src="/V-1.png"
                  alt="About Us"
                  className="w-11/12 h-11/12 rounded-lg  relative z-20"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative bg-[#EAEDF4] max-w-[1712px] mx-auto pt-24 px-8 pb-8">
            <div className="relative flex flex-col md:flex-row items-center mt-10 md:mt-10">
              {/* Left Text Content */}
              <div className="md:w-1/2 lg:w-3/5 md:pl-10 relative flex flex-col justify-between">
                {/* Text Paragraph */}
                <div className="relative flex-1 ">
                  <p className="relative text-xl sm:text-lg md:text-lg mb-7">
                    Welcome to AKASH BROADBAND in Porbandar! 🌐 We are committed
                    to providing fast, reliable internet services tailored to
                    meet your needs. Our mission is to keep you connected to
                    what matters most, whether you’re working from home 💻,
                    streaming your favorite shows 🎬, or enjoying online gaming
                    🎮.
                  </p>
                </div>
                <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-4 z-20 relative">
                  Why Choose Us?
                </h1>
                <Button1>Browse Plans</Button1>
              </div>

              {/* Left Image */}
              <div className="z-30 w-full md:w-1/2 lg:w-2/5 mb-8 md:mb-0 relative">
                <img
                  src="/V-2.png"
                  alt="About Us"
                  className="w-11/12 h-11/12 relative z-20"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
