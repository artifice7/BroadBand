import { Instagram } from "react-feather";

const FooterSection = () => {
  const handleInstagramClick = () => {
    window.open(
      "https://www.instagram.com/akash_broadband_porbandar/",
      "_blank",
    );
  };

  return (
    <div className="mt-20">
      <div className="py-10 px-6 mx-auto">
        {/* Wrapper */}
        <div className="flex flex-col lg:flex-row lg:justify-between ">
          {/* Column 1: Contact Details */}
          <div className="w-full lg:border-r-2 pb-8 flex flex-col lg:items-center border-t-2 border-gray-300 pt-8 pr-5 lg:w-1/4 space-y-4">
            <img
              src="/Main-logo.png"
              className="h-12 w-52"
              alt="Flowbite Logo"
            />
            <h3 className="text-2xl font-semibold text-black">
              Get In Touch With Us
            </h3>
            <p className="text-sm text-gray-600">
              Nr. Dr. Bharat Shah Ravliya Plot, Porbandar 360575
            </p>
            <button
              onClick={handleInstagramClick}
              className="flex items-center"
            >
              <Instagram className="mr-2" />
            </button>
          </div>

          {/* Column 2: About Company */}
          <div className="w-full lg:border-r-2 pb-8 flex flex-col lg:items-center lg:text-center border-t-2 border-gray-300 pt-8 pr-5 lg:w-1/4 space-y-4">
            <h3 className="text-2xl font-semibold text-black">About Company</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>
                <a href="#" className="hover:text-blue-500">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Our Plans
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="w-full lg:border-r-2 flex flex-col lg:items-center pb-8 text-left border-t-2 border-gray-300 pt-8 pr-5 lg:w-1/4 space-y-6">
            <h3 className="text-2xl font-semibold text-black">Contact Info</h3>

            {/* Phone Section */}
            <div>
              <div className="flex items-start mb-4">
                <img
                  className="w-8 h-8 mr-4"
                  src="/InfoSection/customer_service.png"
                  alt="Customer Service Icon"
                />
                <div>
                  <p className="text-lg text-gray-500 font-medium mb-1">
                    Call us 24/7
                  </p>
                  <p className="text-base text-black">
                    <a href="tel:+919328291290">+91 9328291290</a>
                  </p>
                  <p className="text-base text-black">
                    <a href="tel:+919624340302">+91 9624340302</a>
                  </p>
                </div>
              </div>

              {/* Email Section */}
              <div className="flex items-start">
                <img
                  className="w-8 h-6 mr-4"
                  src="/mail.png"
                  alt="Email Icon"
                />
                <div>
                  <p className="text-lg text-gray-500 font-medium mb-1">
                    Email Us
                  </p>
                  <p className="text-base text-black">
                    akashbroadbandpbr@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 4: Office Timing */}
          <div className="w-full flex flex-col lg:items-center pb-8 border-t-2 border-gray-300 pt-8 pr-5 lg:w-1/4 space-y-4">
            <h3 className="text-2xl font-semibold text-black">Office Timing</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li className="flex flex-col pb-2 justify-between">
                <p>Monday - Friday</p>
                <p className="font-bold text-black">10:00 AM – 07:00 PM</p>
              </li>
              <li className="flex flex-col pb-2 justify-between">
                <p>Saturday</p>
                <p className="font-bold text-black">10:00 AM – 01:00 PM</p>
              </li>
              <li className="flex flex-col pb-2 justify-between">
                <p>Sunday</p>
                <p className="text-[#3571EF] font-bold">Close</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center py-4 bg-[#141928] mt-4 text-white text-md">
        © 2024 <strong>SUDAMA TELECOM Pvt. Ltd.</strong> - All rights reserved.
        Website designed and developed by
        <a href="https://www.artificelabs.com" className="font-semibold">
          {" "}
          Artifice Labs
        </a>
      </div>
    </div>
  );
};

export default FooterSection;
