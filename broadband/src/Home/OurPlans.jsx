import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./OurPlans.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState, memo, useCallback } from "react";
import { LazyImage } from "../utils/lazyImage.jsx";

const OurPlans = memo(() => {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const fetchPlans = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxQcSjP2kMBYli50Tv6gczzCwSL3mUfv3wJz9LsR9fEwOs3KIRD0N4MfZmlS7yEXPOT/exec",
        {
          cache: 'force-cache' // Cache the response
        }
      );
      
      if (!response.ok) {
        throw new Error('Failed to fetch plans');
      }
      
      const data = await response.json();
      setPlans(data);
      setError(null);
    } catch (error) {
      console.error("Error fetching plans:", error);
      setError(error.message);
      // Fallback to local data if available
      try {
        const fallbackResponse = await fetch('/plans.json');
        const fallbackData = await fallbackResponse.json();
        setPlans(fallbackData);
      } catch (fallbackError) {
        console.error("Fallback data also failed:", fallbackError);
      }
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPlans();
  }, [fetchPlans]);

  const handleSelectPlan = useCallback(() => {
    navigate("/inquiry");
  }, [navigate]);

  if (loading) {
    return (
      <section id="our-plans" className="py-10 mt-20">
        <div className="flex justify-center items-center min-h-[400px]">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600"></div>
        </div>
      </section>
    );
  }

  if (error && plans.length === 0) {
    return (
      <section id="our-plans" className="py-10 mt-20">
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-4">Our Plans</h3>
          <p className="text-red-500 mb-4">Failed to load plans. Please try again later.</p>
          <button 
            onClick={fetchPlans}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Retry
          </button>
        </div>
      </section>
    );
  }

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
          lazy={true}
          breakpoints={{
            640: { slidesPerView: 1 },
            1000: { slidesPerView: 2 },
            1500: { slidesPerView: 3 },
          }}
        >
          {plans.map((plan, index) => (
            <SwiperSlide key={`${plan.id || index}-${plan.speed}`}>
              <div
                className="bg-white min-h-[600px] lg:min-h-[650px] min-w-[230px] md:min-w-[430px] rounded-xl relative flex flex-col border-2 border-[#ced4da] hover:shadow-xl transition duration-500 ease-in-out transform
                         hover:-translate-y-1 hover:scale-105 hover:border-0"
              >
                {/* Optimized Image with lazy loading */}
                <LazyImage
                  src={plan.image}
                  alt={`${plan.speed} Broadband Plan`}
                  className="h-52 max-w-md object-cover rounded-t-xl"
                />

                {/* Plan Details */}
                <div className="p-8 mb-3 text-left flex-grow">
                  {plan.plans?.map((detail, detailIndex) => (
                    <div
                      className="mb-4 border-b-2 border-gray-300 pb-2"
                      key={`${detailIndex}-${detail.duration}`}
                    >
                      <h3 className="text-base font-semibold">
                        {detail.duration}
                      </h3>
                      <p className="text-gray-500 text-sm">
                        Get @ {detail.price} *
                      </p>
                    </div>
                  )) || (
                    <div className="text-center text-gray-500">
                      Plan details not available
                    </div>
                  )}
                </div>

                {/* Select Plan Button */}
                <div className="px-4 pb-4">
                  <button
                    onClick={handleSelectPlan}
                    className="text-blue-600 font-semibold flex items-center hover:text-blue-800 transition-colors"
                    aria-label={`Select ${plan.speed} plan`}
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
});

OurPlans.displayName = 'OurPlans';

export default OurPlans;
