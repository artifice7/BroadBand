import React from "react";
import Navbar from "../components/navbar";
import AboutSection from "./AboutSection";

const Home = () => {
  return (
    <>
        <Navbar />
      <div className="relative max-w-[1712px] mx-auto pt-24 px-8 pb-8 ">
        <div>
          <h1 className="text-xl font-bold">Welcome to the Home Page</h1>
          <p>This is the home page of the broadband application.</p>
        </div>
        <AboutSection /> {/* Add this line to render the AboutSection component */}
      </div>
    </>
  );
};

export default Home;
