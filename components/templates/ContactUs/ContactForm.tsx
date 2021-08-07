import axios from "axios";
import React, { useState, useEffect } from "react";
import styles from "./ContactForm.module.scss";
import Loader from "react-loader-spinner";
interface ContactFormData {
  fullname: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const API_URL = "https://wp.taclobananjph.com";
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    message: "",
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

    console.log("Sending");

    try {
      setLoading(true);
      const { data } = await axios({
        url: `${API_URL}/wp-json/contact-form-7/v1/contact-forms/7/feedback`,
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
      });
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <div>
      <p className="mb-3">Leave us a Message</p>
      <div>
        {submitted ? (
          <p className="text-success">Thank you, your message has been sent</p>
        ) : (
          ""
        )}
        {loading ? (
          <div className="flex justify-center">
            <Loader type="TailSpin" color="#bf2626" height={80} width={80} />
          </div>
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
