import axios from "axios";
import React, { useState } from "react";
import styles from "./ContactForm.module.scss";
const ContactForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const changeFieldState = (e, setter) => {
    setter(e.target.value);
  };

  const submitForm = (e) => {
    e.preventDefault();
    console.log("Sending");
    const data = {
      fullName,
      email,
      message,
    };
    axios
      .get("https://wp.taclobananjph.com/wp-json/wp/v2/users")
      .then((res) => console.log(res));
    // axios
    //   .post(
    //     "/api/contact/",
    //     { fullName, email, message },
    //     {
    //       headers: {
    //         Accept: "application/json, text/plain, */*",
    //         "Content-Type": "application/json",
    //       },
    //     }
    //   )
    //   .then((res) => {
    //     console.log(res);
    //   });
  };

  return (
    <div>
      <p className="mb-3">Leave us a Message</p>
      <div>
        <form className={styles.contactContainer}>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email Address"
            onChange={(e) => changeFieldState(e, setEmail)}
          />
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Full Name"
            onChange={(e) => changeFieldState(e, setFullName)}
          />
          <textarea
            name="message"
            id="message"
            cols={30}
            rows={10}
            placeholder="Message"
            onChange={(e) => changeFieldState(e, setMessage)}
          ></textarea>
          <input type="submit" value="Send" onClick={(e) => submitForm(e)} />
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
