import React from "react";
import styles from "./Forms.module.scss";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import ErrorFeedback from "./ErrorFeedback";
import axios from "axios";

const LoginForm = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string().email().required("Email is required"),
    password: Yup.string().required("Password is required"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm(formOptions);

  const loginAccount = async (data) => {
    const response = await axios.post("/api/users/login", data, {
      withCredentials: true,
    });
    // console.log(response);
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
              onSubmit={handleSubmit(loginAccount)}
            >
              <h1 className="text-center mb-5">Log in</h1>
              <div className="mb-3">
                <input
                  {...register("email")}
                  id="email"
                  type="text"
                  placeholder="Email"
                  name="email"
                />
                <ErrorFeedback error={errors.email} />
              </div>
              <div className="mb-3">
                <input
                  {...register("password")}
                  id="password"
                  type="password"
                  placeholder="Password"
                  name="password"
                />
                <ErrorFeedback error={errors.password} />
              </div>
              <input type="submit" value="Log In" />
              <a
                className="mt-3 inline-block align-baseline font-bold text-sm text-red hover:underline"
                style={{ fontSize: `0.75rem` }}
                href="#"
              >
                Forgot Password?
              </a>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
