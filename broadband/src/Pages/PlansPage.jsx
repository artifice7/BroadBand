import Navbar from "../components/Navbar";
import FooterSection from "../Home/FooterSection";
import { useNavigate } from "react-router-dom";

const plansData = [
  {
    speed: 30,
    image: "/30 Mbps.png",
    pricing: {
      "6 MONTHS": 2300,
      "12 MONTHS": 4200,
      "15 MONTHS": 5100,
    },
  },
  {
    speed: 40,
    image: "/40 Mbps.png",
    pricing: {
      "6 MONTHS": 3300,
      "12 MONTHS": 5200,
      "15 MONTHS": 6000,
    },
  },
  {
    speed: 50,
    image: "/50 Mbps.png",
    pricing: {
      "6 MONTHS": 3500,
      "12 MONTHS": 5550,
      "15 MONTHS": 7000,
    },
  },
  {
    speed: 60,
    image: "/60 Mbps.png",
    pricing: {
      "6 MONTHS": 3800,
      "12 MONTHS": 5750,
      "15 MONTHS": 7250,
    },
  },
  {
    speed: 80,
    image: "/80 Mbps.png",
    pricing: {
      "6 MONTHS": 4050,
      "12 MONTHS": 6550,
    },
  },
  {
    speed: 100,
    image: "/100 Mbps.png",
    pricing: {
      "6 MONTHS": 4200,
      "12 MONTHS": 7000,
    },
  },
  {
    speed: 200,
    image: "/200 Mbps.png",
    pricing: {
      "6 MONTHS": 5750,
      "12 MONTHS": 9999,
    },
  },
];

// const morePlansData = [
//   {
//     speed: 40,
//     image: "/40 Mbps.png",
//     pricing: {
//       "6 MONTHS": 3300,
//       "12 MONTHS": 5200,
//       "15 MONTHS": 6000,
//     },
//     features: "Amazon Prime, Hotstar, Sony Liv, Zee5, Voot, Shemaroo, Playbox",
//   },
//   {
//     speed: 50,
//     image: "/50 Mbps.png",
//     pricing: {
//       "6 MONTHS": 3500,
//       "12 MONTHS": 5550,
//       "15 MONTHS": 7000,
//     },
//     features: "Amazon Prime, Hotstar, Sony Liv, Zee5, Voot, Shemaroo, Playbox",
//   },
//   {
//     speed: 60,
//     image: "/60 Mbps.png",
//     pricing: {
//       "6 MONTHS": 3800,
//       "12 MONTHS": 5750,
//       "15 MONTHS": 7250,
//     },
//     features: "Amazon Prime, Hotstar, Sony Liv, Zee5, Voot, Shemaroo, Playbox",
//   },
//   {
//     speed: 80,
//     image: "/80 Mbps.png",
//     pricing: {
//       "6 MONTHS": 4050,
//       "12 MONTHS": 6550,
//     },
//     features: "Amazon Prime, Hotstar, Sony Liv, Zee5, Voot, Shemaroo, Playbox",
//   },
//   {
//     speed: 100,
//     image: "/100 Mbps.png",
//     pricing: {
//       "6 MONTHS": 4200,
//       "12 MONTHS": 7000,
//     },
//     features: "Amazon Prime, Hotstar, Sony Liv, Zee5, Voot, Shemaroo, Playbox",
//   },
//   {
//     speed: 200,
//     image: "/200 Mbps.png",
//     pricing: {
//       "6 MONTHS": 5750,
//       "12 MONTHS": 9999,
//     },
//     features: "Amazon Prime, Hotstar, Sony Liv, Zee5, Voot, Shemaroo, Playbox",
//   },
// ];

const PlansPage = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full font-poppins">
      {/* About Section */}
      <section className="h-screen bg-[url('/our-plan-main.png')] bg-cover bg-center relative">
        {/* Navbar */}
        <Navbar />
        <div className="flex flex-col relative top-1/3 max-w-[1650px] mx-auto">
          <h1
            className="text-lg sm:text-xl md:text-6xl lg:text-7xl text-black mb-4 z-20 relative"
            style={{ fontFamily: "MADE Gentle, sans-serif" }}
          >
            Our Plans
          </h1>
          <p className="text-xl font-semibold">
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
          <h2 className="text-4xl font-bold text-center mb-6">
            Let’s Discover Our Best Packages
          </h2>
          <p className="text-lg text-center text-[#3672EF] mb-12">
            Starting From ₹383 /month* with unlimited data
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 place-items-center">
            {/* Map through plansData */}
            {plansData.map((plan, index) => (
              <div
                key={index}
                className="min-h-[550px] lg:min-h-[650px] min-w-[230px] lg:min-w-[430px] max-w-[430px] rounded-xl relative flex flex-col border-2 border-[#ced4da] hover:shadow-xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:border-0"
              >
                {/* Image */}
                <img
                  src={plan.image}
                  alt={`${plan.speed} Mbps Plan`}
                  className="h-52 max-w-md object-cover rounded-t-xl"
                />

                {/* Plan Details */}
                <div className="p-8 mb-3 text-left flex-grow">
                  {Object.entries(plan.pricing).map(([duration, price]) => (
                    <div
                      key={duration}
                      className="mb-4 border-b-2 border-gray-300 pb-2"
                    >
                      <h3 className="text-base font-semibold">{duration}</h3>
                      <p className="text-gray-500 text-sm">{`Get @ ₹${price} *`}</p>
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

      {/* <section id="more-plans" className="py-16">
        <div className="max-w-[1650px] mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-6">
            Let’s Discover Our Endless Entertainment Package
          </h2>
          <p className="text-lg text-center text-[#3672EF] mb-12">
            Starting From ₹383 /month* with unlimited data & 18+ OTT apps
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 place-items-center">
            {morePlansData.map((plan, index) => (
              <div
                key={index}
                className="min-h-[550px] lg:min-h-[650px] min-w-[230px] lg:min-w-[430px] max-w-[430px] rounded-xl relative flex flex-col border-2 border-[#ced4da] hover:shadow-xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:border-0"
              >
                <img
                  src={plan.image}
                  alt={`${plan.speed} Mbps Plan`}
                  className="h-52 object-cover rounded-t-xl"
                />
                <div className="flex pl-8 pt-8 items-start">
                  <span className="flex mt-2 items-center justify-center w-4 h-4 bg-blue-600 rounded-full mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="white"
                      className="w-5 h-5"
                    >
                      <path d="M9 16.2l-4.2-4.2-1.4 1.4L9 19 20.6 7.4l-1.4-1.4z" />
                    </svg>
                  </span>
                  <p>{plan.features}</p>
                </div>
                <div className="p-8 pb-1 text-left flex-grow">
                  {Object.entries(plan.pricing).map(([duration, price]) => (
                    <div
                      key={duration}
                      className="mb-4 border-gray-300 border-b-2 pb-2"
                    >
                      <h3 className="text-base font-semibold">{duration}</h3>
                      <p className="text-gray-500 text-sm">{`Get @ ₹${price} *`}</p>
                    </div>
                  ))}
                </div>
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
      </section> */}

      {/* Footer Section */}
      <FooterSection />
    </div>
  );
};

export default PlansPage;
