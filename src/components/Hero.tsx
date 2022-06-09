import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-full h-screen md:mt-20 bg-zinc-200 flex flex-col justify-between">
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
        <div className="flex flex-col justify-center md:items-start w-full px-2 py-8">
          <p className="text-2xl">Best Seoling & Production</p>
          <h1 className="py-3 text-5xl md:text-7xl font-bold">
            e-Commerce Team
          </h1>
          <p className="text-3xl py-3">Great Option</p>
          <button className="py-3 px-6 sm:w-[60%]">Get Started</button>
        </div>
        <div className="flex flex-col justify-center flexs">
          <img src="images/ld-img.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
