import React from "react";
import Head from "next/head";
import TrainingItem from "../../components/elements/TrainingItem/TrainingItem";
import axios from "axios";
import { BASE_URL } from "../../lib/constants";
const TrainingCenter = ({ trainingVideos }) => {
  return (
    <div>
      <Head>
        <title>Training Center | Tacloban ANJ</title>
      </Head>
      <section>
        <h1>Training Center</h1>
        {trainingVideos.nodes.map(
          ({ title, uri, trainingCenterContent: content }, index) => {
            return (
              <div className="mb-5" key={index}>
                <TrainingItem
                  title={title}
                  pageUrl={uri}
                  description={content.description}
                  videoUrl={content.video.mediaItemUrl}
                />
              </div>
            );
          }
        )}
      </section>
    </div>
  );
};

export default TrainingCenter;

export async function getServerSideProps(context) {
  try {
    // console.log(process.env.URL);

    const { data } = await axios.get(
      `${BASE_URL}/api/training-center/get-all-content`
    );

    return {
      props: { trainingVideos: { ...data } },
    };
  } catch (err) {
    console.log(err);
    return { props: {} };
    // throw new Error("Request not successful");
  }
}
