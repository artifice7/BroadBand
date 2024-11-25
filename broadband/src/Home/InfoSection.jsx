import Button1 from "../Buttons/button1";

const InfoSection = () => {
  return (
    <section className="flex max-w-[1780px] mx-auto mt-20 flex-col-reverse lg:flex-row items-center justify-between p-8 lg:p-16 rounded-lg">
      {/* Left Text Section */}
      <div className="lg:w-1/2 space-y-6">
        <h2
          style={{ fontFamily: "MADE Gentle, sans-serif" }}
          className="text-3xl lg:text-4xl leading-snug"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          We are no. 1 internet service provider company in{" "}
          <span className="text-[#040B9B]">Porbandar</span>
        </h2>
        <p
          className="text-lg leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <strong>AKASH BROADBAND Pvt. Ltd.</strong> is one of Gujarat’s leading
          high-speed internet providers. Our internet services can reach all
          households in all the areas of Porbandar. AKASH BROADBAND Pvt. Ltd.
          provides the best internet plans all over Porbandar with high speeds
          and at reasonable prices. Our customer services are also available for
          all our customers 7 days a week, and we provide the best and most
          satisfying solutions for all your internet problems in a short span of
          time. Customer satisfaction is our main goal.
        </p>
        {/* Icons Section */}
        <div className="flex md:flex-row flex-col md:space-x-8 text-blue-700 mt-4">
          <div
            className="flex items-center space-x-3"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <img
              className="w-12 h-12"
              src="/InfoSection/customer_service.png"
              alt="Customer Service Icon"
            />
            <div className="text-left md:text-center">
              <span className="text-2xl font-bold">24 X 7 HR</span>
              <p className="text-md text-black font-medium">Customer Support</p>
            </div>
          </div>
          <div
            className="flex items-center mt-5 md:mt-0 space-x-3"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <img
              className="w-12 h-12"
              src="/InfoSection/wifi.png"
              alt="Wifi Icon"
            />
            <div className="text-left md:text-center">
              <span className="text-2xl font-bold">300+</span>
              <p className="text-md text-black font-medium">
                Mbps Speed Internet
              </p>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-delay="600">
          <Button1>TRY US FREE</Button1>
        </div>
      </div>

      {/* Right Image Section */}
      <div
        className="lg:w-1/2 mb-20 mt-8 lg:mt-0 flex justify-center lg:justify-end"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <img
          src="/About-Last.jpg"
          alt="Girl using internet"
          className="rounded-lg w-4/5 h-auto shadow-lg lg:min-h-[550px] object-cover"
        />
      </div>
    </section>
  );
};

export default InfoSection;
