import React from "react";
import Image from "next/image";
import Button from "../../elements/Button/Button";
import FlexContainer from "../../elements/FlexContainer/FlexContainer";

const About = (): JSX.Element => {
  return (
    <section className="bg-alternate">
      <div className="container mx-auto ">
        <h2 className="text-center lg:text-left">About Us</h2>
        <FlexContainer className="items-center justify-between">
          <div className="mb-9 mr-0 text-center px-4 order-2 lg:px-0 lg:text-justify lg:mb-0 lg:mr-24 lg:order-1">
            <p className="mb-7">
              Sunshine Bakery Science Center is a project between Pilmico Foods
              Corporation and Tacloban AnJ Marketing. Tacloban AnJ Marketing is
              a distribution company that caters to the Visayas Region. It is
              focused on distributing grocery goods and Pilmico Foods that is
              composed of three divisions: Flour, Feeds, and Animal Health.
              <br /> <br /> The company was founded in 1969 by Adolfo and Betty
              Tanjuakio as Economy Trading which primarily sells cosmetics,
              kitchen utensils, and household products. In the year 2000s BT
              Marketing was introduced and started selling General Merchandise.
              It was then managed by Alan and Jo An Tanjuakio and Alice T. Coo.
              Then, in the late 2000s the company was named Tacloban AnJ
              Marketing.
            </p>
            <Button href="/about" btnStyle="redOutline">
              Learn More
            </Button>
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
      </div>
    </section>
  );
};
export default About;
