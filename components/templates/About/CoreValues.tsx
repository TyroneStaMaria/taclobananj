import React from "react";
import CoreValueItem from "./../../elements/CoreValueItem/CoreValueItem";

const CoreValues = () => {
  return (
    <section className="container mx-auto about-section">
      <div className="flex">
        <div>
          <h2>Core Values</h2>
          <p className="text-h5">
            Tacloban AnJ Marketing a company grounded in Christian values of{" "}
          </p>
        </div>
        <div className="flex mx-auto">
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
