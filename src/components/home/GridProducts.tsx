import { commerceApis } from "@apis/commerceApis";
import React, { useEffect, useState } from "react";
import { productReview } from "shared/share";
import { Row, Col } from "antd";
import Footer from "@components/footer/Footer";
import Pagination from "./Pagination";

const GridProducts = () => {
  const getImageSlider = async () => {
    const { data } = await commerceApis.getAllProduct(36);
    setimageSlide(data.data);
  };
  const [imageSlide, setimageSlide] = useState<productReview>();
  useEffect(() => {
    getImageSlider();
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(12);
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentSlider = imageSlide?.products.slice(
    indexOfFirstPost,
    indexOfLastPost
  );
  const paginate = (number: number) => setCurrentPage(number);

  return (
    <div>
      <div className="px-12">
        <Row gutter={[16, 24]}>
          {currentSlider?.map((item) => (
            <Col span={8} key={item.id}>
              <div
                key={item.id}
                className="px-4 py-2 bg-[#f6f6f6] h-[180px] sm:h-[280px] w-full flex items-center justify-center"
              >
                <img
                  src={item.images[0]}
                  alt="product"
                  className="w-[50px] h-[50px] sm:h-2/3 sm:w-full xl:w-2/3"
                />
              </div>
              <p className="text-[9px] font-bold font-mono my-3">{item.name}</p>
              <p className="font-light font-mono text-gray-900 text-xs">
                ${item.price}.00
              </p>
            </Col>
          ))}
        </Row>
        <Pagination
          postPerPage={postPerPage}
          totalPost={imageSlide?.products.length}
          currentPage={currentPage}
          paginate={paginate}
        />
      </div>
      <Footer />
    </div>
  );
};

export default GridProducts;
