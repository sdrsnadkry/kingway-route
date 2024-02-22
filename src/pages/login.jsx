import React from "react";

import axios from "axios";
import { useFormik } from "formik";
import { string, object } from "yup";
import { toast } from "react-toastify";

const initialValues = {
  username: "",
  password: "",
};

const validationSchema = object({
  username: string()
    // .email("Please enter a valid email")
    .required("Please enter your username."),
  password: string().required("Please enter your password"),
});

const Login = () => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      loginUser(values);
    },
  });

  const loginUser = async (formValue) => {
    try {
      const apiRequest = await axios.post(
        "https://dummyjson.com/auth/login",
        formValue
      );

      console.log(apiRequest?.data);
    } catch (error) {
      if (error?.response?.data?.message) {
        toast.error(error?.response?.data?.message);
      }
    }

    // Here you can call your API to login the user
  };

  return (
    <div className="containers">
      <form onSubmit={formik.handleSubmit}>
        {/* <!-- Email input --> */}
        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="userNameInput">
            Email address
          </label>
          <input
            type="text"
            id="userNameInput"
            className="form-control"
            name="username"
            value={formik.values.username}
            onChange={formik.handleChange}
          />
          {formik?.errors?.email && (
            <span className="text-danger">{formik?.errors?.email}</span>
          )}
        </div>

        {/* <!-- Password input --> */}
        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="passwordInput">
            Password
          </label>
          <input
            type="password"
            id="passwordInput"
            className="form-control"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          {formik?.errors?.password && (
            <span className="text-danger">{formik?.errors?.password}</span>
          )}
        </div>

        {/* <!-- Submit button --> */}
        <button type="submit" className="btn btn-primary btn-block mb-4 px-5">
          Sign in
        </button>

        {/* <!-- Register buttons --> */}
        <div className="text-center">
          <p>
            Not a member? <a href="#!">Register</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
