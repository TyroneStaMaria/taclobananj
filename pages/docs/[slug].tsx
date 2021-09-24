/* eslint-disable react/display-name */
import React from "react";
import Head from "next/head";
import { getAllDocs, getDocBySlug } from "../../utils/markdown";
import ReactMarkdown from "react-markdown/react-markdown.min";
// import remarkHtml from "remark-html";
// import markdownToHtml from "../../utils/markdownToHtml";

const Doc = ({ title, content }) => {
  return (
    <div>
      <Head>
        <title>{title} | Tacloban ANJ</title>
      </Head>
      {/* <ReactMarkdown children={content} /> */}
      <div className="container mx-auto py-24">
        {/* {content} */}
        <ReactMarkdown
          components={{
            h1: ({ node, ...props }: any) => (
              <h1 className="text-center" {...props} />
            ),
            p: ({ node, ...props }: any) => (
              <p className="mb-3" {...props} />
            ),
            h4: ({ node, ...props }: any) => (
              <h4 className="mb-3 mt-7 font-body font-bold text-body" {...props} />
            ),
            a:({ node, ...props }: any) => (
              <a className="text-red underline" target="_blank"  {...props} />
            )
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
