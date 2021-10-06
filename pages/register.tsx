import React from "react";
import Head from "next/head";
import RegistrationForm from "../components/templates/Forms/RegistrationForm";
import useUser from "../utils/useUser";

const Register = () => {
  const { user } = useUser({ redirectTo: "/", redirectIfFound: true });

  return (
    <div>
      <Head>
        <title>Register | Tacloban ANJ</title>
      </Head>
      <section>
        <RegistrationForm />
      </section>
    </div>
  );
};

export default Register;
