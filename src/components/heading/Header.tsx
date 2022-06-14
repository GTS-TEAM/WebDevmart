import React from "react";
import { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/solid";

const Header = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

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
          <button className="border-none bg-transparent text-black mr-4">
            Sign In
          </button>
          <button className="px-0 py-3">Sign Up</button>
        </div>
        <div className="md:hidden" onClick={handleClick}>
          {!nav ? <MenuIcon className="w-5" /> : <XIcon className="w-5" />}
        </div>
      </div>
      {nav && (
        <ul className="absolute bg-zinc-200 w-full px-8 transition-all duration-100 ease-in-out">
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
            <button className="bg-transparent text-indigo-600 px-8 py-3 mb-4">
              Sign In
            </button>
            <button className="px-8 py-3">Sign Up</button>
          </div>
        </ul>
      )}
    </div>
  );
};

export default Header;
