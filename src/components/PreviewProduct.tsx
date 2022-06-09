import { commerceApis } from "@apis/commerceApis";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { productReview, settings, WrapSlider } from "../../share";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PreviewProduct = () => {
  const getImageSlider = async () => {
    const { data } = await commerceApis.getAllProduct(20);
    setimageSlide(data.data);
  };
  const [imageSlide, setimageSlide] = useState<productReview>();

  useEffect(() => {
    getImageSlider();
  }, []);
  return (
    <WrapSlider>
      <Slider {...settings} className="p-8 m-20">
        {imageSlide?.products.map((product) => (
          <div key={product.id} className="px-3">
            <img src={product.images[0]} alt="" className="w-85 rounded-md" />
          </div>
        ))}
      </Slider>
    </WrapSlider>
  );
};

export default PreviewProduct;
