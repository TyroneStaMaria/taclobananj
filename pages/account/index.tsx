import React from "react";
import Head from "next/head";
import Sidebar from "../../components/templates/Account/Sidebar";
import AboutUser from "../../components/templates/Account/AboutUser";
import Privacy from "../../components/templates/Account/Privacy";
import axios from "axios";

const Account = (props) => {
  console.log(props);
  return (
    <div>
      <Head>
        <title>My Account | Tacloban ANJ</title>
      </Head>
      <div className="flex">
        <Sidebar />
        <div className="pl-5">
          <h1>Account Dashboard</h1>
          <AboutUser />
          <Privacy />
        </div>
      </div>
    </div>
  );
};

export default Account;
