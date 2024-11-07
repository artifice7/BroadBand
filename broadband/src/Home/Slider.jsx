import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./styles.css";
import Button1 from "../Buttons/button1";
import "../index.css";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

export default function App() {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={false}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper bg-[#EAEDF4] "
      >
        <link
          href="https://fonts.cdnfonts.com/css/made-gentle"
          rel="stylesheet"
        />
        <SwiperSlide>
          <div className="relative bg-[#EAEDF4] max-w-[1712px] mx-auto pt-24 px-8 pb-8">
            <div className="relative mr-10 flex flex-col md:flex-row items-center mt-10 md:mt-10">
              {/* Left Text Content */}
              <div className="md:w-1/2 text-left lg:w-3/5 md:pl-10 relative flex flex-col justify-between">
                {/* Text Paragraph */}
                <div className="relative flex-1 ">
                  <h1
                    className="text-lg sm:text-xl md:text-6xl max-w-[700px] text-black mb-4 z-20 relative "
                    style={{ fontFamily: "MADE Gentle, sans-serif" }}
                  >
                    Now get double speed in{" "}
                    <span className="text-[#050C9C]">single price</span>
                  </h1>
                  <p className="relative text-xl sm:text-lg md:text-lg mb-7 max-w-[700px]">
                    Now enjoy uniterrupted broadbad wi-fi for you and your
                    family at the best in class prices and dedicated customer
                    service
                  </p>
                </div>
                <Button1>Browse Plans</Button1>
              </div>
              {/* Left Image */}
              <div className="z-30 ml-10 w-full md:w-1/2 lg:w-2/5 mb-8 md:mb-0 relative">
                <img
                  src="/V-1.png"
                  alt="About Us"
                  className="w-11/12 h-11/12 rounded-lg  relative z-20"
                />
              </div>
            </div>
          </div>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center flex items-center space-x-1 font-medium">
            <a href="#about" className="scroll-down">
              Scroll Down{" "}
              <i className="fas fa-arrow-down animate-arrow-down text-[#3572EF]" />
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative bg-[#EAEDF4] max-w-[1712px] mx-auto pt-24 px-8 pb-8">
            <div className="relative mr-10 flex flex-col md:flex-row items-center mt-10 md:mt-10">
              {/* Left Text Content */}
              <div className="md:w-1/2 text-left lg:w-3/5 md:pl-10 relative flex flex-col justify-between">
                {/* Text Paragraph */}
                <div className="relative flex-1 ">
                  <h1
                    className="text-lg sm:text-xl md:text-6xl max-w-[700px] text-black mb-4 z-20 relative "
                    style={{ fontFamily: "MADE Gentle, sans-serif" }}
                  >
                    Unlimited Wi-fi For{" "}
                    <span className="text-[#050C9C]">Everyone</span>
                  </h1>
                  <p className="relative text-xl sm:text-lg md:text-lg mb-7 max-w-[700px]">
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
                  src="/V-2.png"
                  alt="About Us"
                  className="w-11/12 h-11/12 relative z-20"
                />
              </div>
            </div>
          </div>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center flex items-center space-x-1 font-medium">
            <a href="#about" className="scroll-down">
              Scroll Down{" "}
              <i className="fas fa-arrow-down animate-arrow-down text-[#3572EF]" />
            </a>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
