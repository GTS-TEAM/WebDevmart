import { ROUTES } from "constaint/constant";
import { signOut, useSession } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const Home = () => {
  const session = useSession();
  const navigate = useRouter();
  useEffect(() => {
    if (session.status === "unauthenticated") {
      navigate.replace(ROUTES.LANDING);
    } else {
      navigate.replace(ROUTES.HOME);
    }
  }, [session]);
  return (
    <div>
      <Head>
        <title>Home Pages</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div onClick={() => signOut()}>HOME</div>
    </div>
  );
};

export default Home;
