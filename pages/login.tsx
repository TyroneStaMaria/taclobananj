import Head from "next/head";
import React from "react";
import LoginForm from "../components/templates/Forms/LoginForm";
import useUser from "../utils/useUser";

const Login = () => {
  const { user } = useUser({ redirectTo: "/", redirectIfFound: true });
  return (
    <div>
      <Head>
        <title>Log in | Tacloban ANJ</title>
      </Head>
      <section>
        <LoginForm />
      </section>
    </div>
  );
};

export default Login;
