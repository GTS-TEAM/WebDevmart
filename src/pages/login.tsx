import BehindBanner from "@components/BehindBanner/BehindBanner";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, InputAdornment, OutlinedInput } from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";
import { ROUTES } from "./share";

const Login = () => {
  const [showPass, setShowPass] = useState(true);
  const [infoLogin, setInfoLogin] = useState<{
    email: string;
    password: string;
  }>({
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(infoLogin);
  };
  return (
    <div className="relative min-h-screen bg-zinc-200 flex flex-col justify-center px-6 lg:px-8">
      <BehindBanner />
      <div className="z-10">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <Link href={ROUTES.HOME}>
            <img
              src="images/lg-devmart.png"
              alt=""
              className="cursor-pointer hidden md:flex mx-auto h-20 w-auto xl:h-36 xl:w-44"
            />
          </Link>
          <Link href={ROUTES.HOME}>
            <img
              src="images/mini-lg.png"
              alt=""
              className="cursor-pointer w-auto flex md:hidden mx-auto h-10"
            />
          </Link>
          <h2 className="mt-6 text-center text-lg font-thin text-green-500">
            Đăng nhập để trải nghiệm đầy đủ tính năng
          </h2>
        </div>
        <div className="mt-8 mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col mt-10 w-full"
            >
              <label htmlFor="email" className="m-2">
                Email
              </label>
              <OutlinedInput
                type="text"
                id="email"
                className="rounded-md"
                onChange={(e) =>
                  setInfoLogin({ ...infoLogin, email: e.target.value })
                }
              />
              <label htmlFor="password" className="m-2">
                Mật khẩu
              </label>
              <OutlinedInput
                type={showPass ? "password" : "text"}
                id="password"
                className="rounded-md"
                onChange={(e) =>
                  setInfoLogin({ ...infoLogin, password: e.target.value })
                }
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      edge="end"
                      onClick={() => setShowPass(!showPass)}
                    >
                      {showPass ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
              <button
                type="submit"
                className="bg-blue-400 mt-6 rounded-sm p-3 mb-8 text-white cursor-pointer"
              >
                <span>Đăng kí</span>
              </button>
            </form>
          </div>
          <div className="flex flex-col items-center">
            <span className="m-10">
              {"Chưa có tài khoản ? "}
              <Link href={ROUTES.REGISTER}>
                <span className="text-blue-800 font-bold cursor-pointer border-b-2 border-blue-800">
                  Đăng kí
                </span>
              </Link>
            </span>
            <span className="text-sm opacity-60 mb-10">
              © 2022 e-Commerce. Design with 🧡 by e-Commerce Team.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
