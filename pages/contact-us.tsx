import Head from "next/head";
import HubspotForm from "react-hubspot-form";
const ContactUs = () => {
  return (
    <div>
      <Head>
        <title>Contact Us | Tacloban ANJ</title>
      </Head>
      <section>
        <form action="#" method="post">
          <input type="email" name="email" id="email" />
          <input type="text" name="name" id="name" />
          <textarea name="message" id="message" cols={30} rows={10}></textarea>
          <input type="submit" value="Send" />
        </form>
      </section>
    </div>
  );
};

export default ContactUs;
