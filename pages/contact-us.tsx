import ContactForm from "../components/templates/ContactUs/ContactForm";
import Seo from "../components/elements/Seo/Seo";
import seoData from "../seo.json";

const ContactUs = () => {
  return (
    <div>
      <Seo data={seoData.contact_us} />
      <section>
        <h1 className="text-center mb-5">Contact Us</h1>
        <div className="flex justify-center items-center flex-col lg:flex-row">
          <div className=" w-11/12 lg:w-1/2 mx-auto order-2 lg:order-1 ">
            <ContactForm />
          </div>
          <div className="w-11/12 mb-5 lg:mb-0 order-1  lg:order-2 lg:w-1/2 ">
            <iframe
              className="w-full lg:w-2/3 mx-auto"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.2365971171384!2d124.99641931480488!3d11.24399799200525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x330870d42348a107%3A0xef3d4593ee616207!2s151%20Avenida%20Rizal%2C%20Downtown%2C%20Tacloban%20City%2C%206500%20Leyte!5e0!3m2!1sen!2sph!4v1628311517943!5m2!1sen!2sph"
              height="500"
              // style="border:0;"
              // allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};
export default ContactUs;
