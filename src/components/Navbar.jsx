import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
export const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <>
      <div className="flex justify-between items-center px-4 h-24 max-w-[1240px] mx-auto text-white">
        <h1 className="w-full font-bold text-3xl text-[#00df9a]">ALEX ADAM.</h1>
        <ul className="hidden md:flex ">
          <li className="p-4">Home</li>
          <li className="p-4">Company</li>
          <li className="p-4">Resources</li>
          <button className="bg-[#ffffff] hover:bg-[#00df9a] text-black ml-8 rounded-md font-medium w-[180px]  mx-auto my-2 px-4 py-3">
            Contact
          </button>
        </ul>
        <div onClick={handleNav} className="block md:hidden">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <div
          className={
            nav
              ? "fixed top-0 left-0 bg-[#000300]  w-[60%] h-full border-r border-r-gray-900 ease-in-out duration-500"
              : "fixed left-[-100%]"
          }
        >
          <h1 className="w-full font-bold text-3xl m-4 text-[#00df9a]">
            ALEX ADAM.
          </h1>

          <ul className=" md:hidden p-4 uppercase">
            <li className="p-4 border-b border-gray-600 ">Home</li>
            <li className="p-4 border-b border-gray-600">Company</li>
            <li className="p-4 border-b border-gray-600">Resources</li>

            <button className="bg-[#ffffff] hover:bg-[#00df9a] text-black mt-7 ml-2 rounded-md font-medium w-[180px]  mx-auto my-2 px-4 py-3">
              Contact
            </button>
          </ul>
        </div>
      </div>
    </>
  );
};
