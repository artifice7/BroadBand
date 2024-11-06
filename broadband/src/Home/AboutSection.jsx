import React from "react";

const AboutSection = () => {
  return (
    <section>
      <h3 className="flex justify-center font-bold text-[50px] mt-10 md:mt-10 ">
        About Us
      </h3>
      <div className="relative flex flex-col md:flex-row items-center mt-10 md:mt-10">
        {/* Left Image */}
        <div className="z-30 w-full md:w-1/2 lg:w-2/5 mb-8 md:mb-0 relative">
          <img
            src="/About.jpg"
            alt="About Us"
            className="w-11/12 h-11/12 rounded-lg shadow-lg relative z-20"
          />
        </div>

        {/* Right Text Content */}
        <div className="md:w-1/2 lg:w-3/5 md:pl-10 relative flex flex-col justify-between">
          {/* Text Paragraph */}
          <div className="relative flex-1 ">
            <p className="relative text-xl sm:text-lg md:text-lg mb-7">
              Welcome to AKASH BROADBAND in Porbandar! 🌐 We are committed to
              providing fast, reliable internet services tailored to meet your
              needs. Our mission is to keep you connected to what matters most,
              whether you’re working from home 💻, streaming your favorite shows
              🎬, or enjoying online gaming 🎮.
            </p>
          </div>
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-4 z-20 relative">
            Why Choose Us?
          </h1>
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-xl font-semibold mb-2 z-20 relative">
            Empowering Businesses with Next-Gen Technology Solutions
          </h3>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
