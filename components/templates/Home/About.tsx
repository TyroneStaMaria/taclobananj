import React from "react";
import Image from "next/image";
import Button from "../../elements/Button/Button";

const About = (): JSX.Element => {
  return (
    <section className="bg-alternate">
      <div className="container mx-auto ">
        <h2 className="text-center lg:text-left">About Us</h2>
        <div className="flex items-center justify-between flex-col lg:flex-row">
          <div className="flex-shrink mb-9 mr-0 text-center px-4 lg:px-0 lg:text-left lg:mb-0 lg:mr-24 ">
            <p className="mb-7">
              Sunshine Bakery Science Center is a project between Pilmico Foods
              Corporation and Tacloban AnJ Marketing. Tacloban AnJ Marketing is
              a distribution company that caters the Visayas Region. It is
              focused on distributing grocery goods and Pilmico Foods that is
              composed of three divisions: Flour, Feeds and Animal Health.{" "}
              <br /> <br /> The company was founded in 1969 by Adolfo and Betty
              Tanjuakio as Economy Trading which primarily sells cosmetics,
              kitchen utensils and household products. In the year 2000’s BT
              Marketing was introduced and started selling General Merchandise.
              It was then managed by Alan and Jo An Tanjuakio and Alice T. Coo.
              Then, in the late 2000’s the company was named Tacloban AnJ
              Marketing.
            </p>
            <Button href="/about" variant="outline" color="red">
              Learn More
            </Button>
          </div>
          <div className=" w-11/12 lg:w-full">
            <Image
              src="/images/home/about1.jpeg"
              alt="about us"
              width="1477"
              height="966"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
