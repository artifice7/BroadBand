import { useState } from "react";
import Button from "../Buttons/button1";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="border-gray-200 bg-[#EAEDF4] sticky top-0 z-50 bg-opacity-40 backdrop-blur-md">
        <div className="flex max-w-[1712px] mx-auto flex-wrap items-center justify-between p-4">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src="/Main-logo.png" className="h-12" alt="Flowbite Logo" />
          </a>

          {/* Hamburger Menu */}
          <button
            className="md:hidden flex flex-col space-y-1 items-end"
            onClick={toggleSidebar}
            aria-label="Toggle Sidebar"
          >
            <div className="w-8 h-1 bg-gray-700"></div>
            <div className="w-6 h-1 bg-gray-700"></div>
            <div className="w-4 h-1 bg-gray-700"></div>
          </button>

          {/* Desktop Menu */}
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-semibold flex flex-col md:p-0 p-4 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
              <li className="flex justify-center items-center">
                <a
                  href="#"
                  className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-Black md:dark:text-blue-500"
                  aria-current="page"
                >
                  HOME
                </a>
              </li>
              <li className="flex justify-center items-center">
                <a
                  href="#"
                  className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-Black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  ABOUT US
                </a>
              </li>
              <li className="flex justify-center items-center">
                <a
                  href="#"
                  className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-Black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  OUR PLANS
                </a>
              </li>
              <li className="flex justify-center items-center">
                <Button>CONTACT US</Button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 w-4/5 max-w-xs h-full bg-white rounded-tl-[30px] shadow-lg z-50 p-6 flex flex-col justify-between transform transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-700 text-2xl"
          onClick={toggleSidebar}
          aria-label="Close Sidebar"
        >
          &times;
        </button>

        {/* Sidebar Content */}
        <div>
          <a href="#" className="flex items-center mb-8">
            <img src="/Main-logo.png" alt="Flowbite Logo" className="h-12" />
          </a>

          <ul className="space-y-6">
            <li>
              <a
                href="#"
                className="flex justify-between items-center text-lg font-semibold"
              >
                Home <span className="text-blue-500 text-xl">→</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex justify-between items-center text-lg font-semibold"
              >
                About Us <span className="text-blue-500 text-xl">→</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex justify-between items-center text-lg font-semibold"
              >
                Our Plans <span className="text-blue-500 text-xl">→</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Us Button */}
        <div className="mt-8">
          <button className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg flex justify-between items-center px-4">
            Contact Us <span className="text-xl">→</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
