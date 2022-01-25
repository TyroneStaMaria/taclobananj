import Image from "next/image";
import React from "react";

const CorporateResponsibility = () => {
  return (
    <section className="container mx-auto about-section">
      <div className="flex flex-col lg:flex-row px-7 lg:px-0">
        <div className="border-2 border-t-0 lg:border-t-2 lg:border-r-0 border-red text-center order-2 lg:order-1 ">
          <h2>Corporate Responsibility</h2>
          <p
            className="w-5/6 lg:w-4/6 mx-auto mt-2"
            style={{ fontSize: "1.075rem" }}
          >
            As a God-Centered company, Tacloban AnJ Marketing aims to give back
            to the community through feeding program efforts, packed grocery
            goods for employees, and other means to provide aid to the marginal
            communities of the Visayas Region.
          </p>
        </div>
        <div className="order-1 lg:order-2 ">
          <div className="relative w-full lg:w-80" style={{ height: "200px" }}>
            <Image
              alt="Corporate Responsibility"
              src="/images/corporate-responsibility.jpeg"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CorporateResponsibility;
