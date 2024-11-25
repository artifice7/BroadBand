import { useState, useEffect } from "react";
import { z } from "zod";
import Button1 from "../Buttons/button1";

const formSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters long"),
  phone: z.string().regex(/^[0-9]{10}$/, "Phone number must be 10 digits"),
  email: z.string().email("Invalid email address"),
  months: z.string().min(1, "Please select a valid month option"),
  speed: z.string().min(1, "Please select a valid speed option"),
});

const TeamSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    months: "",
    speed: "",
  });

  const [errors, setErrors] = useState({});
  const [plans, setPlans] = useState([]);
  const [availableSpeeds, setAvailableSpeeds] = useState([]);
  const [availableMonths, setAvailableMonths] = useState([]);

  useEffect(() => {
    fetch(
      "https://script.google.com/macros/s/AKfycbxQcSjP2kMBYli50Tv6gczzCwSL3mUfv3wJz9LsR9fEwOs3KIRD0N4MfZmlS7yEXPOT/exec",
    )
      .then((response) => response.json())
      .then((data) => {
        setPlans(data);
        setAvailableSpeeds(data.map((plan) => plan.speed)); // Extract available speeds
      })
      .catch((error) => console.error("Error fetching plans:", error));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({ ...prevData, [name]: value }));

    if (errors[name]) {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
    }

    if (name === "speed") {
      const selectedPlan = plans.find((plan) => plan.speed === parseInt(value));
      setAvailableMonths(selectedPlan?.plans.map((p) => p.duration) || []);
      setFormData((prevData) => ({ ...prevData, months: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      formSchema.parse(formData);

      const message = `Hi, my name is ${formData.name} and this is my phone number ${formData.phone}, with my mail ${formData.email}, and I want to know more about ${formData.speed} Mbps plan for ${formData.months} months`;

      const encodedMessage = encodeURIComponent(message);

      const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER;
      const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

      window.open(whatsappURL, "_blank");
    } catch (error) {
      if (error instanceof z.ZodError) {
        const errorMap = error.errors.reduce((acc, err) => {
          acc[err.path[0]] = err.message;
          return acc;
        }, {});
        setErrors(errorMap);
      }
    }
  };

  return (
    <section
      id="inquiry"
      className="flex max-w-[1780px] mx-auto flex-col mt-20 lg:flex-row items-center justify-around p-8 lg:p-16 rounded-lg"
    >
      {/* Left Image Section */}
      <div className="lg:w-1/2 mb-8 lg:mb-0 flex justify-start">
        <div className="relative">
          <img
            src="best-team.png"
            alt="Team working together"
            className="md:w-full h-72 md:h-96 xl:h-[500px] object-cover"
            data-aos="fade-right"
            data-aos-delay="200"
          />
        </div>
      </div>

      {/* Right Form Section */}
      <div className="lg:w-1/2 space-y-6">
        <h2
          style={{ fontFamily: "MADE Gentle, sans-serif" }}
          className="text-2xl lg:text-4xl text-gray-800 mb-20"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          We’re committed to providing top-notch service at all times.
        </h2>
        <form
          onSubmit={handleSubmit}
          className="space-y-8"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <input
                type="text"
                name="name"
                placeholder="Name*"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>
            <div className="flex-1">
              <input
                type="text"
                name="phone"
                placeholder="Phone*"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
              )}
            </div>
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email*"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>
          <div className="flex flex-col lg:flex-row gap-4">
            <select
              name="speed"
              value={formData.speed}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Speed (Mbps)*</option>
              {availableSpeeds.map((speed) => (
                <option key={speed} value={speed}>
                  {speed} Mbps
                </option>
              ))}
            </select>
            <select
              name="months"
              value={formData.months}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={!availableMonths.length}
            >
              <option value="">Select Months*</option>
              {availableMonths.map((month) => (
                <option key={month} value={month}>
                  {month}
                </option>
              ))}
            </select>
          </div>
          <div className="-translate-x-1.5">
            <Button1 type="submit">Submit</Button1>
          </div>
        </form>
      </div>
    </section>
  );
};

export default TeamSection;
