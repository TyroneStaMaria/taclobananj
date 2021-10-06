import axios from "axios";
import React, { useState, useEffect } from "react";
import styles from "./ContactForm.module.scss";
import { CONTACT_FORM_API_URL } from "../../../lib/constants";
import DefaultLoader from "../../elements/DefaultLoader/DefaultLoader";
interface ContactFormData {
  fullname: string;
  email: string;
  message: string;
  contact_num: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullname: "",
    email: "",
    message: "",
    contact_num: "",
  });

  const [loading, setLoading] = useState(false);

  const [submitted, setSubmitted] = useState(false);

  const convertJsontoUrlencoded = (obj: ContactFormData) => {
    let str = [];
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        str.push(encodeURIComponent(key) + "=" + encodeURIComponent(obj[key]));
      }
    }
    return str.join("&");
  };

  const changeFieldState = (e) => {
    e.persist();
    setFormData((formData) => ({
      ...formData,
      [e.target.name]: e.target.value,
    }));
  };

  const submitForm = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const { data } = await axios({
        url: CONTACT_FORM_API_URL,
        method: "POST",
        data: convertJsontoUrlencoded(formData),
        headers: {
          "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
        },
      });
      setSubmitted(true);
      setFormData({
        fullname: "",
        email: "",
        message: "",
        contact_num: "",
      });
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <div>
      <p className=" text-h4">Leave us a Message</p>
      <p className="text-body mb-3" style={{ fontSize: `0.75rem` }}>
        Notify us about any inquiries or order placements through the message
        box below.
      </p>
      <div>
        {submitted ? (
          <p className="text-success">Thank you, your message has been sent</p>
        ) : (
          ""
        )}
        {loading ? (
          <DefaultLoader />
        ) : (
          <form className={styles.contactContainer} onSubmit={submitForm}>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email Address"
              onChange={(e) => changeFieldState(e)}
              value={formData.email}
              required
            />
            <input
              type="text"
              name="fullname"
              id="fullname"
              placeholder="Full Name"
              onChange={(e) => changeFieldState(e)}
              value={formData.fullname}
              required
            />
            <input
              type="tel"
              name="contact_num"
              id="contact"
              placeholder="Contact Number"
              onChange={(e) => changeFieldState(e)}
              value={formData.contact_num}
              required
            />
            <textarea
              name="message"
              id="message"
              cols={30}
              rows={10}
              placeholder="Message"
              onChange={(e) => changeFieldState(e)}
              value={formData.message}
              required
            ></textarea>

            <input type="submit" value="Send" />
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
