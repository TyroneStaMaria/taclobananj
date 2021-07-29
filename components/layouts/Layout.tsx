import React from "react";
import Head from "next/head";

interface LayoutProp {
  pageTitle: string;
  children: JSX.Element[] | JSX.Element;
}

const Layout = (props: LayoutProp): JSX.Element => {
  return (
    <>
      <Head>
        <title> {props.pageTitle} | Tacloban ANJ</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Navbar */}
      <main>{props.children}</main>
      {/* Footer */}
    </>
  );
};

export default Layout;
