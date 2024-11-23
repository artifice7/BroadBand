import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./OurPlans.css";
import { useNavigate } from "react-router-dom";

const OurPlans = () => {
  const navigate = useNavigate();

  return (
    <section className="py-10 mt-20">
      <h3
        className="flex justify-center text-3xl sm:text-4xl md:text-5xl mt-10 md:mt-10 "
        style={{ fontFamily: "MADE Gentle, sans-serif" }}
      >
        Our Plans
      </h3>
      <p className="text-center text-xl sm:text-3xl   md: text-gray-500 mb-2">
        Let&apos;s Discover Our Best Packages
      </p>
      <p className="text-center text-lg sm:text-xl md:text-2xl text-blue-500 mb-8">
        Starting From ₹383 /months* with unlimited data
      </p>

      <div className=" relative w-full">
        <Swiper
          className="custom-swiper"
          modules={[Navigation]}
          navigation={true}
          spaceBetween={40}
          breakpoints={{
            640: { slidesPerView: 1 },
            1000: { slidesPerView: 2 },
            1500: { slidesPerView: 3 },
          }}
        >
          <SwiperSlide>
            <div
              className="bg-white min-h-[550px] lg:min-h-[650px] min-w-[230px] md:min-w-[430px] rounded-xl relative flex flex-col border-2 border-[#ced4da] hover:shadow-xl transition duration-500 ease-in-out transform
                       hover:-translate-y-1 hover:scale-105 hover:border-0"
            >
              {/* Image */}
              <img
                src="/30 Mbps.png"
                alt="Plan Image"
                className="h-52 max-w-md object-cover rounded-t-xl"
              />

              {/* Plan Details */}
              <div className="p-8 mb-3 text-left flex-grow">
                <div className="mb-4 border-b-2 border-gray-300 pb-2">
                  <h3 className="text-base font-semibold">6 MONTHS</h3>
                  <p className="text-gray-500 text-sm">Get @ ₹2300 *</p>
                </div>
                <div className="mb-4 border-b-2 border-gray-300 pb-2">
                  <h3 className="text-base font-semibold">12 MONTHS</h3>
                  <p className="text-gray-500 text-sm">Get @ ₹4200 *</p>
                </div>
                <div className="mb-4 border-b-2 border-gray-300 pb-2">
                  <h3 className="text-base font-semibold">15 MONTHS</h3>
                  <p className="text-gray-500 text-sm">Get @ ₹5100 *</p>
                </div>
              </div>

              {/* Select Plan Button */}
              <div className="px-4 pb-4">
                <button
                  onClick={() => navigate("/inquiry")}
                  className="text-blue-600 font-semibold flex items-center"
                >
                  Select Plan <span className="ml-1">→</span>
                </button>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="bg-white min-h-[550px] lg:min-h-[650px] min-w-[230px] md:min-w-[430px] rounded-xl relative flex flex-col border-2 border-[#ced4da] hover:shadow-xl transition duration-500 ease-in-out transform
                       hover:-translate-y-1 hover:scale-105 hover:border-0 "
            >
              {/* Image */}
              <img
                src="/40 Mbps.png"
                alt="Plan Image"
                className="max-w-md h-52 object-cover rounded-t-xl"
              />

              {/* Plan Details */}
              <div className="p-8 mb-3 text-left flex-grow">
                <div className="mb-4 border-b-2 border-gray-300 pb-2">
                  <h3 className="text-base font-semibold">6 MONTHS</h3>
                  <p className="text-gray-500 text-sm">Get @ ₹3300 *</p>
                </div>
                <div className="mb-4 border-b-2 border-gray-300 pb-2">
                  <h3 className="text-base font-semibold">12 MONTHS</h3>
                  <p className="text-gray-500 text-sm">Get @ ₹5200 *</p>
                </div>
                <div className="mb-4 border-b-2 border-gray-300 pb-2">
                  <h3 className="text-base font-semibold">15 MONTHS</h3>
                  <p className="text-gray-500 text-sm">Get @ ₹6000 *</p>
                </div>
              </div>

              {/* Select Plan Button */}
              <div className="px-4 pb-4">
                <button
                  onClick={() => navigate("/inquiry")}
                  className="text-blue-600 font-semibold flex items-center"
                >
                  Select Plan <span className="ml-1">→</span>
                </button>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="bg-white min-h-[550px] lg:min-h-[650px] min-w-[230px] md:min-w-[430px] rounded-xl relative flex flex-col border-2 border-[#ced4da] hover:shadow-xl transition duration-500 ease-in-out transform
                       hover:-translate-y-1 hover:scale-105 hover:border-0 "
            >
              {/* Image */}
              <img
                src="/50 Mbps.png"
                alt="Plan Image"
                className="max-w-md h-52 object-cover rounded-t-xl"
              />

              {/* Plan Details */}
              <div className="p-8 mb-3 text-left flex-grow">
                <div className="mb-4 border-b-2 border-gray-300 pb-2">
                  <h3 className="text-base font-semibold">6 MONTHS</h3>
                  <p className="text-gray-500 text-sm">Get @ ₹3500 *</p>
                </div>
                <div className="mb-4 border-b-2 border-gray-300 pb-2">
                  <h3 className="text-base font-semibold">12 MONTHS</h3>
                  <p className="text-gray-500 text-sm">Get @ ₹5550 *</p>
                </div>
                <div className="mb-4 border-b-2 border-gray-300 pb-2">
                  <h3 className="text-base font-semibold">15 MONTHS</h3>
                  <p className="text-gray-500 text-sm">Get @ ₹7000 *</p>
                </div>
                <div className="mb-4 border-b-2 border-gray-300 pb-1">
                  <h3 className="text-base font-semibold">18 MONTHS</h3>
                  <p className="text-gray-500 text-sm">Get @ ₹8150 *</p>
                </div>
              </div>

              {/* Select Plan Button */}
              <div className="px-4 pb-4">
                <button
                  onClick={() => navigate("/inquiry")}
                  className="text-blue-600 font-semibold flex items-center"
                >
                  Select Plan <span className="ml-1">→</span>
                </button>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="bg-white min-h-[550px] lg:min-h-[650px] min-w-[230px] md:min-w-[430px] rounded-xl relative flex flex-col border-2 border-[#ced4da] hover:shadow-xl transition duration-500 ease-in-out transform
                       hover:-translate-y-1 hover:scale-105 hover:border-0 "
            >
              {/* Image */}
              <img
                src="/60 Mbps.png"
                alt="Plan Image"
                className="max-w-md h-52 object-cover rounded-t-xl"
              />

              {/* Plan Details */}
              <div className="p-8 mb-3 text-left flex-grow">
                <div className="mb-4 border-b-2 border-gray-300 pb-2">
                  <h3 className="text-base font-semibold">6 MONTHS</h3>
                  <p className="text-gray-500 text-sm">Get @ ₹3800 *</p>
                </div>
                <div className="mb-4 border-b-2 border-gray-300 pb-2">
                  <h3 className="text-base font-semibold">12 MONTHS</h3>
                  <p className="text-gray-500 text-sm">Get @ ₹5750 *</p>
                </div>
                <div className="mb-4 border-b-2 border-gray-300 pb-2">
                  <h3 className="text-base font-semibold">15 MONTHS</h3>
                  <p className="text-gray-500 text-sm">Get @ ₹7250 *</p>
                </div>
                <div className="mb-4 border-b-2 border-gray-300 pb-2">
                  <h3 className="text-base font-semibold">18 MONTHS</h3>
                  <p className="text-gray-500 text-sm">Get @ ₹8250 *</p>
                </div>
              </div>

              {/* Select Plan Button */}
              <div className="px-4 pb-4">
                <button
                  onClick={() => navigate("/inquiry")}
                  className="text-blue-600 font-semibold flex items-center"
                >
                  Select Plan <span className="ml-1">→</span>
                </button>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="bg-white min-h-[550px] lg:min-h-[650px] min-w-[230px] md:min-w-[430px] rounded-xl relative flex flex-col border-2 border-[#ced4da] hover:shadow-xl transition duration-500 ease-in-out transform
                       hover:-translate-y-1 hover:scale-105 hover:border-0 "
            >
              {/* Image */}
              <img
                src="/80 Mbps.png"
                alt="Plan Image"
                className="max-w-md h-52 object-cover rounded-t-xl"
              />

              {/* Plan Details */}
              <div className="p-8 mb-3 text-left flex-grow">
                <div className="mb-4 border-b-2 border-gray-300 pb-2">
                  <h3 className="text-base font-semibold">6 MONTHS</h3>
                  <p className="text-gray-500 text-sm">Get @ ₹4050 *</p>
                </div>
                <div className="mb-4 border-b-2 border-gray-300 pb-2">
                  <h3 className="text-base font-semibold">12 MONTHS</h3>
                  <p className="text-gray-500 text-sm">Get @ ₹6550 *</p>
                </div>
              </div>

              {/* Select Plan Button */}
              <div className="px-4 pb-4">
                <button
                  onClick={() => navigate("/inquiry")}
                  className="text-blue-600 font-semibold flex items-center"
                >
                  Select Plan <span className="ml-1">→</span>
                </button>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="bg-white min-h-[550px] lg:min-h-[650px] min-w-[230px] md:min-w-[430px] rounded-xl relative flex flex-col border-2 border-[#ced4da] hover:shadow-xl transition duration-500 ease-in-out transform
                       hover:-translate-y-1 hover:scale-105  hover:border-0 "
            >
              {/* Image */}
              <img
                src="/100 Mbps.png"
                alt="Plan Image"
                className="max-w-md h-52 object-cover rounded-t-xl"
              />

              {/* Plan Details */}
              <div className="p-8 mb-3 text-left flex-grow">
                <div className="mb-4 border-b-2 border-gray-300 pb-2">
                  <h3 className="text-base font-semibold">6 MONTHS</h3>
                  <p className="text-gray-500 text-sm">Get @ ₹4200 *</p>
                </div>
                <div className="mb-4 border-b-2 border-gray-300 pb-2">
                  <h3 className="text-base font-semibold">12 MONTHS</h3>
                  <p className="text-gray-500 text-sm">Get @ ₹7000 *</p>
                </div>
              </div>

              {/* Select Plan Button */}
              <div className="px-4 pb-4">
                <button
                  onClick={() => navigate("/inquiry")}
                  className="text-blue-600 font-semibold flex items-center"
                >
                  Select Plan <span className="ml-1">→</span>
                </button>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="bg-white min-h-[550px] lg:min-h-[650px] min-w-[230px] md:min-w-[430px] rounded-xl relative flex flex-col border-2 border-[#ced4da] hover:shadow-xl transition duration-500 ease-in-out transform
                       hover:-translate-y-1 hover:scale-105 hover:border-0 "
            >
              {/* Image */}
              <img
                src="/200 Mbps.png"
                alt="Plan Image"
                className="max-w-md h-52 object-cover rounded-t-xl"
              />

              {/* Plan Details */}
              <div className="p-8 mb-3 text-left flex-grow">
                <div className="mb-4 border-b-2 border-gray-300 pb-2">
                  <h3 className="text-base font-semibold">6 MONTHS</h3>
                  <p className="text-gray-500 text-sm">Get @ ₹5750 *</p>
                </div>
                <div className="mb-4 border-b-2 border-gray-300 pb-2">
                  <h3 className="text-base font-semibold">12 MONTHS</h3>
                  <p className="text-gray-500 text-sm">Get @ ₹9999 *</p>
                </div>
              </div>

              {/* Select Plan Button */}
              <div className="px-4 pb-4">
                <button
                  onClick={() => navigate("/inquiry")}
                  className="text-blue-600 font-semibold flex items-center"
                >
                  Select Plan <span className="ml-1">→</span>
                </button>
              </div>
            </div>
          </SwiperSlide>

          {/* Additional SwiperSlides for more cards */}
        </Swiper>
      </div>
    </section>
  );
};

export default OurPlans;
