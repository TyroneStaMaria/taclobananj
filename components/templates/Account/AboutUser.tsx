import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "./Account.module.scss";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import ErrorFeedback from "../Forms/ErrorFeedback";
import DefaultLoader from "../../elements/DefaultLoader/DefaultLoader";
enum Gender {
  male = "Male",
  female = "Female",
  other = "Rather not say",
}

const AboutUser = ({ user, getUser }) => {
  const [edit, setEdit] = useState(false);
  const [errorMessage, setErrorMessage] = useState<any>(null);
  const [loading, setLoading] = useState(false);

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
    defaultValues: { first_name: user?.firstname },
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
    setLoading(false);
  };

  const saveChanges = async (userDetails) => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/edit", {
        ...userDetails,
        id: user.hs_object_id,
        email: user.email,
      });

      cleanupAfterSave();
    } catch (err) {
      setErrorMessage(err.response.data);
    }
  };

  useEffect(() => {
    if (user) {
      setValue("first_name", user.firstname);
      setValue("last_name", user.lastname);
      setValue("gender", user.gender);
      setValue("phone", user.phone);
      setValue("address", user.address);
    }
  }, [user]);

  return (
    <div>
      <h3 className="border-b-2 border-body mb-5">
        Account Information{" "}
        <span
          className="text-base font-body underline cursor-pointer"
          onClick={() => {
            setEdit(true);
          }}
        >
          Edit Profile
        </span>
      </h3>
      <div>
        <p>Account Created: {user?.created}</p>
        <form
          action="post"
          className={styles.formContainer}
          onSubmit={handleSubmit(saveChanges)}
        >
          <div className={styles.infoContainer}>
            <div>
              <div>
                <h3 className={styles.infoHeading}>First Name</h3>
              </div>
              {!edit ? (
                <p className={styles.infoMain}>
                  {user?.firstname ?? "Loading..."}
                </p>
              ) : (
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
              )}
            </div>
            <div>
              <div>
                <h3 className={styles.infoHeading}>Last Name</h3>
              </div>
              {!edit ? (
                <p className={styles.infoMain}>
                  {user?.lastname ?? "Loading..."}
                </p>
              ) : (
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
              )}
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
              {!edit ? (
                <p className={styles.infoMain}>
                  {user?.address ?? "Loading..."}
                </p>
              ) : (
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
              )}
            </div>
          </div>

          <div className={styles.infoContainer}>
            <div>
              <div>
                <h3 className={styles.infoHeading}>Phone Number</h3>
              </div>
              {!edit ? (
                <p className={styles.infoMain}>{user?.phone ?? "Loading..."}</p>
              ) : (
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
              )}
            </div>
            <div>
              <h3 className={styles.infoHeading}>Gender</h3>
              {!edit ? (
                <p className={styles.infoMain}>
                  {user?.gender ?? "Loading..."}
                </p>
              ) : (
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
              )}
            </div>
          </div>
          {edit &&
            (!loading ? (
              <div>
                <input type="submit" value="Save" />
                <button
                  onClick={() => {
                    setEdit(false);
                  }}
                >
                  Cancel
                </button>
              </div>
            ) : (
              <DefaultLoader />
            ))}
        </form>
        <div className="mt-5">
          <h3 className={styles.infoHeading}>
            Membership: <span className="text-h5 font-body">Free</span>
          </h3>
          <p className="text-red">*** Premium Membership coming soon! ***</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUser;
