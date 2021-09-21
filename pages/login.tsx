import Head from "next/head";
import React from "react";
import LoginForm from "../components/templates/Forms/LoginForm";
import axios from "axios";
import { getAuthToken } from "../utils/cookies";
const Login = ({ data }) => {
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
