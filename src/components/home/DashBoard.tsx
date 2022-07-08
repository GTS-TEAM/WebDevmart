import { Breadcrumb } from "antd";
import { useSession } from "next-auth/react";
import React from "react";

const DashBoard = () => {
  const session = useSession();
  return (
    <div>
      <div className="flex items-center justify-between">
        <span className="font-bold text-lg">DashBoard</span>
        <Breadcrumb>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>DashBoard</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      {/* content*/}
      <div className="bg-gray-200 flex flex-col gap-5 px-4">
        <span className="text-lg font-medium">
          Xin chào, {session.data?.user?.name}!
        </span>
      </div>
    </div>
  );
};

export default DashBoard;
