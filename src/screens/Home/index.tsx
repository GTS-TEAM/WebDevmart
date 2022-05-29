import Header from "@components/Header";
import Hero from "@components/Hero";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Landing Pages</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Header />
        <Hero />
      </div>
    </div>
  );
};

export default Home;
