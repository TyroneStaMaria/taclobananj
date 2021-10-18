import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "./Account.module.scss";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import ErrorFeedback from "../Forms/ErrorFeedback";
import DefaultLoader from "../../elements/DefaultLoader/DefaultLoader";
import Image from "next/image";
import useUser from "../../../utils/useUser";
import { BsPencil } from "react-icons/bs";
// import FormData from "form-data";

enum Gender {
  male = "Male",
  female = "Female",
  other = "Rather not say",
}

// let formData = new FormData();

const AboutUser = ({ user, getUser, cookie }) => {
  const [edit, setEdit] = useState(false);
  const [errorMessage, setErrorMessage] = useState<any>(null);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [img, setImg] = useState<any>();

  const validationSchema = Yup.object().shape({
    first_name: Yup.string().required("First Name is required").trim().strict(),
    last_name: Yup.string().required("Last Name is required").trim().strict(),
    gender: Yup.string().required("Gender is required").trim().strict(),
    phone: Yup.string()
      .required("Phone number is required")
      .matches(
        /((\+63)|0)\d{10}/,
        "Phone number must be a valid format 09XXXXXXXXX or +639XXXXXXXXX"
      )
      .trim()
      .strict(),
    address: Yup.string().required("Address is required").trim().strict(),
  });

  const formOptions = {
    resolver: yupResolver(validationSchema),
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setValue,
  } = useForm(formOptions);

  const cleanupAfterSave = async () => {
    setErrorMessage(null);
    await getUser();
    setEdit(false);
    setSuccess(true);
  };

  const saveChanges = async (userDetails) => {
    // console.log(userDetails.profile_image[0].name);
    let formData = new FormData();
    try {
      setLoading(true);

      const userBody = {
        ...userDetails,
        id: user.hs_object_id,
        email: user.email,
      };

      if (userDetails.display_picture) {
        formData.append(
          "file",
          userDetails.display_picture[0],
          userDetails.display_picture[0].name
        );

        const uploadedImage = await axios.post(
          "https://wp.taclobananjph.com/wp-json/wp/v2/media",
          formData,
          {
            headers: {
              Authorization: `Bearer ${cookie}`,
              "Content-Type": `multipart/form-data`,
              "Content-Disposition": `attachment`,
            },
          }
        );

        userBody.profile_image = uploadedImage.data.source_url;
      }

      const response = await axios.post("/api/users/edit", userBody);

      cleanupAfterSave();
    } catch (err) {
      console.log(err);

      setErrorMessage(err.response);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user) {
      setValue("first_name", user.firstname);
      setValue("last_name", user.lastname);
      setValue("gender", user.gender);
      setValue("phone", user.phone);
      setValue("address", user.address);
      if (user?.profileImage) {
        setImg([user?.profileImage[0]]);
      }
    }
  }, [user]);

  const onUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    const url = reader.readAsDataURL(file);

    reader.onloadend = (e) => {
      setImg([reader.result]);
      // console.log(reader.result);
    };
  };
  return (
    <div className={styles.dashboardSection}>
      <div className="flex justify-between items-end border-b-2 border-body mb-5  flex-col lg:flex-row mt-5 lg:mt-0">
        <h2 className="text-center lg:text-left">
          {user?.firstname
            ? `Welcome, ${user.firstname} ${user.lastname}`
            : "Loading..."}
        </h2>
        <h3 className="mr-4 lg:mr-0">Edit Profile</h3>
      </div>
      <div>
        <p className="pl-7 lg:pl-0">Account Created: {user?.created}</p>
        <form
          action="post"
          className={styles.formContainer}
          onSubmit={handleSubmit(saveChanges)}
        >
          <div>
            <h3 className={styles.infoHeading}>Profile Picture</h3>

            <div
              className="relative my-5 shadow-lg cursor-pointer"
              style={{ width: `200px`, height: `200px` }}
              onClick={() => {
                setEdit(!edit);
              }}
            >
              <div>
                <Image
                  unoptimized
                  src={img ? img[0] : "/images/profile.jpeg"}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  alt="image"
                />
              </div>
              <div className="absolute bottom-0 right-0 bg-red p-1 text-white">
                <BsPencil />
              </div>
            </div>
            {edit && (
              <div className="mb-5">
                <p>Upload Photo</p>
                <input
                  {...register("display_picture")}
                  type="file"
                  name="display_picture"
                  accept="image/*"
                  onChange={onUpload}
                />
              </div>
            )}
          </div>
          <div className={`${styles.infoContainer} flex flex-col lg:flex-row`}>
            <div className={styles.flexChild}>
              <div>
                <h3 className={styles.infoHeading}>First Name</h3>
              </div>
              <div>
                <input
                  {...register("first_name")}
                  type="text"
                  name="first_name"
                  id="firstName"
                  placeholder="First Name"
                />
                <ErrorFeedback error={errors.first_name} />
              </div>
            </div>
            <div className={styles.flexChild}>
              <div>
                <h3 className={styles.infoHeading}>Last Name</h3>
              </div>
              <div>
                <input
                  {...register("last_name")}
                  type="text"
                  name="last_name"
                  id="lastName"
                  placeholder="Last Name"
                />
                <ErrorFeedback error={errors.last_name} />
              </div>
            </div>
          </div>
          <div className={styles.infoContainer}>
            <div>
              <div>
                <h3 className={styles.infoHeading}>Email</h3>
              </div>
              <p className={styles.infoMain} style={{ wordWrap: `break-word` }}>
                {user?.email ?? "Loading..."}
              </p>
            </div>
            <div>
              <div>
                <h3 className={styles.infoHeading}>Address</h3>
              </div>

              <div>
                <input
                  {...register("address")}
                  type="text"
                  name="address"
                  id="address"
                  placeholder="Address"
                />
                <ErrorFeedback error={errors.address} />
              </div>
            </div>
          </div>
          <div className={styles.infoContainer}>
            <div>
              <div>
                <h3 className={styles.infoHeading}>Phone Number</h3>
              </div>

              <div>
                <input
                  {...register("phone")}
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="Contact Number"
                />
                <ErrorFeedback error={errors.phone} />
              </div>
            </div>
            <div>
              <h3 className={styles.infoHeading}>Gender</h3>

              <div>
                <select {...register("gender")} name="gender" id="gender">
                  <option value="" disabled>
                    Gender
                  </option>
                  <option value={Gender.male}>Male</option>
                  <option value={Gender.female}>Female</option>
                  <option value={Gender.other}>Rather not say</option>
                </select>
                <ErrorFeedback error={errors.gender} />
              </div>
            </div>
          </div>
          <div className="my-5">
            <h3 className={styles.infoHeading}>
              Membership: <span className="text-h5 font-body">Free</span>
            </h3>
            <p className="text-red">*** Premium Membership coming soon! ***</p>
          </div>

          {!loading ? (
            <div>
              <input type="submit" value="Save" />
            </div>
          ) : (
            <DefaultLoader />
          )}
          {success && (
            <p className="text-success mt-5">Account successfully edited</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default AboutUser;
