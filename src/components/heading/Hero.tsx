import React from "react";
import { motion } from "framer-motion";
import { ROUTES } from "constaint/constant";
import { useRouter } from "next/router";
const { Fade, Zoom } = require("react-reveal");
import { dummyData } from "shared/share";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ScroolToBottom = () => {
  window.scrollTo({ top: 900, behavior: "smooth" });
};

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const PrevButton = (props: any) => {
  const { onClick } = props;
  return (
    <div
      className="rounded-full bg-white hover:bg-red-600 ease-in duration-300 w-12 h-12 flex items-center justify-center cursor-pointer"
      onClick={onClick}
    ></div>
  );
};

const NextButton = (props: any) => {
  const { onClick } = props;

  return (
    <div
      className="rounded-full bg-white hover:bg-red-600 ease-in duration-300 w-12 h-12 flex items-center justify-center cursor-pointer"
      onClick={onClick}
    ></div>
  );
};

const Hero = () => {
  const navigate = useRouter();
  return (
    <div className="min-h-screen w-screen md:mt-20 bg-[#f8f8f8]">
      <div>
        <Slider
          {...settings}
          className="h-screen flex items-center justify-center m-20"
          prevArrow={<PrevButton />}
          nextArrow={<NextButton />}
        >
          {dummyData.map((item) => (
            <div className="flex items-center justify-center">
              <div className="flex items-center justify-center px-8">
                <div>
                  <Fade right>
                    <p className="text-2xl">{item.name}</p>
                  </Fade>
                  <Zoom delay={500}>
                    <h1 className="py-3 text-4xl font-extrabold">
                      {item.category}
                    </h1>
                  </Zoom>
                  <Fade delay={1000}>
                    <p className="text-xl py-3 font-[400px]">
                      {item.description}
                    </p>
                  </Fade>
                  <Fade left delay={1500}>
                    <button
                      onClick={() => navigate.push(ROUTES.LOGIN)}
                      className="py-3 px-6 sm:w-[60%] text-white border bg-[#64353b] hover:bg-green-700 rounded-md"
                    >
                      DISCOVER NOW
                    </button>
                  </Fade>
                </div>
                <div>
                  <img src={item.image} alt="" />
                </div>
              </div>
            </div>
          ))}
        </Slider>
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
        <a
          className="text-[#94535c] hover:text-[#94535c]"
          onClick={() => ScroolToBottom()}
        >
          SCROLL DOWN ˃˃
        </a>
      </motion.span>
    </div>
  );
};

export default Hero;
