import React from "react";

const BehindBanner = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-[380px] bg-center bg-cover bg-[url('https://i.ibb.co/NrjrKFq/auth-one-bg.jpg')]">
      <div className="bg-gradient-to-r from-[#364574] to-[#405189] opacity-90 z-0 absolute inset-0 " />
      <div className="absolute right-0 -bottom-[1px] left-0 pointer-events-none ">
        <div className="fill-zinc-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            viewBox="0 0 1440 120"
          >
            <path d="M 0,36 C 144,53.6 432,123.2 720,124 C 1008,124.8 1296,56.8 1440,40L1440 140L0 140z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default BehindBanner;
