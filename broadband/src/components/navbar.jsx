import React from "react";
import Button from "../Buttons/button1"; // Add this line to import the Button component

const Navbar = () => {
  return (
    <nav className="border-gray-200 bg-[#EAEDF4]">
      <div className="flex max-w-[1712px] mx-auto flex-wrap items-center justify-between p-4">
        <a href="" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="/Main-logo.png" className="h-12" alt="Flowbite Logo" />
        </a>
        
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-semibold flex flex-col md:p-0 p-4 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
            <li className="flex justify-center items-center" >
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
  );
};

export default Navbar;
