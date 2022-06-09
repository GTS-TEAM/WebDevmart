import Header from "@components/Header";
import Hero from "@components/Hero";
import PreviewProduct from "@components/PreviewProduct";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Landing Pages</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Header />
        <div className="w-full h-screen bg-zinc-200 flex flex-col justify-between overflow-hidden">
          <Hero />
          <PreviewProduct />
        </div>
      </div>
    </div>
  );
};

export default Home;
