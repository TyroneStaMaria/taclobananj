import Head from "next/head";
import ContactForm from "../components/templates/ContactUs/ContactForm";
const ContactUs = () => {
  return (
    <div>
      <Head>
        <title>Contact Us | Tacloban ANJ</title>
      </Head>
      <section>
        <h1 className="text-center mb-5">Contact Us</h1>
        <div className="flex justify-center items-center flex-col lg:flex-row">
          <div className=" w-11/12 lg:w-1/2 mx-auto mb-5 lg:mb-0">
            <ContactForm />
          </div>
          <div className="w-11/12 lg:w-1/2">
            <iframe
              className="w-full lg:w-2/3 mx-auto"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d123530.5034487826!2d120.98939542870099!3d14.637300033017494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b7c0c817b02f%3A0x212276ec7ddd5cec!2sJRS%20MINDANAO%20AVE.%20QC.!5e0!3m2!1sen!2sph!4v1628256411859!5m2!1sen!2sph"
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
