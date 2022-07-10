import { commerceApis } from "@apis/commerceApis";
import React, { useEffect, useState } from "react";
import { productReview } from "shared/share";
import { Row, Col } from "antd";
import Footer from "@components/footer/Footer";

const GridProducts = () => {
  const getImageSlider = async () => {
    const { data } = await commerceApis.getAllProduct(12);
    setimageSlide(data.data);
  };
  const [imageSlide, setimageSlide] = useState<productReview>();
  useEffect(() => {
    getImageSlider();
  }, []);
  return (
    <div>
      <div className="px-12">
        <Row gutter={[16, 24]}>
          {imageSlide?.products.map((item) => (
            <Col span={8} key={item.id}>
              <div className="px-4 py-2 bg-[#f6f6f6] h-[280px] w-full flex items-center justify-center">
                <img
                  src={item.images[0]}
                  alt="product"
                  className="w-1/2 h-1/2"
                />
              </div>
              <p className="text-[9px] font-bold font-mono my-3">{item.name}</p>
              <p className="font-light font-mono text-gray-900">
                ${item.price}.00
              </p>
            </Col>
          ))}
        </Row>
      </div>
      <Footer />
    </div>
  );
};

export default GridProducts;
