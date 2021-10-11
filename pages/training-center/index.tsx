import React from "react";
import Head from "next/head";
import TrainingItem from "../../components/elements/TrainingItem/TrainingItem";
import axios from "axios";
import { BASE_URL } from "../../lib/constants";
import useUser from "../../utils/useUser";
import Button from "../../components/elements/Button/Button";
import CarouselBanner from "../../components/templates/TrainingCenter/CarouselBanner";
const TrainingCenter = ({ trainingVideos }) => {
  const { user } = useUser();
  return (
    <div>
      <Head>
        <title>Training Center | Tacloban ANJ</title>
      </Head>
      {user?.isLoggedIn ? <CarouselBanner /> : <div></div>}

      <section>
        <h1>Training Center</h1>
        {user?.isLoggedIn ? (
          trainingVideos.nodes.map(
            ({ title, uri, trainingCenterContent: content }, index) => {
              return (
                <div className="mb-5" key={index}>
                  <TrainingItem
                    title={title}
                    pageUrl={uri}
                    description={content.description}
                    thumbnail={content.thumbnail.mediaItemUrl}
                  />
                </div>
              );
            }
          )
        ) : (
          <section>
            <div className="mx-auto w-1/2">
              <p className="text-center text-h4 text-red">
                You must be logged in to view the training center videos
              </p>
              <div className="text-center mt-5">
                <Button href="/login" btnStyle="redOutline">
                  Register / Log in
                </Button>
              </div>
            </div>
          </section>
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
