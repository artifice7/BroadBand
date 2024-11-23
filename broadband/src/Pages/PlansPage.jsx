import Navbar from "../components/Navbar";

const PlansPage = () => {
  return (
    <div className="w-full font-poppins">
      {/* Navbar */}
      <Navbar />
      <section>
        <h3
          className="flex justify-center text-[50px] mt-10 md:mt-10 "
          style={{ fontFamily: "MADE Gentle, sans-serif" }}
        >
          Our Plans
        </h3>
        <p className="text-center text-2xl text-gray-500 mb-2">
          Let&apos;s Discover Our Best Packages
        </p>
        <p className="text-center text-xl text-blue-500 mb-8">
          Starting From ₹383 /months* with unlimited data
        </p>
      </section>
    </div>
  );
};

export default PlansPage;
