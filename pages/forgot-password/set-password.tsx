import React from "react";
import Head from "next/head";
import NewPasswordForm from "../../components/templates/Forms/NewPasswordForm";
const SetPassword = () => {
  return (
    <div>
      <Head>
        <title>Validate Reset Code | Tacloban ANJ</title>
      </Head>
      <NewPasswordForm />
    </div>
  );
};

export default SetPassword;
