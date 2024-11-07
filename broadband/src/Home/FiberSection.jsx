const FiberSection = () => {
  const features = [
    {
      title: "Join our network founded on the speed of light",
      image: "/R-1.png",
    },
    {
      title: "Depend on ultra-durable, reliable connections",
      image: "/R-2.png",
    },
    {
      title:
        "Get enough bandwidth for all of your devices, even during high demand",
      image: "/R-3.png",
    },
  ];

  return (
    <div className="py-10 px-6 mt-20">
      <div className="text-center mb-8">
        <h2
          style={{ fontFamily: "MADE Gentle, sans-serif" }}
          className="text-5xl font-bold text-gray-900"
        >
          Future-proof your home with fiber
        </h2>
        <p className="text-[#3571EF]">
          As technology advances and your online needs grow, our fiber-optic
          technology has you covered.
        </p>
      </div>
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-6">
        <div className="space-y-6">
          {features.slice(0, 2).map((feature, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg bg-black bg-opacity-60"
            >
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full object-cover opacity-70 h-80"
              />
              <div className="absolute inset-0 top-4 left-2 px-4 text-white font-bold text-lg">
                {feature.title}
              </div>
            </div>
          ))}
        </div>
        <div className="relative overflow-hidden rounded-lg bg-black bg-opacity-60">
          <img
            src={features[2].image}
            alt={features[2].title}
            className="w-full lg:h-auto h-96 object-cover opacity-70"
          />
          <div className="absolute inset-0 top-4 left-2 px-4 text-white font-bold text-lg">
            {features[2].title}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FiberSection;
