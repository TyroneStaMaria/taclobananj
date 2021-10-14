import Image from "next/image";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import DefaultLoader from "./../../elements/DefaultLoader/DefaultLoader";

const ImageUpload = () => {
  const [image, setImage] = useState<any>({});
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    const url = reader.readAsDataURL(file);

    reader.onloadend = (e) => {
      setImage({ src: [reader.result] });
      console.log(url);
    };

    console.log(file);
  };

  const uploadPic = async (data) => {
    console.log(data);
  };

  console.log(image.src);

  return (
    <div>
      <form method="post" onSubmit={handleSubmit(uploadPic)}>
        <input
          {...register("pic")}
          type="file"
          name="pic"
          accept="image/*"
          onChange={onUpload}
        />
        <input type="submit" value="Upload" />
        {/* <Image
          unoptimized
          src={image?.src ? image.src[0] : "/images/unavailable.png"}
          width={300}
          height={300}
          alt="image"
        /> */}
        {/* <img src={image?.src ?? "/images/unavailable.png"} alt="hello" /> */}
      </form>
    </div>
  );
};

export default ImageUpload;
