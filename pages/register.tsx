import React from "react";
import RegistrationForm from "../components/templates/Forms/RegistrationForm";
import useUser from "../utils/useUser";
import Seo from "../components/elements/Seo/Seo";
import seoData from "../seo.json";

const Register = () => {
  const { user } = useUser({ redirectTo: "/", redirectIfFound: true });

  return (
    <div>
      <Seo data={seoData.register} />
      <section>
        <RegistrationForm />
      </section>
    </div>
  );
};

export default Register;
