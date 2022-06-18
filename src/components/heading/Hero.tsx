import React from "react";
import { motion } from "framer-motion";
const { Fade, Zoom } = require("react-reveal");

const ScroolToBottom = () => {
  window.scrollTo({ top: 900, behavior: "smooth" });
};

const Hero = () => {
  return (
    <div className="w-full h-screen md:mt-20 bg-zinc-200 flex flex-col justify-between">
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
        <div className="flex flex-col justify-center md:items-start w-full px-2 py-8">
          <Fade right>
            <p className="text-2xl">Best Seoling & Production</p>
          </Fade>
          <Zoom delay={500}>
            <h1 className="py-3 text-5xl md:text-7xl font-bold">
              e-Commerce Team
            </h1>
          </Zoom>
          <Fade delay={1000}>
            <p className="text-3xl py-3">Great Option</p>
          </Fade>
          <Fade left delay={1500}>
            <button className="py-3 px-6 sm:w-[60%] text-white border bg-indigo-600 border-indigo-600 hover:bg-transparent hover:text-indigo-600 rounded-md">
              Get Started
            </button>
          </Fade>
        </div>
        <div className="flex flex-col justify-center flexs">
          <img src="images/ld-img.png" alt="" />
        </div>
      </div>
      <motion.span
        animate={{
          bottom: ["5%", "10%", "10%", "5%"],
        }}
        transition={{
          repeat: Infinity,
          duration: 5,
        }}
        className="absolute text-sm font-semibold left-[44%] rotate-90 cursor-pointer mb-10"
      >
        <a onClick={() => ScroolToBottom()}>SCROLL DOWN ˃˃</a>
      </motion.span>
    </div>
  );
};

export default Hero;
