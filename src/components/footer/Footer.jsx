import React from "react";
import { Input } from "antd";
import { motion } from "framer-motion";
import { FaFacebookF, FaPinterestP } from "react-icons/fa";
import { AiOutlineTwitter, AiFillYoutube } from "react-icons/ai";

const leftShiftEffect = {
  transition: { duration: 1 },
  x: 20,
  color: "red",
};

const Footer = () => {
  return (
    <div className="w-full bg-gray-800 text-white">
      <div className="container mx-auto py-20 gap-4 flex flex-col items-center justify-evenly">
        <span className="text-red-700 font-semibold text-base">
          OUR NEWSLETTER
        </span>
        <span className="text-white font-semibold text-2xl">
          UP TO 40% OFF ITEMS
        </span>
        <span className="text-gray-400 text-center">
          Subscribe to the Gosto mailing list to receive updates on new arrivals{" "}
          <br /> & other discount information.
        </span>
        <div className="flex items-center w-1/2">
          <Input
            placeholder="Your email here"
            className="h-12 w-10 placeholder:text-xs"
          />
          <button className="bg-red-700 text-white font-semibold py-2 px-4 h-12">
            Subscribe
          </button>
        </div>
      </div>
      <div className="ui divider" />
      <div className="text-white flex items-center justify-evenly my-10">
        <div className="flex flex-col gap-4 font-bold text-[8px] sm:text-sm">
          <motion.span whileHover={leftShiftEffect} className="cursor-pointer">
            INFORMATION
          </motion.span>
          <motion.span whileHover={leftShiftEffect} className="cursor-pointer">
            OUR STORE
          </motion.span>
          <motion.span whileHover={leftShiftEffect} className="cursor-pointer">
            OUR SERVICE
          </motion.span>
          <motion.span whileHover={leftShiftEffect} className="cursor-pointer">
            TOP PRODUCTS
          </motion.span>
        </div>
        <div className="flex flex-col gap-4 font-bold text-[8px] sm:text-sm">
          <motion.span whileHover={leftShiftEffect} className="cursor-pointer">
            OUR STYLES
          </motion.span>
          <motion.span whileHover={leftShiftEffect} className="cursor-pointer">
            RECRUITMENT
          </motion.span>
          <motion.span whileHover={leftShiftEffect} className="cursor-pointer">
            ABOUT US
          </motion.span>
          <motion.span whileHover={leftShiftEffect} className="cursor-pointer">
            CONTACT US
          </motion.span>
        </div>
        <div className="flex flex-col gap-4">
          <span className="font-bold text-[8px] sm:text-sm">
            LOOKING FOR GOSTO?
          </span>
          <div className="flex flex-col gap-4 text-gray-500 text-[8px] sm:text-sm">
            <span>+1 (800) 123 456 789</span>
            <span>460 Peutestrabe, Hamburg, Germany</span>
            <span>Gosto@google.com</span>
          </div>
        </div>
        <div className="flex-col gap-4 hidden sm:flex">
          <span>ABOUT GOSTO STORE</span>
          <span className="text-gray-500">
            Gosto is a premium template theme with advanced admin module.
            <br />
            It’s extremely easy to use and fully responsive and retina ready.
          </span>
          <img
            src="https://i.ibb.co/4pyYSMy/image.png"
            alt=""
            className="w-10/12 h-6 cursor-pointer"
          />
        </div>
      </div>
      <div className="ui divider" />
      <div className="flex-col gap-4 flex text-center items-center justify-center sm:hidden">
        <span>ABOUT GOSTO STORE</span>
        <span className="text-gray-500">
          Gosto is a premium template theme with advanced admin module.
          <br />
          It’s extremely easy to use and fully responsive and retina ready.
        </span>
        <img
          src="https://i.ibb.co/4pyYSMy/image.png"
          alt=""
          className="w-10/12 h-6 cursor-pointer"
        />
      </div>
      <div className="ui divider" />

      <div className="flex text-center flex-col sm:flex-row sm:text-left sm:items-center sm:justify-around py-4">
        <span>
          Copyright ©<span className="text-red-500"> GOSTO</span> all rights
          reserved. Powered by <br />
          <span className="text-red-500">e-Commerce-Team.</span>
        </span>
        <div className="flex items-center justify-center py-2 sm:py-0">
          <span>Social Media: </span>
          <div className="ml-2 flex gap-4">
            <FaFacebookF className="hover:opacity-100 cursor-pointer opacity-50" />
            <AiOutlineTwitter className="hover:opacity-100 cursor-pointer opacity-50" />
            <AiFillYoutube className="hover:opacity-100 cursor-pointer opacity-50" />
            <FaPinterestP className="hover:opacity-100 cursor-pointer opacity-50" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
