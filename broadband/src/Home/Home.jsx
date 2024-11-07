import AboutSection from "./AboutSection";
import Slider from "./Slider";
import Navbar from "../components/Navbar";
import OurPlans from "./OurPlans";
import PlansInfo from "./PlansInfo";
import HelpSection from "./HelpSection";
import FiberSection from "./FiberSection";
import InfoSection from "./InfoSection";
import TeamSection from "./TeamSection";

const Home = () => {
  return (
    <>
      <Navbar />
      <Slider />
      <div className="relative max-w-[1712px] mx-auto pt-24 px-8 pb-8 ">
        <AboutSection />{" "}
      </div>
      <OurPlans />
      <PlansInfo />
      <HelpSection />
      <FiberSection />
      <InfoSection />
      <TeamSection />
    </>
  );
};

export default Home;
