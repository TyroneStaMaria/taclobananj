import React from "react";
import Head from "next/head";
import axios from "axios";
import ReactPlayer from "react-player";

const TrainingVideo = ({ trainingVideo }) => {
  const { title, trainingCenterContent } = trainingVideo;
  return (
    <div>
      <Head>
        <title>{title} | Tacloban ANJ</title>
      </Head>
      <section>
        <div className="container mx-auto">
          <ReactPlayer
            className="mx-auto"
            url={trainingCenterContent.video.mediaItemUrl}
            controls
            config={{
              file: {
                attributes: {
                  controlsList: "nodownload",
                },
              },
            }}
            width="80%"
            height="auto"
          />
          <div className=" mx-5 lg:mx-28">
            <h1 className="mt-5 mb-3 text-h3">{title}</h1>
            <p className="text-justify">{trainingCenterContent.description}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TrainingVideo;

export async function getStaticProps(context) {
  // console.log(context);
  const { slug } = context.params;

  const { data } = await axios.get(
    `${process.env.URL}/api/training-center/get-single-content`,
    { params: { slug } }
  );

  return { props: { trainingVideo: { ...data } } };
}

export async function getStaticPaths() {
  const { data } = await axios.get(
    `${process.env.URL}/api/training-center/get-all-content`
  );

  const paths = data.nodes.map(({ slug }) => {
    return {
      params: {
        slug: slug,
      },
    };
  });

  return { paths, fallback: false };
}
