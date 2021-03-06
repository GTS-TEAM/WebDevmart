import BehindBanner from "@components/BehindBanner/BehindBanner";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { ROUTES } from "../constaint/constant";
import { Input, message } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import { useRouter } from "next/router";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

const Login = () => {
  const navigate = useRouter();
  const session = useSession();
  useEffect(() => {
    if (session.status === "authenticated") {
      navigate.replace(ROUTES.HOME);
    }
  }, [session]);
  const [showPass, setShowPass] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const showRes = (res: string) => {
    message.error(res);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    try {
      e.preventDefault();
      setLoading(true);
      const res: any = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      console.log(res);
      if (res?.error) {
        showRes("Thông tin tài khoản hoặc mật khẩu không chính xác");
        setLoading(false);
        return;
      }
      if (res?.ok) {
        setLoading(false);
        message.success("Đăng nhập thành công");
        navigate.push(ROUTES.HOME);
      }

      if (!res?.ok) {
        setLoading(false);
        showRes("Đăng nhập thất bại");
      }
    } catch (error: any) {
      console.log(error);
      setLoading(false);
    }
  };
  const antIcon = <LoadingOutlined style={{ fontSize: 18 }} spin />;
  return (
    <div className="relative min-h-screen bg-zinc-200 flex flex-col justify-center px-6 lg:px-8">
      <BehindBanner />
      <div className="z-10">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <Link href={ROUTES.LANDING}>
            <img
              src="images/lg-devmart.png"
              alt=""
              className="cursor-pointer hidden md:flex mx-auto h-20 w-auto xl:h-36 xl:w-44"
            />
          </Link>
          <Link href={ROUTES.LANDING}>
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
              <Input
                typeof="text"
                id="email"
                className="rounded-md h-10"
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="password" className="m-2">
                Mật khẩu
              </label>
              <Input.Password
                type={showPass ? "password" : "text"}
                id="password"
                className="rounded-md h-10"
                onChange={(e) => setPassword(e.target.value)}
                iconRender={(showPass) =>
                  showPass ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
              />
              <button
                typeof="submit"
                className={`${
                  loading ? "bg-blue-200" : "bg-blue-400"
                } p-1 mt-6 rounded-sm mb-8 text-white cursor-pointer h-8`}
                disabled={loading}
              >
                {loading && <Spin indicator={antIcon} />}
                <span className="mx-2">Đăng nhập</span>
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
