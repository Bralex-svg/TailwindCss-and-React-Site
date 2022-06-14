import React from "react";
import Typed from "react-typed";

export const Hero = () => {
  return (
    <>
      <div className="text-white">
        <div className="max-w-[800px] mt-[-96px] mx-auto w-full h-screen  text-center flex flex-col justify-center">
          <p className="uppercase text-[#00df9a] font-bold p-2">
            Growing with Analytics
          </p>
          <h1 className="md:text-7xl sm:text-6xl text-4xl md:py-6 font-bold">
            Grow With Data.
          </h1>
          <div className="flex justify-center items-center">
            <p className="md:text-5xl sm:text-4xl py-4 text-xl font-bold">
              Fast, Flexible Financing for
            </p>
            <Typed
              className="md:text-5xl sm:text-4xl md:pl-4 text-xl font-bold pl-2"
              strings={["BTB", "BTC", "SASS"]}
              typeSpeed={120}
              backSpeed={140}
              loop
            />
          </div>
          <p className="md:text-2xl text-xl font-bold text-gray-500">
            Monitor your data analytics to increase revenue for BTB, BTC, & SASS
            platforms.{" "}
          </p>
          <button className="bg-[#00df9a] w-[200px] text-black rounded-md font-medium my-6 mx-auto py-3">
            Get Started
          </button>
        </div>
      </div>
    </>
  );
};
