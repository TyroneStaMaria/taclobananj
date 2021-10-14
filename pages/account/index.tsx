import React, { useEffect, useState } from "react";
import Head from "next/head";
import Sidebar from "../../components/templates/Account/Sidebar";
import AboutUser from "../../components/templates/Account/AboutUser";
import Privacy from "../../components/templates/Account/Privacy";
import axios from "axios";
import ImageUpload from "../../components/templates/Account/ImageUpload";

const Account = (props) => {
  const [user, setUser] = useState<any>({});

  const getUser = async () => {
    try {
      const { data } = await axios.get("/api/users/get-user-info");
      // console.log(data);
      // console.log(data);
      setUser({
        ...data,
        created: new Date(data.createdate).toDateString(),
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUser();
  }, []);
  return (
    <div>
      <Head>
        <title>My Account | Tacloban ANJ</title>
      </Head>
      <div className="flex">
        <Sidebar />
        <div className="pl-5 py-10">
          <h1>Account Dashboard</h1>
          {/* <ImageUpload /> */}
          <AboutUser user={user} getUser={getUser} cookie={props?.cookie} />
          <Privacy email={user.email} />
        </div>
      </div>
    </div>
  );
};

export default Account;

export async function getServerSideProps(context) {
  const cookie = context.req.headers.cookie.split("=")[1];

  return { props: { cookie: cookie } };
}
