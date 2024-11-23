import { useState } from "react";
import Button1 from "../Buttons/button1";

const TeamSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    months: "",
    speed: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));

    if (errors[name]) {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
    }
  };

  const validateForm = () => {
    let isValid = true;
    let errors = {};

    if (!formData.name) {
      errors.name = "Name is required";
      isValid = false;
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (!formData.phone) {
      errors.phone = "Phone is required";
      isValid = false;
    } else if (!phoneRegex.test(formData.phone)) {
      errors.phone = "Phone number must be 10 digits";
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      errors.email = "Invalid email address";
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Form submitted successfully");
    }
  };

  return (
    <section className="flex max-w-[1780px] mx-auto flex-col mt-20 lg:flex-row items-center justify-around p-8 lg:p-16 rounded-lg">
      {/* Left Image Section */}
      <div className="lg:w-1/2 mb-8 lg:mb-0 flex justify-start">
        <div className="relative">
          <img
            src="best-team.png"
            alt="Team working together"
            className="md:w-full h-72 md:h-96 xl:h-[500px] object-cover"
          />
        </div>
      </div>

      {/* Right Form Section */}
      <div className="lg:w-1/2 space-y-6">
        <h2
          style={{ fontFamily: "MADE Gentle, sans-serif" }}
          className="text-2xl lg:text-4xl text-gray-800 mb-20"
        >
          We’re committed to providing top-notch service at all times.
        </h2>
        <form onSubmit={handleSubmit} className="space-y-8">
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
              name="months"
              value={formData.months}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 text-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select and Months</option>
            </select>
            <select
              name="speed"
              value={formData.speed}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 text-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select and Speed ( Mbps )</option>
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
