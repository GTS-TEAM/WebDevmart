import { commerceApis } from "@apis/commerceApis";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import {
  productReview,
  ratingSettings,
  settings,
  SliderRating,
  SliderTop,
  WrapSlider,
} from "../../../share";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const { Fade, Zoom } = require("react-reveal");
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF, FaPinterestP } from "react-icons/fa";
import { AiOutlineTwitter, AiFillYoutube } from "react-icons/ai";

const PreviewProduct = () => {
  const getImageSlider = async () => {
    const { data } = await commerceApis.getAllProduct(20);
    setimageSlide(data.data);
    console.log(data.data);
  };
  const [imageSlide, setimageSlide] = useState<productReview>();
  useEffect(() => {
    getImageSlider();
  }, []);
  return (
    <div id="bestProducts" className="w-full h-ful">
      <Fade bottom>
        <div className="flex flex-col justify-center items-center mt-20">
          <span className="text-xl font-semibold text-red-600">
            EXPLORE THE CATEGORIES
          </span>
          <span className="text-3xl font-semibold text-violet-900 m-2">
            FEATURED CATEGORIES
          </span>
          <span className="opacity-80">
            Commodo sociosqu venenatis cras dolor sagittis integer luctus
            maecenas.
          </span>
        </div>
        <WrapSlider>
          <Slider {...settings} className="p-8 m-20">
            {imageSlide?.products.map((product) => (
              <div key={product.id} className="px-3">
                <img
                  src={product.images[0]}
                  alt=""
                  className="w-85 rounded-md"
                />
              </div>
            ))}
          </Slider>
        </WrapSlider>
      </Fade>
      {/* Rating*/}
      <Fade bottom>
        <div className="text-center bg-green-300">
          <SliderRating>
            <Slider
              {...ratingSettings}
              className="p-8 mb-20 ml-20 mr-20 text-center"
            >
              {imageSlide?.products.slice(0, 5).map((product) => (
                <div
                  key={product.id}
                  className="px-3 h-36 md:h-64 text-2xl md:text-4xl"
                >
                  <div className="flex flex-col items-center justify-center">
                    <img
                      src="https://i.ibb.co/fxQbgcC/5start-removebg-preview.png"
                      alt=""
                    />
                    <span className="m-2">"{product.description}"</span>
                    <span className="md:text-2xl md:mt-10 opacity-50 text-sm">
                      Founder Of e-Commerce Team
                    </span>
                  </div>
                </div>
              ))}
            </Slider>
          </SliderRating>
        </div>
      </Fade>
      <Zoom>
        <div className="flex flex-col justify-center items-center mt-20">
          <span className="text-xl font-semibold text-red-600">
            EXPLORE THE LOOKBOOK
          </span>
          <span className="text-3xl font-semibold text-violet-900 m-2">
            TOP SELLING PRODUCTS
          </span>
          <span className="opacity-80">
            Commodo sociosqu venenatis cras dolor sagittis integer luctus
            maecenas.
          </span>
        </div>
        <SliderTop>
          <Slider {...settings} className="p-8 m-20">
            {imageSlide?.products.map((product) => (
              <div key={product.id} className="px-3">
                <img
                  src={product.images[1]}
                  alt=""
                  className="w-85 rounded-md hover:scale-105"
                />
              </div>
            ))}
          </Slider>
        </SliderTop>
      </Zoom>
      {/*Image Instagram*/}
      <Fade bottom>
        <div className="flex flex-col justify-center items-center mt-20 mb-20">
          <span className="text-xl font-semibold text-red-600">
            EXPLORE THE BLOG
          </span>
          <span className="text-3xl font-semibold text-violet-900 m-2">
            LATEST BLOG POSTS
          </span>
          <span className="opacity-80">
            Commodo sociosqu venenatis cras dolor sagittis integer luctus
            maecenas.
          </span>
        </div>
        <div className="flex grid-cols-2 flex-wrap justify-center items-center gap-4 m-8">
          {imageSlide?.products.slice(0, 10).map((image) => (
            <div className="relative cursor-pointer">
              <img
                src={image.images[0]}
                alt=""
                className="w-40 md:w-80 rounded-md"
              />
              <div className="transition-all duration-1000 absolute flex opacity-0 hover:opacity-50 w-[100%] h-[100%] justify-center items-center bg-black top-0 left-0">
                <BsInstagram color="white" />
              </div>
            </div>
          ))}
        </div>
      </Fade>
      <Fade bottom>
        <div className="w-full bg-gray-800">
          <div className="container mx-auto py-5 flex items-center justify-evenly">
            <div className="flex items-center gap-2">
              <img className="w-8" src="./img/logo.png" alt="" />
              <span className="text-white text-sm font-thin">
                e-Commerce Team
              </span>
            </div>
            <span className="hidden md:block font-thin text-white">
              © 2022 e-Commerce. Design with ♥️ by e-Commerce Team.
            </span>
            <div className="flex gap-2">
              <FaFacebookF className="hover:text-white cursor-pointer" />
              <AiOutlineTwitter className="hover:text-white cursor-pointer" />
              <AiFillYoutube className="hover:text-white cursor-pointer" />
              <FaPinterestP className="hover:text-white cursor-pointer" />
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default PreviewProduct;
