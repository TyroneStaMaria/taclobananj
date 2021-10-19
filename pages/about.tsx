import AboutTemplate from "../components/templates/About/AboutTemplate";
import Seo from "../components/elements/Seo/Seo";
import seoData from "../seo.json";

const About = () => {
  return (
    <div>
      <Seo data={seoData.about} />
      <AboutTemplate />
    </div>
  );
};

export default About;
