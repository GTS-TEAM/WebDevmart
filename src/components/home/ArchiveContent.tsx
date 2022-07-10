import React from "react";
import { Col, Row } from "antd";
import { titleHome } from "./dataHome";

const ArchiceContent = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold py-10">FURNITURE</h1>
      <Row className="flex items-center justify-center">
        {titleHome.map((item, index) => (
          <Col key={index} span={6}>
            <div className="flex items-center justify-center" key={index}>
              <h3 className="border-2 border-[rgba(162,159,159,0.12)] rounded-full p-2 cursor-pointer hover:bg-gray-100 duration-500 ease-out">
                {item.title}
              </h3>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ArchiceContent;
