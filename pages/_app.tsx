// import "tailwindcss/tailwind.css";
import "tailwindcss/tailwind.css";
import "../styles/main.scss";
import Layout from "../components/layouts/Layout";
import { SWRConfig } from "swr";
import axios from "axios";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <SWRConfig
      value={{
        fetcher: axios,
        onError: (err) => {
          // console.log(err);
        },
      }}
    >
      <Head>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SWRConfig>
  );
}

export default MyApp;
