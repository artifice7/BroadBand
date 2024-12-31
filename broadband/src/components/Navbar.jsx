import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [dropdownContext, setDropdownContext] = useState(null);
  const { pathname } = useLocation();

  const dropdownRef = useRef(null);
  const toggleRef = useRef(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    setDropdownContext(null);
  };

  const toggleDropdown = (context) => {
    setDropdownContext(dropdownContext === context ? null : context);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        toggleRef.current &&
        !toggleRef.current.contains(event.target)
      ) {
        setDropdownContext(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {/* Fixed Navbar */}
      <nav className="border-gray-200 bg-[#EAEDF4] fixed top-0 left-0 w-full z-50 bg-opacity-40 backdrop-blur-md">
        <div className="flex max-w-[1712px] mx-auto flex-wrap items-center justify-between p-4">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src="/Main-logo.png" className="h-12" alt="Flowbite Logo" />
          </Link>

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
              <li>
                <Link
                  to="/"
                  className={`block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 ${
                    pathname === "/" ? "text-blue-700 font-bold" : ""
                  }`}
                >
                  HOME
                </Link>
              </li>

              <li className="flex justify-center items-center">
                <Link
                  to="/about"
                  className={`block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ${
                    pathname === "/about" ? "text-blue-700 font-bold" : ""
                  }`}
                >
                  ABOUT US
                </Link>
              </li>
              <li className="flex justify-center items-center">
                <Link
                  to="/plans"
                  className={`block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ${
                    pathname === "/plans" ? "text-blue-700 font-bold" : ""
                  }`}
                >
                  OUR PLANS
                </Link>
              </li>
              <li className="flex justify-center items-center">
                <Link
                  to="/inquiry"
                  className={`block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ${
                    pathname === "/inquiry" ? "text-blue-700 font-bold" : ""
                  }`}
                >
                  CONTACT US
                </Link>
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
        <button
          className="absolute top-4 right-4 text-gray-700 text-2xl"
          onClick={toggleSidebar}
          aria-label="Close Sidebar"
        >
          &times;
        </button>

        <div>
          <Link to="/" className="flex items-center mb-8">
            <img src="/Main-logo.png" alt="Flowbite Logo" className="h-12" />
          </Link>

          <ul className="space-y-6">
            <li>
              <Link
                to="/"
                className={`flex justify-between items-center text-lg font-semibold ${
                  pathname === "/" ? "text-blue-700" : "text-gray-700"
                }`}
                onClick={toggleSidebar}
              >
                Home <span className="text-blue-500 text-xl">→</span>
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`flex justify-between items-center text-lg font-semibold ${
                  pathname === "/about" ? "text-blue-700" : "text-gray-700"
                }`}
                onClick={toggleSidebar}
              >
                About Us <span className="text-blue-500 text-xl">→</span>
              </Link>
            </li>
            <li>
              <Link
                to="/plans"
                className={`flex justify-between items-center text-lg font-semibold ${
                  pathname === "/plans" ? "text-blue-700" : "text-gray-700"
                }`}
                onClick={toggleSidebar}
              >
                Our Plans <span className="text-blue-500 text-xl">→</span>
              </Link>
            </li>
            <li>
              <Link
                to="/inquiry"
                className={`flex justify-between items-center text-lg font-semibold ${
                  pathname === "/inquiry" ? "text-blue-700" : "text-gray-700"
                }`}
                onClick={toggleSidebar}
              >
                Contact Us <span className="text-blue-500 text-xl">→</span>
              </Link>
            </li>
          </ul>
        </div>

        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => toggleDropdown("sidebar")}
            className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg"
          >
            LOGIN
          </button>
          {dropdownContext === "sidebar" && (
            <div className="absolute bottom-full mb-2 left-0 w-full bg-white shadow-lg rounded-lg z-50">
              <ul className="py-2">
                <li>
                  <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Login
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Sign Up
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
