import React from "react";
import { useState } from "react";
import { MenuIcon, SearchIcon, XIcon } from "@heroicons/react/solid";
import { ROUTES } from "../../constaint/constant";
import { useRouter } from "next/router";
import {
  HeartOutlined,
  SearchOutlined,
  ShoppingOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import { Drawer } from "antd";

const data = [
  {
    title: "HOME",
  },
  {
    title: "SHOP",
  },
  {
    title: "PAGES",
  },
  {
    title: "BLOG",
  },
  {
    title: "ABOUT",
  },
  {
    title: "CONTACT",
  },
];

const Header = () => {
  const [showDraw, setShowDraw] = useState(false);
  const handleClick = () => setShowDraw(!showDraw);
  const navigate = useRouter();

  return (
    <div className="w-screen h-[70px] z-10 bg-white fixed">
      <div className="flex justify-between items-center h-full mx-8">
        <MenuIcon
          onClick={() => setShowDraw(true)}
          className="w-8 h-8 flex lg:hidden cursor-pointer"
        />
        <div className="items-center gap-10 hidden lg:flex">
          <span className="hover:text-red-600 cursor-pointer">USA</span>
          <span className="hover:text-red-600 cursor-pointer">English</span>
          <span className="hover:text-red-600 cursor-pointer hidden xl:flex">
            +1 (800) 123 456 789
          </span>
        </div>
        <div className="flex gap-12 font-semibold">
          <div className="items-center gap-10 hidden lg:flex lg:gap-5">
            <span className="hover:text-red-600 cursor-pointer">HOME</span>
            <span className="hover:text-red-600 cursor-pointer">SHOP</span>
            <span className="hover:text-red-600 cursor-pointer">PAGE</span>
          </div>
          <span className="text-2xl font-bold cursor-pointer">DEVMART</span>
          <div className="items-center gap-10 lg:gap-5 hidden lg:flex">
            <span className="hover:text-red-600 cursor-pointer">BLOG</span>
            <span className="hover:text-red-600 cursor-pointer">ABOUT</span>
            <span className="hover:text-red-600 cursor-pointer">CONTACT</span>
          </div>
        </div>
        <div className="flex items-center gap-10">
          <span
            className="hover:text-red-600 cursor-pointer hidden lg:flex"
            onClick={() => navigate.push(ROUTES.LOGIN)}
          >
            Login
          </span>
          <span
            className="hover:text-red-600 cursor-pointer hidden lg:flex"
            onClick={() => navigate.push(ROUTES.REGISTER)}
          >
            Register
          </span>
          <div className="hidden lg:flex">
            <SearchOutlined className="hover:text-red-600 cursor-pointer text-lg" />
          </div>
          <div className="hidden lg:flex">
            <HeartOutlined className="hover:text-red-600 cursor-pointer hidden lg:flex text-lg" />
          </div>
          <ShoppingOutlined className="hover:text-red-600 cursor-pointer text-lg" />
        </div>
      </div>
      <Drawer
        closable={false}
        onClose={handleClick}
        visible={showDraw}
        placement="left"
      >
        <div className="text-white">
          <XIcon
            className="w-7 h-7 cursor-pointer absolute right-4 top-1"
            onClick={handleClick}
          />
          <div className="flex flex-col items-center justify-center">
            <span className="font-bold mb-8 text-xs">
              WHAT ARE YOU LOOKING FOR?
            </span>
            <div className="relative w-full flex">
              <input
                placeholder="Search Products..."
                className="border-none rounded-full h-10 px-4 w-full py-2 text-black focus:outline-none"
              />
              <SearchIcon className="absolute w-6 h-6 right-2 fill-black top-2 cursor-pointer mx-2" />
            </div>
            <div className="flex flex-col w-full items-start py-3 pt-10 h-1/2 gap-2">
              {data.map((item) => (
                <div key={item.title} className="w-full h-[35px] text-xs">
                  <span className="hover:text-red-600 cursor-pointer font-semibold w-full py-4">
                    {item.title}
                  </span>
                  <div className="ui divider"></div>
                </div>
              ))}
            </div>
            <div
              className="text-xs flex items-center w-full font-semibold cursor-pointer border-b-2 border-[rgba(255,255,255,0.2)] py-4"
              onClick={() => navigate.push(ROUTES.LOGIN)}
            >
              <UserAddOutlined className="mr-2 text-sm" />
              <span> LOGIN</span>
            </div>
            <div
              className="text-xs flex items-center w-full font-semibold cursor-pointer border-b-2 border-[rgba(255,255,255,0.2)] py-4"
              onClick={() => navigate.push(ROUTES.REGISTER)}
            >
              <UserAddOutlined className="mr-2 text-sm" />
              <span> REGISTER</span>
            </div>
            <div className="text-xs flex items-center w-full py-4 font-semibold cursor-pointer border-b-2 border-[rgba(255,255,255,0.2)]">
              <HeartOutlined className="mr-2 text-sm" />
              <span>WISHLIST</span>
            </div>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default Header;
