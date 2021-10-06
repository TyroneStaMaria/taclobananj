import React, { useState } from "react";
import styles from "./Forms.module.scss";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import ErrorFeedback from "./ErrorFeedback";
import axios from "axios";
import Router from "next/router";
import Link from "next/link";
import useUser from "../../../utils/useUser";

const LoginForm = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string().email().required("Email is required"),
    password: Yup.string().required("Password is required"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };
  const [error, setError] = useState(false);
  const { mutateUser } = useUser({ redirectTo: "/", redirectIfFound: true });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm(formOptions);

  const loginAccount = async (data) => {
    try {
      mutateUser(
        await axios.post("/api/users/login", data, {
          withCredentials: true,
        })
      );
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div>
      <div className="container mx-auto flex items-center justify-center flex-col">
        <div className="w-full max-w-sm mx-auto">
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <form
              method="post"
              className={styles.formContainer}
              onSubmit={handleSubmit(loginAccount)}
            >
              <h1 className="text-center mb-5">Log in</h1>
              {error && (
                <p className="text-red mb-2" style={{ fontSize: `0.75rem` }}>
                  Invalid Username or Password
                </p>
              )}

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
              <Link href="/forgot-password">
                <a
                  style={{ fontSize: `0.75rem` }}
                  className="mt-3 inline-block align-baseline font-bold text-sm text-red hover:underline"
                >
                  Forgot Password?
                </a>
              </Link>
            </form>
          </div>
          <div>
            <p className="text-center">
              Don&apos;t have an account?{" "}
              <Link href="/register">
                <a className="text-red underline cursor-pointer">Register</a>
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
