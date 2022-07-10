import React from "react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { Dropdown, Space, Tooltip } from "antd";
import { TbGridDots, TbDotsVertical } from "react-icons/tb";
import { FaListUl } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { optionSort } from "./dataHome";

const ProductContent = () => {
  const [indexSelect, setIndexSelect] = React.useState(0);
  const [color, setColor] = React.useState("gray");
  const [color2, setColor2] = React.useState("gray");
  const [color3, setColor3] = React.useState("gray");
  const handleOptionSort = (
    event: React.ChangeEvent<EventTarget>,
    index: number
  ) => {
    setIndexSelect(index);
  };
  const optionContent = (
    <div className="flex flex-col">
      {optionSort.map((item, index) => (
        <div
          onClick={(e) => handleOptionSort(e, index)}
          className="hover:bg-blue-600 flex items-center border-2 bg-[rgba(255,255,255.0.2 cursor-pointer"
        >
          <span className="mr-16 text-[10px]">{item.title}</span>
        </div>
      ))}
    </div>
  );
  return (
    <div className="pt-10 pb-4">
      <div className="flex items-center justify-between">
        <div className="flex items-end gap-3">
          <span className="flex justify-self-end text-[10px]">Views:</span>
          {/*Icons Grid*/}
          <div className="flex items-center gap-1">
            <IconContext.Provider
              value={{ style: { color: `${color}`, cursor: "pointer" } }}
            >
              <Tooltip
                title="Two columns"
                overlayInnerStyle={{
                  width: "65px",
                  fontSize: "8px",
                }}
              >
                <div
                  className="flex relative"
                  onMouseEnter={() => setColor("black")}
                  onMouseLeave={() => setColor("gray")}
                >
                  <TbDotsVertical className="absolute -left-1 w-4 h-4" />
                  <TbDotsVertical className="w-4 h-4" />
                </div>
              </Tooltip>
            </IconContext.Provider>
            <IconContext.Provider
              value={{ style: { color: "black", cursor: "pointer" } }}
            >
              <Tooltip
                title="Three Column"
                overlayInnerStyle={{
                  width: "70px",
                  fontSize: "8px",
                }}
              >
                <div>
                  <TbGridDots className="w-4 h-4" />
                </div>
              </Tooltip>
            </IconContext.Provider>
            <IconContext.Provider
              value={{ style: { color: `${color2}`, cursor: "pointer" } }}
            >
              <Tooltip
                title="Four Column"
                overlayInnerStyle={{
                  width: "65px",
                  fontSize: "8px",
                }}
              >
                <div
                  className="relative flex items-center"
                  onMouseEnter={() => setColor2("black")}
                  onMouseLeave={() => setColor2("gray")}
                >
                  <TbGridDots className="w-4 h-4" />
                  <TbDotsVertical className="absolute left-[9px] w-4 h-4" />
                </div>
              </Tooltip>
            </IconContext.Provider>
          </div>
          <IconContext.Provider
            value={{ style: { color: `${color3}`, cursor: "pointer" } }}
          >
            <Tooltip
              title="List"
              overlayInnerStyle={{
                width: "45px",
                fontSize: "8px",
                textAlign: "center",
              }}
            >
              <div
                className="relative flex items-center"
                onMouseEnter={() => setColor3("black")}
                onMouseLeave={() => setColor3("gray")}
              >
                <FaListUl className="w-4 h-4" />
              </div>
            </Tooltip>
          </IconContext.Provider>
        </div>
        <div className="flex items-center border-2 bg-[rgba(255,255,255.0.2 cursor-pointer h-5">
          <Dropdown overlay={optionContent}>
            <Space>
              <span className="mr-12 ml-4 text-[10px] flex items-center justify-center">
                {optionSort[indexSelect].title}
              </span>
              <ChevronDownIcon className="w-4 h-4" />
            </Space>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default ProductContent;
