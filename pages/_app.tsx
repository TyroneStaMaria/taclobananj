// import "tailwindcss/tailwind.css";
import "tailwindcss/tailwind.css";
import "../styles/main.scss";
import Layout from "../components/layouts/Layout";
import { SWRConfig } from "swr";
import axios from "axios";

function MyApp({ Component, pageProps }) {
  return (
    <SWRConfig
      value={{
        fetcher: axios,
        onError: (err) => {
          console.log(err);
        },
      }}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SWRConfig>
  );
}

export default MyApp;
