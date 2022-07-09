import React from "react";
import { signOut, useSession } from "next-auth/react";
import { Avatar, Menu, Popover, Input } from "antd";
import {
  BellOutlined,
  LogoutOutlined,
  SearchOutlined,
  ShoppingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { SearchIcon } from "@heroicons/react/solid";

const NavBar = () => {
  const session = useSession();
  const [dropUser, setDropUser] = React.useState(false);
  const [dropSearch, setDropSearch] = React.useState(false);

  const content = (
    <Menu className="flex flex-col w-64">
      <div className="flex items-center w-full py-4">
        <Avatar>{session.data?.user?.name?.toString()[0].toUpperCase()}</Avatar>
        <span className="ml-2 text-lg font-medium">
          {session.data?.user?.name}
        </span>
      </div>
      <Menu.Item className="w-full border-t">
        <div className="flex items-center">
          <UserOutlined className="w-4 h-4" />
          <span>Profile</span>
        </div>
      </Menu.Item>
      <Menu.Item className="w-full" onClick={() => signOut()}>
        <div className="flex items-center">
          <LogoutOutlined className="mr-3" />
          SignOut
        </div>
      </Menu.Item>
    </Menu>
  );
  const contentSearch = (
    <div className="flex items-center bg-gray-100 p-3 w-72 rounded-md md:hidden">
      <SearchIcon className="w-5 h-5 mr-2" color="gray" />
      <input
        placeholder="Search..."
        className="outline-none bg-gray-100 placeholder:text"
      />
    </div>
  );
  return (
    <div className="flex items-center justify-between mx-2 border-b-2 h-[70px]">
      <div className="flex items-center">
        <img
          src="images/lg-devmart.png"
          alt=""
          className="cursor-pointer hidden md:flex mx-auto h-14 w-auto xl:h-20 xl:w-44"
        />
        <img
          src="images/mini-lg.png"
          alt=""
          className="cursor-pointer w-auto flex md:hidden mx-auto h-10"
        />
        <div className="hidden md:flex">
          <div className="flex items-center bg-gray-100 p-3 w-72 ml-4 rounded-md">
            <SearchIcon className="w-5 h-5 mr-2" color="gray" />
            <input
              placeholder="Search..."
              className="outline-none bg-gray-100 placeholder:text"
            />
          </div>
        </div>
      </div>
      <div>
        <div className="cursor-pointer flex items-center gap-5 p-3 md:p-0">
          <Popover
            content={contentSearch}
            trigger="click"
            placement="bottomRight"
            visible={dropSearch}
            onVisibleChange={() => setDropSearch(!dropSearch)}
          >
            <div className="md:hidden">
              <SearchOutlined className="text-2xl p-2 hover:bg-gray-100 rounded-full" />
            </div>
          </Popover>
          <ShoppingOutlined className="text-2xl p-2 hover:bg-gray-100 rounded-full" />
          <div className="p-2 hover:bg-gray-100 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          </div>
          <BellOutlined className="text-2xl p-2 hover:bg-gray-100 rounded-full" />
          <Popover
            content={content}
            trigger="click"
            placement="bottomRight"
            visible={dropUser}
            onVisibleChange={() => setDropUser(!dropUser)}
          >
            <Avatar size="large">
              {session.data?.user?.name?.toString()[0].toUpperCase()}
            </Avatar>
          </Popover>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
