import React, { useState } from "react";
import styles from "./Forms.module.scss";
import axios from "axios";
import { useRouter } from "next/router";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import ErrorFeedback from "./ErrorFeedback";

const NewPasswordForm = () => {
  const router = useRouter();

  const validationSchema = Yup.object().shape({
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .trim()
      .strict(),
    confirm_password: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref("password"), null], "Passwords must match")
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
  const [error, setError] = useState<any>();

  const setNewPassword = async (formData) => {
    const email = localStorage.getItem("email");
    const code = localStorage.getItem("code");
    const { data } = await axios.post("/api/users/set-password", {
      email: email,
      code: code,
      password: formData.password,
      confirm_password: formData.confirm_password,
    });
    if (data.code) {
      setError(data);
      reset();
    } else {
      localStorage.clear();
      // localStorage.setItem("code", formData.code.toString());
      router.push("/");
    }

    console.log(data);
  };

  return (
    <div>
      <div
        className="container mx-auto flex items-center justify-center flex-col"
        style={{ height: `60vh` }}
      >
        <div className="w-full max-w-sm mx-auto">
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <form
              method="post"
              className={styles.formContainer}
              onSubmit={handleSubmit(setNewPassword)}
            >
              <h1 className="text-center mb-2 leading-none text-h2">
                Forgot Password
              </h1>
              <p className="text-center mb-3">Enter your new Password</p>
              {error?.code ? <p className="text-red">{error?.message}</p> : ""}
              <div className="mb-3">
                <input
                  {...register("password")}
                  id="password"
                  type="password"
                  placeholder="New Password"
                  name="password"
                />
                <ErrorFeedback error={errors.password} />
                <input
                  {...register("confirm_password")}
                  id="confirm_password"
                  type="password"
                  placeholder="Confirm New Password"
                  name="confirm_password"
                />
                <ErrorFeedback error={errors.confirm_password} />
              </div>

              <input type="submit" value="Continue" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPasswordForm;
