import React from "react";
import CoreValueItem from "./../../elements/CoreValueItem/CoreValueItem";

const CoreValues = () => {
  return (
    <section className="container mx-auto about-section">
      <div className="flex flex-col items-center lg:flex-row">
        <div className="text-center lg:text-left">
          <h2>Core Values</h2>
          <p className="text-h5 px-10 lg:px-0">
            Tacloban AnJ Marketing is a company grounded in the Christian values
            of{" "}
          </p>
        </div>
        <div className="flex mx-24 lg:mx-auto flex-col items-center lg:items-start lg:flex-row">
          <CoreValueItem
            image={"/images/about/integrity.png"}
            coreValue="Integrity"
          />
          <CoreValueItem
            image={"/images/about/customer-excellence.png"}
            coreValue="Customer Excellence"
          />
          <CoreValueItem
            image={"/images/about/teamwork.png"}
            coreValue="Teamwork"
          />
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
