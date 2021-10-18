import React, { useEffect, useState } from "react";
import Head from "next/head";
import Sidebar from "../../components/templates/Account/Sidebar";
import AboutUser from "../../components/templates/Account/AboutUser";
import Privacy from "../../components/templates/Account/Privacy";
import axios from "axios";
import ImageUpload from "../../components/templates/Account/ImageUpload";
import useUser from "../../utils/useUser";
const Account = (props) => {
  const [user, setUser] = useState<any>({});
  const { user: u } = useUser({ redirectTo: "/", redirectIfFound: false });

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
      <section className="bg-red">
        <h1 className="text-center text-white">Account Dashboard</h1>
      </section>
      <section>
        <div className="flex flex-col items-center lg:items-start lg:flex-row">
          <Sidebar />
          <div className="lg:pl-10">
            {/* <ImageUpload /> */}
            <AboutUser user={user} getUser={getUser} cookie={props?.cookie} />
            <Privacy email={user.email} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Account;

export async function getServerSideProps(context) {
  if (context.req.headers.cookie) {
    const cookie = context.req.headers.cookie?.split("=")[1];
    return { props: { cookie: cookie } };
  }
  return { props: {} };
}
