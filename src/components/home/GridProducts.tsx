import { commerceApis } from "@apis/commerceApis";
import React, { useEffect, useState } from "react";
import { productReview } from "shared/share";
import { Row, Col, Drawer } from "antd";
import { FiShoppingBag } from "react-icons/fi";
import { motion } from "framer-motion";
import { AiOutlineHeart, AiOutlineSearch } from "react-icons/ai";
import Footer from "@components/footer/Footer";
import Pagination from "./Pagination";
import { featureMotion } from "./dataHome";
import { useAppSelector } from "app/hooks";
import { productSelector } from "features/productSlice";

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
  const [buy, setBuy] = useState(false);
  const [heart, setHeart] = useState(false);
  const [search, setSearch] = useState(false);
  const productNavbar = useAppSelector(productSelector);

  return (
    <div>
      <div className="px-12">
        <Row gutter={[16, 24]}>
          {currentSlider?.map((item) => (
            <Col span={8} key={item.id}>
              <motion.div
                key={item.id}
                className="relative cursor-pointer px-4 py-2 bg-[#f6f6f6] h-[180px] sm:h-[280px] w-full flex items-center justify-center"
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
                  className="absolute flex items-center justify-center gap-2 bottom-14 h-10 w-full"
                  variants={featureMotion}
                >
                  <div
                    onMouseEnter={() => setBuy(true)}
                    onMouseLeave={() => setBuy(false)}
                    className={`w-8 h-8 ${
                      buy ? "bg-red-700" : "bg-white"
                    } flex items-center justify-center rounded-full cursor-pointer
                    ease-in-out duration-300`}
                  >
                    <FiShoppingBag className="p-[1px]" />
                  </div>
                  <div
                    onMouseEnter={() => setHeart(true)}
                    onMouseLeave={() => setHeart(false)}
                    className={`w-8 h-8 ${
                      heart ? "bg-red-700" : "bg-white"
                    } flex items-center justify-center rounded-full cursor-pointer ease-in-out duration-300`}
                  >
                    <AiOutlineHeart className="p-[1px]" />
                  </div>
                  <div
                    onMouseEnter={() => setSearch(true)}
                    onMouseLeave={() => setSearch(false)}
                    className={`w-8 h-8 ${
                      search ? "bg-red-700" : "bg-white"
                    } flex items-center justify-center rounded-full cursor-pointer ease-in-out duration-300`}
                  >
                    <AiOutlineSearch className="p-[1px]" />
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
