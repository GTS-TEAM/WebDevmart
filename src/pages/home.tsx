import DashBoard from "@components/home/DashBoard";
import NavBar from "@components/navbar/NavBar";
import { ROUTES } from "constaint/constant";
import { useSession } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const Home = () => {
  const session = useSession();
  const navigate = useRouter();
  useEffect(() => {
    if (session.status === "unauthenticated") {
      navigate.replace(ROUTES.LANDING);
    }
  }, [session]);
  return (
    <div>
      <Head>
        <title>Home Pages</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-full w-full">
        <NavBar />
        <DashBoard />
      </div>
    </div>
  );
};

export default Home;
