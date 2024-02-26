import React, { useState } from "react";

import axios from "axios";
import { useFormik } from "formik";
import { string, object } from "yup";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { loginAction } from "../redux/slice/authSlice";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = object({
  email: string()
    .email("Please enter a valid email")
    .required("Please enter your email."),
  password: string().required("Please enter your password"),
});

const Login = () => {
  const navigation = useNavigate();
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      loginUser(values);
    },
  });

  const loginUser = async (formValue) => {
    try {
      setLoading(true);
      const apiRequest = await axios.post(
        "https://node-app-by2r.onrender.com/auth/login",
        formValue
      );

      if (apiRequest?.data?.token) {
        toast.success(apiRequest?.data?.message);

        //login to store token on local storage

        localStorage.setItem("token", apiRequest?.data?.token);

        dispatch(loginAction(true));

        navigation("/home", { replace: true });
      } else {
        toast.error(apiRequest?.data?.message);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      if (error?.response?.data?.message) {
        toast.error(error?.response?.data?.message);
      }
      setLoading(false);
    }
  };

  return (
    <div className="containers">
      <form onSubmit={formik.handleSubmit}>
        {/* <!-- Email input --> */}
        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="emailInput">
            Email address
          </label>
          <input
            type="text"
            id="emailInput"
            className="form-control"
            name="email"
            value={formik.values.email}
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
          {loading ? "loading..." : "Sign in"}
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
