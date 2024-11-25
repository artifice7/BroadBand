import Navbar from "../components/Navbar";
import TeamSection from "../Home/TeamSection";
import FooterSection from "../Home/FooterSection";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Inquiry = () => {

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="w-full font-poppins">
      {/* About Section */}
      <section className="h-screen bg-[url('/Inquiry.png')] bg-cover bg-center relative">
        {/* Navbar */}
        <Navbar />
        <div className="flex flex-col relative top-1/3 pl-5 sm:pl-10 2xl:pl-32  mx-auto   ">
          <h1
            className="ext-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl  text-black mb-4 z-20 relative "
            style={{ fontFamily: "MADE Gentle, sans-serif" }}
            data-aos="fade-right"
            data-aos-delay="200"
          >
            Inquiry{" "}
          </h1>
          <p className="text-base sm:text-lg md:text-xl font-semibold"
          data-aos="fade-right"
          data-aos-delay="400">
            For any inquiries, we’re here to assist you with the best support.
          </p>
        </div>
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-center flex items-center space-x-1 font-medium">
          <a href="#inquiry" className="scroll-down">
            Scroll Down{" "}
            <i className="fas fa-arrow-down animate-arrow-down text-[#3572EF]" />
          </a>
        </div>
      </section>

      {/* Team Section */}
      <TeamSection className="mt-20" />

      {/* Footer Section */}
      <FooterSection />
    </div>
  );
};

export default Inquiry;
