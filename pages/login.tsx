import React from "react";
import LoginForm from "../components/templates/Forms/LoginForm";
import useUser from "../utils/useUser";
import Seo from "../components/elements/Seo/Seo";
import seoData from "../seo.json";

const Login = () => {
  const { user } = useUser({ redirectTo: "/", redirectIfFound: true });
  return (
    <div>
      <Seo data={seoData.login} />
      <section>
        <LoginForm />
      </section>
    </div>
  );
};

export default Login;
