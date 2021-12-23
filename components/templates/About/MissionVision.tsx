import React from "react";
import MissionVisionItem from "../../elements/MissionVisionItem/MissionVisionItem";
const MissionVision = () => {
  return (
    <section className="container mx-auto ">
      <div>
        <MissionVisionItem
          name="Our Mission"
          description="Our mission is to distribute the best products, at the best price, with outstanding customer service leading to lasting relationship and maximum satisfaction."
        />
      </div>
      <div className="mt-9">
        <MissionVisionItem
          name="Our Vision"
          description="To be the number one most-customer trusted and relied-upon distributor offering one stop grocery products in the Visayas Region providing business opportunities and a passion for quality that achieves customer satisfaction."
        />
      </div>
    </section>
  );
};

export default MissionVision;
