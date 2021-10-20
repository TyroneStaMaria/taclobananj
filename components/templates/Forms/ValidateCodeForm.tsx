import React, { useState } from "react";
import styles from "./Forms.module.scss";
import axios from "axios";
import { useRouter } from "next/router";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import ErrorFeedback from "./ErrorFeedback";

const ValidateCodeForm = () => {
  const router = useRouter();

  const validationSchema = Yup.object().shape({
    code: Yup.number()
      .integer()
      .min(4, "The code must be 4 digits")
      .required("Please enter the code sent to your email."),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm(formOptions);
  const [error, setError] = useState<any>();

  const validateCode = async (formData) => {
    const email = localStorage.getItem("email");
    const { data } = await axios.post("/api/users/validate-code", {
      email: email,
      code: formData.code.toString(),
    });
    if (data.code) {
      setError(data);
      reset();
    } else {
      localStorage.setItem("code", formData.code.toString());
      router.push("/forgot-password/set-password");
    }
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
              onSubmit={handleSubmit(validateCode)}
            >
              <h1 className="text-center mb-2 leading-none text-h2">
                Forgot Password
              </h1>
              <p className="text-center mb-3">
                Enter the 4 digit code sent to your email
              </p>
              {error?.code ? <p className="text-red">{error?.message}</p> : ""}
              <div className="mb-3">
                <input
                  {...register("code")}
                  id="code"
                  type="text"
                  placeholder="4 Digit Code"
                  name="code"
                />
                <ErrorFeedback error={errors.code} />
              </div>

              <input type="submit" value="Continue" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValidateCodeForm;
