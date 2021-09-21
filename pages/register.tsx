import React from "react";
import Head from "next/head";
import RegistrationForm from "../components/templates/Forms/RegistrationForm";

const Register = () => {
  return (
    <div>
      <Head>
        <title>Register | Tacloban ANJ</title>
      </Head>
      <RegistrationForm />
    </div>
  );
};

export default Register;
