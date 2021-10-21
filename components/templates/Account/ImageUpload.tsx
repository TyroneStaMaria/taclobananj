import Image from "next/image";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import DefaultLoader from "./../../elements/DefaultLoader/DefaultLoader";

const ImageUpload = () => {
  return (
    <div>
      <div>
        <h1>upload</h1>
        <input
          // {...register("display_picture")}
          type="file"
          name="display_picture"
          accept="image/*"
          // onChange={onUpload}
        />
      </div>
    </div>
  );
};

export default ImageUpload;
