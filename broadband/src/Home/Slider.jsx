import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-scroll";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./styles.css";
import Button1 from "../Buttons/button1";
import "../index.css";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Slider() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={false}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper bg-[#EAEDF4]"
      >
        <link
          href="https://fonts.cdnfonts.com/css/made-gentle"
          rel="stylesheet"
        />
        <SwiperSlide>
          <div className="bg-[#EAEDF4] h-auto max-w-[1712px] lg:mx-auto lg:pt-24 px-8">
            <div className="mr-10 flex flex-col-reverse md:flex-row items-center mt-10 md:mt-10">
              {/* Left Text Content */}
              <div className="md:w-1/2 text-left lg:w-3/5 md:pl-10 flex flex-col justify-between">
                <div className="flex-1">
                  <h1
                    className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl max-w-[700px] text-black mb-4 z-20"
                    style={{ fontFamily: "MADE Gentle, sans-serif" }}
                    data-aos="fade-right"
                    data-aos-delay="200"
                  >
                    Now get double speed in{" "}
                    <span className="text-[#050C9C]">single price</span>
                  </h1>
                  <p className="text-sm sm:text-lg md:text-lg mb-7 max-w-[700px]"
                  data-aos="fade-right"
                  data-aos-delay="400">
                    Now enjoy uninterrupted broadband Wi-Fi for you and your
                    family at the best-in-class prices and dedicated customer
                    service.
                  </p>
                </div>
                <Link
                  to="our-plans"
                  smooth={true}
                  duration={500}
                  className="cursor-pointer"
                >
                  <div data-aos="fade-right"
          data-aos-delay="600">
                  <Button1>Browse Plans</Button1>
                  </div>
                </Link>
              </div>
              {/* Left Image */}
              <div className="z-30 ml-10 w-full md:w-1/2 lg:w-2/5 mb-8 md:mb-0">
                <img
                  src="/V-1.png"
                  alt="About Us"
                  className="w-11/12 h-11/12 rounded-lg z-20"
                  data-aos="fade-left"
                />
              </div>
            </div>
            {/* Scroll Down Link */}
            <div className="absolute left-1/2 transform -translate-x-1/2 text-center flex items-center space-x-1 font-medium">
              <Link
                to="about"
                smooth={true}
                duration={500}
                offset={-100}
                className="cursor-pointer"
              >
                Scroll Down{" "}
                <i className="fas fa-arrow-down animate-arrow-down text-[#3572EF]" />
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#EAEDF4] max-w-[1712px] lg:mx-auto lg:pt-24 px-8">
            <div className="mr-10 flex flex-col-reverse md:flex-row items-center mt-10 md:mt-10">
              {/* Left Text Content */}
              <div className="md:w-1/2 text-left lg:w-3/5 md:pl-10 flex flex-col justify-between">
                <div className="flex-1">
                  <h1
                    className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl max-w-[700px] text-black mb-4 z-20"
                    style={{ fontFamily: "MADE Gentle, sans-serif" }}
                  >
                    Unlimited Wi-fi For{" "}
                    <span className="text-[#050C9C]">Everyone</span>
                  </h1>
                  <p className="text-sm sm:text-base md:text-lg mb-7 max-w-[700px]">
                    Now enjoy uninterrupted broadband Wi-Fi for you and your
                    family at the best-in-class prices and dedicated customer
                    service.
                  </p>
                </div>
                <Link
                  to="our-plans"
                  smooth={true}
                  duration={500}
                  className="cursor-pointer"
                >
                  <Button1>Browse Plans</Button1>
                </Link>
              </div>
              {/* Left Image */}
              <div className="z-30 w-full md:w-1/2 lg:w-2/5 mb-8 md:mb-0">
                <img
                  src="/V-2.png"
                  alt="About Us"
                  className="w-11/12 h-11/12 z-20"
                />
              </div>
            </div>
            {/* Scroll Down Link */}
            <div className="absolute left-1/2 transform -translate-x-1/2 text-center flex items-center space-x-1 font-medium">
              <Link
                to="about"
                smooth={true}
                duration={500}
                offset={-100}
                className="cursor-pointer"
              >
                Scroll Down{" "}
                <i className="fas fa-arrow-down animate-arrow-down text-[#3572EF]" />
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
