import Head from "next/head";
import React from "react";

const Seo = ({ data }) => {
  const { title, description } = data;
  return (
    <div>
      <Head>
        <title>{title} | Tacloban ANJ</title>
        <meta name="title" content={title} />
        <meta name="og:title" property="og:title" content={title} />

        <meta name="description" content={description} />
        <meta
          name="og:description"
          property="og:description"
          content={description}
        />

        <meta name="twitter:card" content={description} />
      </Head>
    </div>
  );
};

export default Seo;
