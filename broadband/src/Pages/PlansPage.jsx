import { useState, useEffect, memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import FooterSection from "../Home/FooterSection";
import { LazyImage } from "../utils/lazyImage.jsx";

const PlansPage = memo(() => {
  const navigate = useNavigate();
  const [plansData, setPlansData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPlans = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxQcSjP2kMBYli50Tv6gczzCwSL3mUfv3wJz9LsR9fEwOs3KIRD0N4MfZmlS7yEXPOT/exec",
        {
          cache: 'force-cache'
        }
      );
      
      if (!response.ok) {
        throw new Error('Failed to fetch plans');
      }
      
      const data = await response.json();
      setPlansData(data);
      setError(null);
    } catch (error) {
      console.error("Error fetching plans data:", error);
      setError(error.message);
      // Fallback to local data if available
      try {
        const fallbackResponse = await fetch('/plans.json');
        const fallbackData = await fallbackResponse.json();
        setPlansData(fallbackData);
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

  return (
    <div className="w-full font-poppins">
      {/* Hero Section with optimized background */}
      <section className="h-screen relative overflow-hidden">
        {/* Background Image - Lazy loaded but with placeholder */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-blue-100">
          <LazyImage
            src="/our-plan-main.png"
            alt="Our Plans Hero Background"
            className="w-full h-full object-cover"
            placeholder="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIGZpbGw9IiNFQUVERjQiLz4KPHN2Zz4K"
          />
        </div>
        
        <Navbar />
        <div className="flex flex-col relative top-1/3 pl-5 sm:pl-10 2xl:pl-32 mx-auto z-10">
          <h1
            className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-black mb-4 z-20 relative"
            style={{ fontFamily: "MADE Gentle, sans-serif" }}
            data-aos="fade-right"
            data-aos-delay="200"
          >
            Our Plans
          </h1>
          <p
            className="text-base sm:text-lg md:text-xl font-semibold"
            data-aos="fade-right"
            data-aos-delay="400"
          >
            For any inquiries, we're here to assist you with the best support.
          </p>
        </div>
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-center flex items-center space-x-1 font-medium z-10">
          <a href="#our-plans" className="scroll-down" aria-label="Scroll to plans section">
            Scroll Down{" "}
            <i className="fas fa-arrow-down animate-arrow-down text-[#3572EF]" />
          </a>
        </div>
      </section>

      {/* Our Plans Section */}
      <section id="our-plans" className="py-16">
        <div className="max-w-[1650px] mx-auto px-4">
          <h2
            className="text-4xl font-bold text-center mb-6"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Let's Discover Our Best Packages
          </h2>
          <p
            className="text-lg text-center text-[#3672EF] mb-12"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Starting From ₹383 /month* with unlimited data
          </p>
          
          {loading ? (
            <div className="flex justify-center items-center min-h-[400px]">
              <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600"></div>
            </div>
          ) : error && plansData.length === 0 ? (
            <div className="text-center">
              <p className="text-red-500 mb-4">Failed to load plans. Please try again later.</p>
              <button 
                onClick={fetchPlans}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Retry
              </button>
            </div>
          ) : (
            <div
              className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 place-items-center"
              data-aos="zoom-in-up"
            >
              {/* Map through plansData */}
              {plansData.map((plan) => (
                <div
                  key={`${plan.id || plan.speed}`}
                  className="min-h-[550px] lg:min-h-[650px] min-w-[230px] lg:min-w-[430px] max-w-[430px] rounded-xl relative flex flex-col border-2 border-[#ced4da] hover:shadow-xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:border-0"
                >
                  {/* Optimized Image */}
                  <LazyImage
                    src={plan.image}
                    alt={`${plan.speed} Broadband Plan`}
                    className="h-52 max-w-md object-cover rounded-t-xl"
                  />

                  {/* Plan Details */}
                  <div className="p-8 mb-3 text-left flex-grow">
                    {plan.plans?.map(({ duration, price }, idx) => (
                      <div
                        key={`${idx}-${duration}`}
                        className="mb-4 border-b-2 border-gray-300 pb-2"
                      >
                        <h3 className="text-base font-semibold">{duration}</h3>
                        <p className="text-gray-500 text-sm">{`Get @ ${price} *`}</p>
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
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Footer Section */}
      <FooterSection />
    </div>
  );
});

PlansPage.displayName = 'PlansPage';

export default PlansPage;
