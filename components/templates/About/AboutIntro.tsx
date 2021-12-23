import React from "react";
import FlexContainer from "../../elements/FlexContainer/FlexContainer";
import Button from "../../elements/Button/Button";
import Image from "next/image";

const AboutIntro = () => {
  return (
    <section className="container mx-auto">
      <h1 className="text-center">About Us</h1>
      <div className="flex items-center text-center px-5 lg:px-0 lg:text-justify mb-5 flex-col lg:flex-row">
        <div>
          <div className="relative" style={{ width: "150px", height: "150px" }}>
            <Image
              src="/images/anj-logo.png"
              layout="fill"
              objectFit="cover"
              alt="Tacloban ANJ logo"
            />
          </div>
        </div>
        <div className="lg:ml-5">
          <p className="text-h5 ">
            Tacloban AnJ Marketing is a distribution company catering to the
            Visayas Region that focuses on distributing grocery goods and
            Pilmico Foods is composed of three divisions: Flour, Feeds and
            Animal Health.
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center text-center px-5 lg:px-0 lg:text-justify">
        <p className="text-h5 ">
          The company was founded in 1969 by Adolfo and Betty Tanjuakio as
          Economy Trading which primarily sells cosmetics, kitchen utensils and
          household products. In the year 2000’s BT Marketing was introduced and
          started selling General Merchandise. It was then managed by Alan and
          Jo An Tanjuakio and Alice T. Coo. Then, in the late 2000’s the company
          was named Tacloban AnJ Marketing.
        </p>
        <br />
        <p className="text-h5 ">
          We aim to provide not only to deliver grocery goods, but also the
          Pilmico Foods that will help the Visayas Region. Continued growth has
          given us the opportunity to expand our business and provide outmost
          satisfaction and service to our valued customers.
        </p>
      </div>
    </section>
  );
};

export default AboutIntro;
