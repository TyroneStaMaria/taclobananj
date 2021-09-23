/* eslint-disable @next/next/no-page-custom-font */
import React from "react";
import Head from "next/head";
import Navbar from "../modules/Navbar/Navbar";
import Footer from "../modules/Footer/Footer";
import BackToTop from "../elements/BackToTop/BackToTop";
interface LayoutProp {
  children: JSX.Element[] | JSX.Element;
}

const Layout = (props: LayoutProp): JSX.Element => {
  const messengerEmbed = `
    <div id="fb-root"></div>
    <script>
    window.fbAsyncInit = function() {
      FB.init({
        xfbml            : true,
        version          : 'v12.0'
      });
    };

    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));</script>

    <div class="fb-customerchat"
      attribution="install_email"
      attribution_version="biz_inbox"
      page_id="538845559986335"
      theme_color= "#f9bfbf"
      >
    </div>
  `;
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
        {/* <link rel="stylesheet" href="/fonts/Neufreit/stylesheet.css" /> */}
        <link rel="icon" href="/images/anj-logo.png" />
      </Head>
      {/* Navbar */}
      <Navbar />
      <main>
        {props.children}
        <BackToTop />
      </main>
      <Footer />
      <div dangerouslySetInnerHTML={{ __html: messengerEmbed }}></div>
      {/* Footer */}
    </>
  );
};

export default Layout;
