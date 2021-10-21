import HomeTemplate from "../components/templates/Home/Home";
import Seo from "../components/elements/Seo/Seo";
import seoData from "../seo.json";

const Home = () => {
  return (
    <div>
      <Seo data={seoData.home} />
      <HomeTemplate />
    </div>
  );
};

export default Home;
