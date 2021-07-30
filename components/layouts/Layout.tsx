/* eslint-disable @next/next/no-page-custom-font */
import React from "react";
import Head from "next/head";
import Navbar from "../modules/Navbar/Navbar";
import Footer from "../modules/Footer/Footer";
interface LayoutProp {
  children: JSX.Element[] | JSX.Element;
}

const Layout = (props: LayoutProp): JSX.Element => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Sintony:wght@400;700&family=Source+Sans+Pro:ital,wght@0,900;1,900&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/images/anj-logo.png" />
      </Head>
      {/* Navbar */}
      <Navbar />
      <main>{props.children}</main>
      <Footer />
      {/* Footer */}
    </>
  );
};

export default Layout;
