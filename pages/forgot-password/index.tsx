import React from "react";
import Head from "next/head";
import ForgotPasswordForm from "./../../components/templates/Forms/ForgotPasswordForm";

const ForgotPassword = () => {
  return (
    <div>
      <Head>
        <title>Forgot Password | Tacloban ANJ</title>
      </Head>
      <ForgotPasswordForm />
    </div>
  );
};

export default ForgotPassword;
