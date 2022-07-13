import { Breadcrumb } from "antd";
import { useSession } from "next-auth/react";
import React from "react";
import ArchiceContent from "./ArchiveContent";
import GridProducts from "./GridProducts";
import ProductContent from "./ProductContent";

const DashBoard = () => {
  const session = useSession();
  return (
    <div className="">
      <div className="flex items-center justify-between mt-[80px]">
        <span className="text-lg font-medium px-2">
          <span className="text-gray-400"> Xin chào</span>,{" "}
          {session.data?.user?.name}
        </span>
        <Breadcrumb>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>DashBoard</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      {/* content*/}
      <div>
        <div className="px-12">
          <ArchiceContent />
          <ProductContent />
        </div>
        <GridProducts />
      </div>
    </div>
  );
};

export default DashBoard;
