import React from "react";
import Loader from "react-loader-spinner";

const DefaultLoader = () => {
  return (
    <div className="flex justify-center items-center">
      <Loader type="TailSpin" color="#bf2626" height={80} width={80} />
    </div>
  );
};

export default DefaultLoader;
