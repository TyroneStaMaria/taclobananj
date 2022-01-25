import React from "react";
import FlexContainer from "../../elements/FlexContainer/FlexContainer";
import Button from "../../elements/Button/Button";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="container mx-auto about-section">
      <FlexContainer className="items-center justify-between">
        <div className="mb-9 mr-0 text-center px-4 order-2 lg:px-0 lg:text-left lg:mb-0 lg:mr-24 lg:order-1">
          <p className="mb-7 text-justify">
            Sunshine Bakery Science Center is a project between Pilmico Foods
            Corporation and Tacloban AnJ Marketing. Tacloban AnJ Marketing is a
            distribution company that caters to the Visayas Region. It is
            focused on distributing grocery goods and Pilmico Foods that is
            composed of three divisions: Flour, Feeds, and Animal Health.
            <br /> <br /> The company was founded in 1969 by Adolfo and Betty
            Tanjuakio as Economy Trading which primarily sells cosmetics,
            kitchen utensils, and household products. In the year 2000&pos;s BT
            Marketing was introduced and started selling General Merchandise. It
            was then managed by Alan and Jo An Tanjuakio and Alice T. Coo. Then,
            in the late 2000s the company was named Tacloban AnJ Marketing.
          </p>
        </div>
        <div className="relative w-11/12 lg:w-full order-1 lg:order-2 mb-5 lg:mb-0">
          <div style={{ width: `300px`, height: `300px` }}>
            <Image
              src="/images/home/about1.jpeg"
              alt="about us"
              layout="fill"
              objectFit="contain"
              quality={100}
            />
          </div>
        </div>
      </FlexContainer>

      <FlexContainer className="items-center justify-between">
        <div className="relative w-11/12 lg:w-full mb-5 mr-0 lg:mb-0 lg:mr-24">
          <div style={{ width: `300px`, height: `300px` }}>
            <Image
              src="/images/home/about2.png"
              alt="about us"
              layout="fill"
              objectFit="contain"
              quality={100}
            />
          </div>
        </div>
        <div className="mb-9 text-center px-4 order-2 lg:px-0 lg:text-left lg:mb-0  lg:order-1">
          <p className="text-justify">
            Sunshine Bakery Science Center is a joint project that not only
            promotes and showcases the quality of bread that it produces using
            Pilmico Flour, but it also aims to provide training facilities to
            our local partners throughout Region VIII - to teach and help them
            improve their baking skills, to provide livelihood opportunities,
            and to achieve long term partnerships. In the last 50 years,
            continued growth has given us the opportunity to expand our business
            and provide utmost satisfaction and service to our valued customers.{" "}
            <br /> <br /> Greater Purpose Foundation Inc. was established with a
            goal to help nurture the needs of vulnerable women and children.
            Dove, as its spirit Animal, symbolizes the unending compassion that
            does not seek but does give. As a whole, Greater Purpose Foundation
            Inc. aims to provide programs that introduce possible livelihood to
            promote better lives for its beneficiaries.
          </p>
        </div>
      </FlexContainer>
    </section>
  );
};

export default AboutSection;
