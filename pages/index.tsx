import Head from "next/head";
import HomeTemplate from "../components/templates/Home/Home";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Home | Tacloban ANJ</title>
      </Head>
      <HomeTemplate />
    </div>
  );
};

export default Home;
