import React from "react";
import Head from "next/head";
import Sidebar from "../../components/templates/Account/Sidebar";
import AboutUser from "../../components/templates/Account/AboutUser";
import axios from "axios";
import { BASE_URL } from "../../lib/constants";

const fetchUser = async () =>
  await axios
    .get("http://localhost:3000/api/users/get-user-info")
    .then((res) => ({
      error: false,

      contactDetails: res.data,
    }))
    .catch(() => ({
      error: true,
      contactDetails: null,
    }));
// console.log(data);

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
        </div>
      </div>
    </div>
  );
};

export default Account;

// export async function getServerSideProps(context) {
//   // console.log(context.params);
//   const data = await fetchUser();
//   // console.log(data);
//   return {
//     props: { contactDetails: data },
//   };
// }
