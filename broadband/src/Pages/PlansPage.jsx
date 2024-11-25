import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../components/Navbar";
import FooterSection from "../Home/FooterSection";

const PlansPage = () => {
  const navigate = useNavigate();
  const [plansData, setPlansData] = useState([]);

  useEffect(() => {
    // Initialize AOS
    AOS.init({ duration: 2000 });

    // Fetch data from /plans.json
    const fetchPlans = async () => {
      try {
        const response = await fetch(
          "https://script.google.com/macros/s/AKfycbxQcSjP2kMBYli50Tv6gczzCwSL3mUfv3wJz9LsR9fEwOs3KIRD0N4MfZmlS7yEXPOT/exec",
        );
        const data = await response.json();
        setPlansData(data);
      } catch (error) {
        console.error("Error fetching plans data:", error);
      }
    };

    fetchPlans();
  }, []);

  return (
    <div className="w-full font-poppins">
      {/* About Section */}
      <section className="h-screen bg-[url('/our-plan-main.png')] bg-cover bg-center relative">
        <Navbar />
        <div className="flex flex-col relative top-1/3 pl-5 sm:pl-10 2xl:pl-32 mx-auto">
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
            For any inquiries, we’re here to assist you with the best support.
          </p>
        </div>
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-center flex items-center space-x-1 font-medium">
          <a href="#our-plans" className="scroll-down">
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
            Let’s Discover Our Best Packages
          </h2>
          <p
            className="text-lg text-center text-[#3672EF] mb-12"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Starting From ₹383 /month* with unlimited data
          </p>
          <div
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 place-items-center"
            data-aos="zoom-in-up"
          >
            {/* Map through plansData */}
            {plansData.map((plan) => (
              <div
                key={plan.id}
                className="min-h-[550px] lg:min-h-[650px] min-w-[230px] lg:min-w-[430px] max-w-[430px] rounded-xl relative flex flex-col border-2 border-[#ced4da] hover:shadow-xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:border-0"
              >
                {/* Image */}
                <img
                  src={plan.image}
                  alt={`${plan.speed} Plan`}
                  className="h-52 max-w-md object-cover rounded-t-xl"
                />

                {/* Plan Details */}
                <div className="p-8 mb-3 text-left flex-grow">
                  {plan.plans.map(({ duration, price }, idx) => (
                    <div
                      key={idx}
                      className="mb-4 border-b-2 border-gray-300 pb-2"
                    >
                      <h3 className="text-base font-semibold">{duration}</h3>
                      <p className="text-gray-500 text-sm">{`Get @ ${price} *`}</p>
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
            ))}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <FooterSection />
    </div>
  );
};

export default PlansPage;
