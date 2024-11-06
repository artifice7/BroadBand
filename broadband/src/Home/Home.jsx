import AboutSection from "./AboutSection";
import Slider from "./Slider";
import Navbar from "../components/Navbar"; // Add this line to import the Navbar component
import OurPlans from "./OurPlans";

const Home = () => {
  return (
    <>
      <Navbar />
      <Slider />
      <div className="relative max-w-[1712px] mx-auto pt-24 px-8 pb-8 ">
        <AboutSection />{" "}
        {/* Add this line to render the AboutSection component */}
      </div>
      <OurPlans />
    </>
  );
};

export default Home;
