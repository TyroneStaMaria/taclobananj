import axios from "axios";
import Link from "next/link";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { REGISTER_API_URL } from "../../../lib/constants";
import DefaultLoader from "../../elements/DefaultLoader/DefaultLoader";
import ErrorFeedback from "./ErrorFeedback";
import styles from "./Forms.module.scss";

enum Gender {
  male = "Male",
  female = "Female",
  other = "Rather not say",
}

interface UserRegistration {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  confirm_password: string;
  gender: Gender | string;
  phone: string;
  address: string;
}

const RegistrationForm = () => {
  const [registerSuccess, setRegisterSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<any>(null);

  const validationSchema = Yup.object().shape({
    first_name: Yup.string().required("First Name is required").trim().strict(),
    last_name: Yup.string().required("Last Name is required").trim().strict(),
    email: Yup.string()
      .required("Email is required")
      .email("Email is invalid")
      .trim()
      .strict(),
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

  const formOptions = { resolver: yupResolver(validationSchema) };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm(formOptions);

  const submitRegistration = async (userDetails) => {
    setLoading(true);
    try {
      const response = await axios.post("/api/users/register", userDetails);
      // console.log(response);
      setRegisterSuccess(true);
      setErrorMessage(null);
      reset();
    } catch (err) {
      setErrorMessage(err.response.data);
      // console.log(err.response);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto flex items-center justify-center flex-col h-screen">
      <div className="bg-white px-10 pt-3 pb-20 rounded shadow-md text-black w-full max-w-lg mx-auto">
        <h1 className="mb-8 text-3xl text-center">Register </h1>
        {registerSuccess && (
          <p className="text-success">
            You have successfully registered.{" "}
            <span className="underline text-body">
              <Link href="/login"> Log in. </Link>{" "}
            </span>
          </p>
        )}
        {errorMessage && <p className="text-red">{errorMessage.wp.message}</p>}
        <form
          method="post"
          onSubmit={handleSubmit(submitRegistration)}
          className={styles.formContainer}
        >
          <div className="flex flex-col lg:flex-row">
            <div className="mr-3 w-full lg:w-1/2">
              <input
                {...register("first_name")}
                type="text"
                name="first_name"
                id="firstName"
                placeholder="First Name"
              />
              <ErrorFeedback error={errors.first_name} />
            </div>
            <div className="w-full lg:w-1/2">
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
          <div>
            <input
              {...register("email")}
              type="text"
              name="email"
              id="email"
              placeholder="Email Address"
            />
            <ErrorFeedback error={errors.email} />
          </div>
          <div>
            <select
              {...register("gender")}
              name="gender"
              id="gender"
              defaultValue=""
            >
              <option value="" disabled>
                Gender
              </option>
              <option value={Gender.male}>Male</option>
              <option value={Gender.female}>Female</option>
              <option value={Gender.other}>Rather not say</option>
            </select>
            <ErrorFeedback error={errors.gender} />
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
          <div className="flex flex-col lg:flex-row">
            <div className="mr-3 lg:w-1/2">
              <input
                {...register("password")}
                type="password"
                name="password"
                id="password"
                placeholder="Password"
              />
              <ErrorFeedback error={errors.password} />
            </div>
            <div className="lg:w-1/2">
              <input
                {...register("confirm_password")}
                type="password"
                name="confirm_password"
                id="confirm"
                placeholder="Confirm Password"
              />
              <ErrorFeedback error={errors.confirm_password} />
            </div>
          </div>
          {loading ? (
            <DefaultLoader />
          ) : (
            <input type="submit" value="Register" />
          )}
          <div className={styles.terms}>
            <p className="text-body">
              By clicking Register, you agree to our{" "}
              <span>
                <Link href="#">Terms of Service</Link>{" "}
              </span>{" "}
              and that you have read our{" "}
              <span>
                <Link href="#">Privacy Policy </Link>
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
