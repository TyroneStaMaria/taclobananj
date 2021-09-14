import Head from "next/head";
import React from "react";
import LoginForm from "../components/templates/Forms/LoginForm";

const Login = () => {
  return (
    <div>
      <Head>
        <title>Log in | Tacloban ANJ</title>
      </Head>
      <LoginForm />
    </div>
  );
};

export default Login;
