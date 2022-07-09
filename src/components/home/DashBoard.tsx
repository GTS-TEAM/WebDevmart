import { Breadcrumb } from "antd";
import { useSession } from "next-auth/react";
import React from "react";
import ArchiceContent from "./ArchiveContent";

const DashBoard = () => {
  const session = useSession();
  return (
    <div>
      <div className="flex items-center justify-between">
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
        <ArchiceContent />
      </div>
    </div>
  );
};

export default DashBoard;
