import type { NextPage } from "next";
import Head from "next/head";
import { HomeScreen } from "../screens";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeScreen />
    </>
  );
};

export default Home;
