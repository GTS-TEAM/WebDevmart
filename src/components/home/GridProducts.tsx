import { commerceApis } from "@apis/commerceApis";
import React, { useEffect, useState } from "react";
import { productReview } from "shared/share";
import { Row, Col } from "antd";
import { motion } from "framer-motion";
import Footer from "@components/footer/Footer";
import Pagination from "./Pagination";
import { FiShoppingBag } from "react-icons/fi";
import { HeartOutlined, SearchOutlined } from "@ant-design/icons";

const GridProducts = () => {
  const getImageSlider = async () => {
    const { data } = await commerceApis.getAllProduct(36);
    setimageSlide(data.data);
  };
  const [imageSlide, setimageSlide] = useState<productReview>();
  useEffect(() => {
    getImageSlider();
  }, []);

  const featureVariant = {
    rest: { opacity: 0, y: 30, ease: "easeOut", duration: 1, type: "tween" },
    hover: {
      y: 5,
      opacity: 1,
      transition: {
        duration: 0.5,
        type: "tween",
        ease: "easeIn",
      },
    },
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(12);
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentSlider = imageSlide?.products.slice(
    indexOfFirstPost,
    indexOfLastPost
  );
  const paginate = (number: number) => setCurrentPage(number);

  const [buy, setBuy] = useState(false);
  const [heart, setHeart] = useState(false);
  const [search, setSearch] = useState(false);

  return (
    <div>
      <div className="px-12">
        <Row gutter={[16, 24]}>
          {currentSlider?.map((item) => (
            <Col span={8} key={item.id}>
              <motion.div
                key={item.id}
                className="cursor-pointer relative px-4 py-2 bg-[#f6f6f6] h-[180px] sm:h-[280px] w-full flex items-center justify-center"
                initial="rest"
                whileHover="hover"
                animate="rest"
              >
                <img
                  src={item.images[0]}
                  alt="product"
                  className="w-[50px] h-[50px] sm:h-2/3 sm:w-full xl:w-2/3"
                />
                <motion.div
                  className="absolute cursor-default bottom-14 flex w-full items-center justify-center gap-3 p-2"
                  variants={featureVariant}
                >
                  <div
                    onMouseEnter={() => setBuy(true)}
                    onMouseLeave={() => setBuy(false)}
                    className={`cursor-pointer ${
                      buy ? "bg-red-700" : "bg-white"
                    } w-7 h-7 flex items-center justify-center rounded-full`}
                  >
                    <FiShoppingBag className="p-[1px]" />
                  </div>
                  <div
                    onMouseEnter={() => setHeart(true)}
                    onMouseLeave={() => setHeart(false)}
                    className={`cursor-pointer ${
                      heart ? "bg-red-700" : "bg-white"
                    } w-7 h-7 flex items-center justify-center rounded-full`}
                  >
                    <HeartOutlined className="p-[1px]" />
                  </div>
                  <div
                    onMouseEnter={() => setSearch(true)}
                    onMouseLeave={() => setSearch(false)}
                    className={`cursor-pointer ${
                      search ? "bg-red-700" : "bg-white"
                    } w-7 h-7 flex items-center justify-center rounded-full`}
                  >
                    <SearchOutlined className="p-[1px]" />
                  </div>
                </motion.div>
              </motion.div>
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
