const AboutSection = () => {
  return (
    <section id="about">
      <h3
        className="flex justify-center text-[50px]"
        data-aos="fade-up"
        style={{ fontFamily: "MADE Gentle, sans-serif" }}
      >
        About Us
      </h3>
      <div className="relative flex flex-col xl:flex-row items-start mt-10 md:mt-10">
        {/* Left Image */}
        <div
          className="z-30 w-full md:w-4/5 xl:w-3/5 mb-8 md:mb-0 self-center relative"
          data-aos="fade-up"
        >
          <img
            src="/About.jpg"
            alt="About Us"
            className="w-11/12 h-11/12 rounded-lg shadow-lg relative z-20"
          />
        </div>

        {/* Right Text Content */}
        <div className="w-full mt-10 xl:mt-0 xl:pl-10 text-[#252B42] space-y-6">
          <p
            className="text-lg leading-relaxed font-gentle"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Welcome to SUDAMA TELECOM Pvt. Ltd. in Porbandar! 🌐 We are
            committed to providing fast, reliable internet services tailored to
            meet your needs. Our mission is to keep you connected to what
            matters most, whether you’re working from home 💻, streaming your
            favorite shows 🎬, or enjoying online gaming 🎮.
          </p>

          <h1
            className="text-2xl font-bold"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Why Choose Us?
          </h1>

          <ul
            className="space-y-4 text-lg"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <li className="flex items-start">
              <span className="flex mt-2 items-center justify-center w-4 h-4 bg-blue-600 rounded-full mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="white"
                  className="w-3 h-3"
                >
                  <path d="M9 16.2l-4.2-4.2-1.4 1.4L9 19 20.6 7.4l-1.4-1.4z" />
                </svg>
              </span>
              <p>
                <span className="font-bold">High-Speed Connectivity:</span>{" "}
                Experience lightning-fast internet speeds that enhance your
                online activities.
              </p>
            </li>
            <li className="flex items-start">
              <span className="flex mt-2 items-center justify-center w-4 h-4 bg-blue-600 rounded-full mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="white"
                  className="w-3 h-3"
                >
                  <path d="M9 16.2l-4.2-4.2-1.4 1.4L9 19 20.6 7.4l-1.4-1.4z" />
                </svg>
              </span>
              <p>
                <span className="font-bold">Affordable Plans: </span> We offer a
                range of budget-friendly plans designed to fit every
                household&apos;s needs.
              </p>
            </li>
            <li className="flex items-start">
              <span className="flex mt-2 items-center justify-center w-4 h-4 bg-blue-600 rounded-full mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="white"
                  className="w-3 h-3"
                >
                  <path d="M9 16.2l-4.2-4.2-1.4 1.4L9 19 20.6 7.4l-1.4-1.4z" />
                </svg>
              </span>
              <p>
                <span className="font-bold">Local Support: </span>
                Our dedicated support team is always ready to assist you with
                any queries or issues. 🤝
              </p>
            </li>
            <li className="flex items-start">
              <span className="flex mt-2 items-center justify-center w-4 h-4 bg-blue-600 rounded-full mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="white"
                  className="w-3 h-3"
                >
                  <path d="M9 16.2l-4.2-4.2-1.4 1.4L9 19 20.6 7.4l-1.4-1.4z" />
                </svg>
              </span>
              <p>
                <span className="font-bold">Community Focused: </span>
                Proudly serving the Porbandar community, we understand the local
                needs and priorities.
              </p>
            </li>
          </ul>

          <p className="text-lg mt-6" data-aos="fade-up" data-aos-delay="500">
            Join us at SUDAMA TELECOM Pvt. Ltd. for seamless connectivity and
            exceptional service. ✨ Together, let&apos;s make your online
            experience better than ever!
          </p>
          <p className="text-lg mt-4" data-aos="fade-up" data-aos-delay="600">
            <i className="fas fa-phone-alt text-blue-500 mr-2 transform rotate-90"></i>
            <a href="tel:+919328291290">+91 9328291290,</a>{" "}
            <a href="tel:+919624340302">+91 9624340302</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
