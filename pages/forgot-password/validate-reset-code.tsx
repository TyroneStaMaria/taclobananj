import React from "react";
import Head from "next/head";
import ValidateCodeForm from "../../components/templates/Forms/ValidateCodeForm";

const ValidateResetCode = () => {
  return (
    <div>
      <Head>
        <title>Validate Reset Code | Tacloban ANJ</title>
      </Head>
      <ValidateCodeForm />
    </div>
  );
};

export default ValidateResetCode;
