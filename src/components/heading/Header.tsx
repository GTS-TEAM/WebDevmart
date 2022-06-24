import React from "react";
import { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/solid";
import { ROUTES } from "../../constaint/constant";
import { useRouter } from "next/router";

const Header = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const navigate = useRouter();

  return (
    <div className="w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <div>
            <img
              src="images/mini-lg.png"
              className="w-12 md:hidden cursor-pointer"
            />
            <img
              src="images/lg-devmart.png"
              className="rounded-md w-20 bg-indigo-50 hidden md:flex cursor-pointer"
            />
          </div>
          <ul className="hidden md:flex">
            <li className="hover:text-indigo-600 cursor-pointer">Home</li>
            <li className="hover:text-indigo-600 cursor-pointer">About</li>
            <li className="hover:text-indigo-600 cursor-pointer">Support</li>
            <li className="hover:text-indigo-600 cursor-pointer">Contact</li>
          </ul>
        </div>
        <div className="hidden md:flex pr-4">
          <button
            className="border-none bg-transparent text-black mr-4 border-indigo-600 hover:text-indigo-600 rounded-md"
            onClick={() => navigate.push(ROUTES.LOGIN)}
          >
            Sign In
          </button>
          <button
            className="px-1 py-3 text-white border bg-indigo-600 border-indigo-600 hover:bg-transparent hover:text-indigo-600 rounded-md"
            onClick={() => navigate.push(ROUTES.REGISTER)}
          >
            Sign Up
          </button>
        </div>
        <div className="md:hidden" onClick={handleClick}>
          {!nav ? <MenuIcon className="w-5" /> : <XIcon className="w-5" />}
        </div>
      </div>
      {nav && (
        <ul className="absolute bg-zinc-200 w-full px-8 md:hidden transition-all duration-100 ease-in-out">
          <li className="border-b-2 w-full border-zinc-300 hover:text-indigo-600 cursor-pointer">
            Home
          </li>
          <li className="border-b-2 w-full border-zinc-300 hover:text-indigo-600 cursor-pointer">
            About
          </li>
          <li className="border-b-2 w-full border-zinc-300 hover:text-indigo-600 cursor-pointer">
            Support
          </li>
          <li className="border-b-2 w-full border-zinc-300 hover:text-indigo-600 cursor-pointer">
            Contact
          </li>
          <div className="flex flex-col my-4">
            <button
              className="border-none bg-transparent mb-2 text-black mr-4 border-indigo-600 hover:text-indigo-600 rounded-md"
              onClick={() => navigate.push(ROUTES.LOGIN)}
            >
              Sign In
            </button>
            <button
              className="py-3 text-white border bg-indigo-600 border-indigo-600 hover:bg-transparent hover:text-indigo-600 rounded-md"
              onClick={() => navigate.push(ROUTES.REGISTER)}
            >
              Sign Up
            </button>
          </div>
        </ul>
      )}
    </div>
  );
};

export default Header;
