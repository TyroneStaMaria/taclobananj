import React from "react";

const MissionVisionItem = ({ name, description }) => {
  return (
    <div className="flex items-center lg:items-start flex-col lg:flex-row">
      <div className="bg-red px-2  w-9/12 lg:w-1/5">
        <h2 className="text-white text-center">{name}</h2>
      </div>
      <div className="px-3 lg:px-0 lg:ml-4 lg:w-9/12 text-center lg:text-justify mt-5 lg:mt-0">
        <p className="text-h5">{description}</p>
      </div>
    </div>
  );
};

export default MissionVisionItem;
