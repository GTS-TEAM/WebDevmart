import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ROUTES } from "constaint/constant";
import { useRouter } from "next/router";
import { dummyData, StyledHero } from "shared/share";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";

const ScroolToBottom = () => {
  window.scrollTo({ top: 900, behavior: "smooth" });
};

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Hero = () => {
  const navigate = useRouter();
  const [hide, setHide] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setHide(false);
    }, 500);
  }, []);
  const PrevButton = (props: any) => {
    setHide(true);
    useEffect(() => {
      setTimeout(() => {
        setHide(false);
      }, 500);
    }, []);
    const { onClick, className } = props;
    return (
      <motion.div
        className="absolute z-10 top-1/4 -left-8 w-12 h-12 flex items-center justify-center cursor-pointer"
        onClick={onClick}
      >
        <GrFormPrevious className={className} />
      </motion.div>
    );
  };

  const NextButton = (props: any) => {
    setHide(true);
    useEffect(() => {
      setTimeout(() => {
        setHide(false);
      }, 1000);
    }, []);
    const { onClick, className } = props;

    return (
      <motion.div
        className="absolute rounded-full -right-8 top-1/4 w-12 h-12 flex items-center justify-center cursor-pointer"
        onClick={onClick}
      >
        <GrFormNext className={className} />
      </motion.div>
    );
  };
  return (
    <StyledHero className="min-h-screen w-full md:mt-20 bg-[#f8f8f8]">
      <div>
        <Slider
          {...settings}
          className="h-screen m-20"
          prevArrow={<PrevButton />}
          nextArrow={<NextButton />}
        >
          {dummyData.map((item) => (
            <motion.div key={item.name}>
              <AnimatePresence key={item.name}>
                {!hide && (
                  <motion.div>
                    <motion.div
                      key={item.name}
                      className="flex items-center justify-around px-8"
                    >
                      <div key={item.name}>
                        <motion.div
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ duration: 0.5, delay: 0.5 }}
                          key={item.name}
                        >
                          <p className="text-2xl">{item.name}</p>
                          <h1 className="py-3 text-4xl font-extrabold">
                            {item.category}
                          </h1>
                        </motion.div>
                        <motion.p
                          initial={{ rotate: "0deg", opacity: 0 }}
                          animate={{ rotate: "360deg", opacity: 1 }}
                          transition={{ duration: 0.8, delay: 0.8 }}
                          className="text-xl py-3 font-[400px] max-w-2xl"
                        >
                          {item.description}
                        </motion.p>
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 1, delay: 1 }}
                          className="flex justify-between w-80 mb-24"
                          key={item.name}
                        >
                          <div key={item.name}>
                            <p className="font-bold text-gray-400">DESIGNER</p>
                            <p className="font-semibold text-sm">
                              {item.desiner}
                            </p>
                          </div>
                          <div key={item.name}>
                            <p className="font-bold text-gray-400">COLOR</p>
                            {item.color.map((color) => (
                              <span className="font-semibold text-sm">
                                {color}
                              </span>
                            ))}
                          </div>
                        </motion.div>
                        <div className="w-1/2" key={item.name}>
                          <motion.button
                            initial={{ width: 0, opacity: 0 }}
                            animate={{ width: "100%", opacity: 1 }}
                            transition={{ duration: 1.5, delay: 1.5 }}
                            onClick={() => navigate.push(ROUTES.LOGIN)}
                            className="py-3 px-6 text-white border bg-[#64353b] hover:bg-green-700 rounded-md"
                          >
                            <motion.span
                              initial={{ width: 0, opacity: 0 }}
                              animate={{ width: "100%", opacity: 1 }}
                              transition={{ duration: 1.2, delay: 1.2 }}
                            >
                              DISCOVER NOW
                            </motion.span>
                          </motion.button>
                        </div>
                      </div>
                      <motion.div
                        initial={{ x: "-100vw", opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1.5 }}
                        key={item.name}
                      >
                        <img src={item.image} alt="" />
                      </motion.div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
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
        className="absolute text-sm font-semibold left-[44%] rotate-90 cursor-pointer"
      >
        <a
          className="text-[#94535c] hover:text-[#94535c]"
          onClick={() => ScroolToBottom()}
        >
          SCROLL DOWN ˃˃
        </a>
      </motion.span>
    </StyledHero>
  );
};

export default Hero;
