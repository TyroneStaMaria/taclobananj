import React from "react";
import Head from "next/head";
import axios from "axios";
import ReactPlayer from "react-player";
import { BASE_URL } from "../../lib/constants";
import useUser from "../../utils/useUser";

const TrainingVideo = ({ trainingVideo }) => {
  const { user } = useUser({ redirectTo: "/", redirectIfFound: false });

  const { title, trainingCenterContent } = trainingVideo;
  return (
    <div>
      <Head>
        <title>{title} | Tacloban ANJ</title>
      </Head>
      <section>
        <div className="container mx-auto">
          <div className=" mx-5 mb-5 lg:mx-32">
            <h1 className="mb-3 text-h2">{title}</h1>
            <p className="text-justify">{trainingCenterContent.description}</p>
          </div>
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
    `${BASE_URL}/api/training-center/get-single-content`,
    { params: { slug } }
  );

  return { props: { trainingVideo: { ...data } } };
}

export async function getStaticPaths() {
  const { data } = await axios.get(
    `${BASE_URL}/api/training-center/get-all-content`
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
