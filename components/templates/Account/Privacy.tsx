import React, { useState } from "react";
import styles from "./Account.module.scss";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import ErrorFeedback from "../Forms/ErrorFeedback";
import axios from "axios";
import DefaultLoader from "../../elements/DefaultLoader/DefaultLoader";

const Privacy = ({ email }) => {
  const [edit, setEdit] = useState(false);
  const [errorMessage, setErrorMessage] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const validationSchema = Yup.object().shape({
    oldPassword: Yup.string()
      .required("Old Password is required")
      // .min(6, "Password must be at least 6 characters")
      .trim()
      .strict(),
    newPassword: Yup.string()
      .required("New Password is required")
      .min(6, "Password must be at least 6 characters")
      .trim()
      .strict(),
    newConfirmPassword: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref("newPassword"), null], "Passwords must match")
      .trim()
      .strict(),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm(formOptions);

  const savePassword = async (userDetails) => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/edit-password", {
        ...userDetails,
        email: email,
      });
      reset();
    } catch (err) {
      setErrorMessage(err.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.dashboardSection}>
      <h3 className="border-b-2 border-body mb-5 text-center lg:text-left">
        Privacy and Security
      </h3>
      <div>
        {!edit ? (
          <div className="pl-7 lg:pl-0">
            <h4 className={styles.infoHeading}>
              Change Password
              <span
                className="text-base font-body underline cursor-pointer ml-2 text-red"
                onClick={() => {
                  setEdit(true);
                }}
              >
                Change{" "}
              </span>
            </h4>
          </div>
        ) : (
          <div>
            {errorMessage && <p className="text-red">{errorMessage}</p>}
            <form
              method="post"
              className={`${styles.formContainer} ${styles.passwordForm}`}
              onSubmit={handleSubmit(savePassword)}
            >
              <div>
                <input
                  {...register("oldPassword")}
                  type="password"
                  name="oldPassword"
                  id="oldPassword"
                  placeholder="Old Password"
                />
                <ErrorFeedback error={errors.oldPassword} />
                <input
                  {...register("newPassword")}
                  type="password"
                  name="newPassword"
                  id="newPassword"
                  placeholder="New Password"
                />
                <ErrorFeedback error={errors.newPassword} />
                <input
                  {...register("newConfirmPassword")}
                  type="password"
                  name="newConfirmPassword"
                  id="newConfirmPassword"
                  placeholder="Confirm New Password"
                />
                <ErrorFeedback error={errors.newConfirmPassword} />
              </div>
              {!loading ? (
                <div>
                  <input type="submit" value="Save" />
                  <button
                    onClick={() => {
                      setEdit(false);
                      reset();
                      setErrorMessage(null);
                    }}
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <DefaultLoader />
              )}
            </form>
          </div>
        )}
      </div>

      {/* <h4>Cha</h4> */}
    </div>
  );
};

export default Privacy;
