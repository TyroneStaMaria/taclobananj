// import "tailwindcss/tailwind.css";
import "tailwindcss/tailwind.css";
import "../styles/main.scss";
import Layout from "../components/layouts/Layout";
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
