import React from "react";
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <>
      <div className="w-full font-poppins">
        {/* Navbar */}
        <Navbar />
        {/* About Section */}
        <section className="h-[91vh]  flex flex-col justify-center items-center bg-[url('/About-main.png')] bg-cover bg-center relative">
          <div className="flex flex-col max-w-[1712px] mx-auto  ">
            <h1
              className="text-lg sm:text-xl md:text-6xl text-black mb-4 z-20 relative "
              style={{ fontFamily: "MADE Gentle, sans-serif" }}
            >
              About Us{" "}
            </h1>
            <p className="text-xl font-semibold">
              Reliable broadband services connecting you to high-speed internet
              anytime, anywhere.
            </p>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center flex items-center space-x-1 font-medium">
              <a href="#about" className="scroll-down">
                Scroll Down{" "}
                <i className="fas fa-arrow-down animate-arrow-down text-[#3572EF]" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
