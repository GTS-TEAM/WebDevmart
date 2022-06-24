import Header from "@components/heading/Header";
import Hero from "@components/heading/Hero";
import PreviewProduct from "@components/heading/PreviewProduct";
import { ROUTES } from "constaint/constant";
import type { NextPage } from "next";
import { useSession } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Home: NextPage = () => {
  const session = useSession();
  const navigate = useRouter();
  useEffect(() => {
    if (session.status === "authenticated") {
      navigate.replace(ROUTES.HOME);
    }
  }, [session]);
  return (
    <div>
      <Head>
        <title>Landing Pages</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Header />
        <div className="w-full h-screen bg-zinc-200 flex flex-col justify-between">
          <Hero />
        </div>
        <div>
          <PreviewProduct />
        </div>
      </div>
    </div>
  );
};

export default Home;
