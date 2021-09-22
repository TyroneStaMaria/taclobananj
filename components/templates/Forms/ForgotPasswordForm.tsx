import React, { useState } from "react";
import styles from "./Forms.module.scss";
import axios from "axios";
import { useRouter } from "next/router";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [emailRes, setEmailRes] = useState<any>();
  const router = useRouter();

  const submitEmail = async (event) => {
    event.preventDefault();
    const { data } = await axios.post("/api/users/forgot", { email: email });
    if (data.code) {
      setEmailRes(data);
    } else {
      localStorage.setItem("email", email);
      router.push("/forgot-password/validate-reset-code");
    }
  };

  const handleInputChange = (event) => {
    event.persist();
    setEmail(event.target.value);
  };

  return (
    <div>
      <div
        className="container mx-auto flex items-center justify-center flex-col"
        style={{ height: `60vh` }}
      >
        <div className="w-full max-w-sm mx-auto">
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <form
              method="post"
              className={styles.formContainer}
              onSubmit={submitEmail}
            >
              <h1 className="text-center mb-2 leading-none text-h2">
                Forgot Password
              </h1>
              <p className="text-center mb-3">Enter your email address</p>
              {emailRes?.code ? (
                <p className="text-red">{emailRes?.message}</p>
              ) : (
                ""
              )}
              <div className="mb-3">
                <input
                  // {...register("email")}
                  id="email"
                  type="text"
                  placeholder="Email Address"
                  name="email"
                  onChange={handleInputChange}
                  value={email}
                />
              </div>

              <input type="submit" value="Continue" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
