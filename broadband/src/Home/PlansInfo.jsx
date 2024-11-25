const PlansInfo = () => {
  const plans = [
    {
      title: "A high-speed router",
      description:
        "Each plan includes a free high-speed router so you get the most out of your internet.",
      icon: "/all_plans/router.svg",
      image: "/plan-1.png",
    },
    {
      title: "Expert installation",
      description:
        "Expert installation is included with every fiber order for free.",
      icon: "/all_plans/installation.svg",
      image: "/plan-2.png",
    },
    {
      title: "Auto Pay discount",
      description:
        "Enjoy monthly savings by setting up and maintaining Auto Pay.",
      icon: "all_plans/discount.svg",
      image: "/plan-3.png",
    },
    {
      title: "Unlimited data",
      description:
        "Unlock more of the internet with unlimited data and no overage charges.",
      icon: "all_plans/unlimited_data.svg",
      image: "/plan-4.png",
    },
  ];

  return (
    <div className="m-4 mt-20 py-10">
      <h2
        style={{ fontFamily: "MADE Gentle, sans-serif" }}
        className="text-center text-3xl sm:text-4xl md:text-5xl mb-8"
      >
        All plans include
      </h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md hover:shadow-xl transition duration-500 ease-in-out transform
                       hover:-translate-y-1 hover:scale-105 p-4 flex items-start space-x-4"
          >
            <img
              src={plan.image}
              alt={plan.title}
              className="w-32 h-32 md:w-52 md:h-32 rounded object-cover"
            />
            <div className="flex flex-col justify-between">
              <img
                className="w-5 h-5 md:w-8 md:h-8 mb-4"
                src={plan.icon}
                alt={plan.title}
              />
              <h3 className="text-lg font-extrabold">{plan.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{plan.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlansInfo;
