import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { REGISTER_API_URL, HUBSPOT_API_KEY } from "../../../lib/constants";
// import Error from "./Error";
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
    clearErrors,
    formState: { errors },
  } = useForm();

  const submitRegistration = async (event) => {
    event.preventDefault();
    console.log(userDetails);
    try {
      // const response: any = await axios.post(REGISTER_API_URL, userDetails);
      const res = await axios.post("/api/contact/create", {
        firstname: userDetails.first_name,
        lastname: userDetails.last_name,
        email: userDetails.email,
        phone: userDetails.phone,
        address: userDetails.address,
        gender: userDetails.gender,
      });
      console.log(res);
      // if (response.status === 200) {
      //   console.log(response.message);
      // }
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

  const createContact = async () => {
    try {
      const data = await axios.post(
        `https://api.hubapi.com/crm/v3/objects/contacts?hapikey=${HUBSPOT_API_KEY}`,
        { properties: { userDetails } },
        { headers: { "Access-Control-Allow-Origin": "*" } }
      );
      console.log(data);
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
    clearErrors(event.target.id);
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
          onSubmit={submitRegistration}
          className={styles.formContainer}
        >
          <div className="flex flex-col lg:flex-row">
            <div className="mr-3 w-full lg:w-1/2">
              <input
                // {...register("firstName", {
                //   required: true,
                // })}
                type="text"
                name="first_name"
                id="firstName"
                placeholder="First Name"
                value={userDetails.first_name}
                onChange={handleInputChange}
              />
            </div>
            <div className="w-full lg:w-1/2">
              <input
                // {...register("lastName", { required: true })}
                type="text"
                name="last_name"
                id="lastName"
                placeholder="Last Name"
                value={userDetails.last_name}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email Address"
            value={userDetails.email}
            onChange={handleInputChange}
          />
          <select
            name="gender"
            id="gender"
            // defaultValue=""
            value={userDetails.gender}
            onChange={handleInputChange}
          >
            <option value="" disabled>
              Gender
            </option>
            <option value={Gender.male}>Male</option>
            <option value={Gender.female}>Female</option>
            <option value={Gender.other}>Rather not say</option>
          </select>

          <input
            type="tel"
            name="phone"
            id="phone"
            placeholder="Contact Number"
            value={userDetails.phone}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="address"
            id="address"
            placeholder="Address"
            value={userDetails.address}
            onChange={handleInputChange}
          />
          <div className="flex flex-col lg:flex-row">
            <input
              className="mr-3"
              type="password"
              name="password"
              id="password"
              value={userDetails.password}
              onChange={handleInputChange}
              placeholder="Password"
            />
            <input
              type="password"
              name="confirm_password"
              id="confirm"
              value={userDetails.confirm_password}
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
