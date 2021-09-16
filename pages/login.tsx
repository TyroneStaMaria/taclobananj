import Head from "next/head";
import React from "react";
import LoginForm from "../components/templates/Forms/LoginForm";
import axios from "axios";
import { getAuthToken } from "../utils/cookies";
const Login = ({ data }) => {
  // console.log(data);
  return (
    <div>
      <Head>
        <title>Log in | Tacloban ANJ</title>
      </Head>
      <LoginForm />
    </div>
  );
};

// export async function getServerSideProps(context) {
//   const authToken = getAuthToken(context.req);
//   const { data } = await axios.post(
//     "https://wp.taclobananjph.com/wp-json/jwt-auth/v1/token/validate",
//     {},
//     { headers: { Authorization: "Bearer " + authToken } }
//   );

//   return {
//     props: {
//       data: data,
//     },
//   };
// }

export default Login;
