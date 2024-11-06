import React from "react";
import AboutSection from "./AboutSection";
import Slider from "./Slider";
import Navbar from "../components/Navbar"; // Add this line to import the Navbar component

const Home = () => {
  return (
    <>
      <Navbar />
      <Slider />
      <div className="relative max-w-[1712px] mx-auto pt-24 px-8 pb-8 ">
        <AboutSection />{" "}
        {/* Add this line to render the AboutSection component */}
      </div>
    </>
  );
};

export default Home;
