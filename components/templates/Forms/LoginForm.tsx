import React from "react";
import Button from "../../elements/Button/Button";

const LoginForm = () => {
  return (
    <div>
      <div
        className="container mx-auto flex items-center justify-center flex-col"
        style={{ height: `60vh` }}
      >
        <div className="w-full max-w-sm mx-auto">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h1 className="text-center mb-5">Log in</h1>
            <div className="mb-4">
              <input
                className="shadow-md appearance-none border border-body rounded w-full py-2 px-3 text-body leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username"
              />
            </div>
            <div className="mb-6">
              <input
                className="shadow-md appearance-none border border-body rounded w-full py-2 px-3 text-body mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Password"
              />
            </div>
            <div className="flex items-center justify-between">
              <Button href="#" btnStyle="redFill">
                Log in
              </Button>
              <a
                className="inline-block align-baseline font-bold text-sm text-red hover:underline"
                href="#"
              >
                Forgot Password?
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
