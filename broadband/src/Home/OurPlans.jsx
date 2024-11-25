import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./OurPlans.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const OurPlans = () => {
  const [plans, setPlans] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 2000 });

    // Fetch JSON data
    const fetchPlans = async () => {
      try {
        const response = await fetch("/plans.json"); // Ensure the file is in the public folder
        const data = await response.json();
        setPlans(data);
      } catch (error) {
        console.error("Error fetching plans:", error);
      }
    };

    fetchPlans();
  }, []);

  return (
    <section id="our-plans" className="py-10 mt-20">
      <h3
        className="flex justify-center text-3xl sm:text-4xl md:text-5xl mt-10 md:mt-10"
        style={{ fontFamily: "MADE Gentle, sans-serif" }}
        data-aos="fade-up"
        data-aos-delay="200"
      >
        Our Plans
      </h3>
      <p
        className="text-center text-xl sm:text-3xl text-gray-500 mb-2"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        Let&apos;s Discover Our Best Packages
      </p>
      <p
        className="text-center text-lg sm:text-xl md:text-2xl text-blue-500 mb-8"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        Starting From ₹383 /months* with unlimited data
      </p>

      <div className="relative w-full" data-aos="zoom-in-up">
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
          {plans.map((plan, index) => (
            <SwiperSlide key={index}>
              <div
                className="bg-white min-h-[600px] lg:min-h-[650px] min-w-[230px] md:min-w-[430px] rounded-xl relative flex flex-col border-2 border-[#ced4da] hover:shadow-xl transition duration-500 ease-in-out transform
                         hover:-translate-y-1 hover:scale-105 hover:border-0"
              >
                {/* Image */}
                <img
                  src={plan.image}
                  alt={`${plan.speed} Plan Image`}
                  className="h-52 max-w-md object-cover rounded-t-xl"
                />

                {/* Plan Details */}
                <div className="p-8 mb-3 text-left flex-grow">
                  {plan.plans.map((detail, detailIndex) => (
                    <div
                      className="mb-4 border-b-2 border-gray-300 pb-2"
                      key={detailIndex}
                    >
                      <h3 className="text-base font-semibold">
                        {detail.duration}
                      </h3>
                      <p className="text-gray-500 text-sm">
                        Get @ {detail.price} *
                      </p>
                    </div>
                  ))}
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
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default OurPlans;
