/* eslint-disable react/display-name */
import React from "react";
import Head from "next/head";
import { getAllDocs, getDocBySlug } from "../../utils/markdown";
import ReactMarkdown from "react-markdown/react-markdown.min";
import Seo from "../../components/elements/Seo/Seo";
import seoData from "../../seo.json";

const Doc = ({ title, content, slug }) => {
  const doc = {
    "terms-of-service": seoData.terms_of_service,
    "privacy-policy": seoData.privacy_policy,
  };

  return (
    <div>
      <Seo data={doc[slug]} />
      {/* <ReactMarkdown children={content} /> */}
      <div className="container mx-auto py-24 px-4  lg:px-0">
        {/* {content} */}
        <ReactMarkdown
          components={{
            h1: ({ node, ...props }: any) => (
              <h1 className="text-center" {...props} />
            ),
            p: ({ node, ...props }: any) => (
              <p className="mb-3 text-justify" {...props} />
            ),
            h4: ({ node, ...props }: any) => (
              <h4
                className="mb-3 mt-7 font-body font-bold text-body text-center lg:text-left"
                {...props}
              />
            ),
            a: ({ node, ...props }: any) => (
              <a className="text-red underline" target="_blank" {...props} />
            ),
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export async function getStaticProps({ params }) {
  const doc: any = getDocBySlug(params.slug, ["title", "content"]);
  // const content = await markdownToHtml(doc.content);
  return {
    props: {
      ...doc,
      slug: params.slug,
    },
  };
}

export async function getStaticPaths() {
  const docs: any = getAllDocs(["slug"]);
  // console.log("doc", docs);

  return {
    paths: docs.map((doc) => {
      return {
        params: {
          slug: doc.slug,
        },
      };
    }),
    fallback: false,
  };
}

export default Doc;
