import Head from "next/head";
import React from "react";

const Seo = ({ data }) => {
  const { title, description } = data;
  return (
    <div>
      <Head>
        <title>{title} | Tacloban ANJ</title>
        <meta name="title" content={title} />
        <meta name="description" content={description} />

        <meta name="og:title" property="og:title" content={title} />
        <meta
          name="og:description"
          property="og:description"
          content={description}
        />
        <meta
          name="og:image"
          property="og:image"
          content="/images/link-preview.png"
        />
        <meta
          name="og:url"
          property="og:url"
          content="https://www.taclobananjph.com"
        />

        <meta
          name="twitter:card"
          property="twitter:card"
          content={description}
        />
        <meta name="twitter:title" property="twitter:title" content={title} />
        <meta
          name="twitter:description"
          property="twitter:description"
          content={description}
        />
        <meta
          name="twitter:url"
          property="twitter:url"
          content="https://www.taclobananjph.com"
        />
        <meta
          name="twitter:image"
          property="twitter:image"
          content="/images/link-preview.png"
        />
      </Head>
    </div>
  );
};

export default Seo;
