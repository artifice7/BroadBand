import React from "react";
import ContactUs from "../Buttons/contactus";

const HelpSection = () => {
  return (
    <div className="bg-[#7DCDF8]  py-20 px-6 mt-20">
      <div className="max-w-[1670px] mx-auto flex flex-col md:flex-row items-center md:items-start justify-between text-center md:text-left space-y-6 md:space-y-0">
        <h2 className="text-3xl font-extrabold text-[#040B9B] md:w-1/2">
          Can’t decide on a plan?
          <br />
          Let us help you.
        </h2>
        <div className="md:w-1/2 space-y-4 text-lg">
          <p className="text-gray-700">
            Contact us to get personalized recommendations! Our team is here to
            help you choose the plan that best fits your needs.
          </p>
          <ContactUs />
        </div>
      </div>
    </div>
  );
};

export default HelpSection;
