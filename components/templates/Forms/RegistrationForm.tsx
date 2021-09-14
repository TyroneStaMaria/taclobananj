import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { REGISTER_API_URL } from "../../../lib/constants";
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
  const [userDetails, setUserDetails] = useState<UserRegistration>({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirm_password: "",
    gender: "",
    phone: "",
    address: "",
  });

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const submitRegistration = async (event) => {
    event.preventDefault();
    console.log(userDetails);
    try {
      const response: any = await axios.post(REGISTER_API_URL, userDetails);
      if (response.status === 200) {
        console.log(response.message);
      }
      setUserDetails({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        confirm_password: "",
        gender: "",
        phone: "",
        address: "",
      });
    } catch (err) {
      console.log(err);
    }
  };

  const onError = (errs, e) => {
    Object.values(errs).forEach(({ type, ref }) => {
      const message = `${ref.placeholder} is required.`;
      setError(ref.id, { type, message });
    });
  };

  const handleInputChange = (event) => {
    event.persist();
    setUserDetails((details) => ({
      ...details,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <div className="container mx-auto flex items-center justify-center flex-col h-screen">
      <div className="bg-white px-10 pt-3 pb-20 rounded shadow-md text-black w-full max-w-lg mx-auto">
        <h1 className="mb-8 text-3xl text-center">Register </h1>
        <form
          method="post"
          onSubmit={handleSubmit(submitRegistration, onError)}
          className={styles.formContainer}
        >
          <div className="flex flex-col lg:flex-row">
            <div className="mr-3">
              <input
                {...register("firstName", {
                  required: true,
                  // message: "First Name is required",
                })}
                type="text"
                name="first_name"
                id="firstName"
                placeholder="First Name"
                onChange={handleInputChange}
              />
              {errors.firstName && (
                <p
                  className="mb-3 -mt-3 text-red"
                  style={{ fontSize: `0.75rem` }}
                >
                  {errors.firstName.message}
                </p>
              )}
            </div>
            <div>
              <input
                {...register("lastName", { required: true })}
                type="text"
                name="last_name"
                id="lastName"
                placeholder="Last Name"
                onChange={handleInputChange}
              />
            </div>
          </div>

          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email Address"
            onChange={handleInputChange}
          />
          <select
            name="gender"
            id="gender"
            defaultValue=""
            onChange={handleInputChange}
          >
            <option value="" disabled>
              Gender
            </option>
            <option value={Gender.male}>Male</option>
            <option value={Gender.female}>Female</option>
            <option value={Gender.other}>Rather not say</option>
          </select>
          {/* <div>
            <p>Gender</p>
            <div className={styles.genderSelect}>
              <div>
                <input type="radio" id="male" name="gender" value="male" />
                <label htmlFor="male" className="ml-1 mr-3 text-body">
                  Male
                </label>
              </div>
              <div>
                <input type="radio" id="female" name="gender" value="female" />
                <label htmlFor="female" className="ml-1 mr-3 text-body">
                  Female
                </label>
              </div>
              <div>
                <input type="radio" id="other" name="gender" value="other" />
                <label htmlFor="other" className="ml-1 mr-3 text-body">
                  Rather not say
                </label>
              </div>
            </div>
          </div> */}
          <input
            type="tel"
            name="phone"
            id="phone"
            placeholder="Contact Number"
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="address"
            id="address"
            placeholder="Address"
            onChange={handleInputChange}
          />
          <div className="flex flex-col lg:flex-row">
            <input
              className="mr-3"
              type="password"
              name="password"
              id="password"
              onChange={handleInputChange}
              placeholder="Password"
            />
            <input
              type="password"
              name="confirm_password"
              id="confirm"
              onChange={handleInputChange}
              placeholder="Confirm Password"
            />
          </div>

          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
