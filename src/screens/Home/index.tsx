import Header from "@components/heading/Header";
import Hero from "@components/heading/Hero";
import PreviewProduct from "@components/heading/PreviewProduct";
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
