import React from "react";

import { useFormik } from "formik";
import { object, string } from "yup";

const validationSchema = object({
  email: string()
    .required("Please enter your email")
    .email("Pleas enter a valid email"),
  password: string().required("Please enter your password"),
});

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);

      formik?.resetForm()
    },
  });

  console.log(formik);

  return (
    <div className="wrapper">
      <form onSubmit={formik.handleSubmit}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          {formik?.touched?.email && (
            <small className="text-danger">{formik?.errors?.email}</small>
          )}
        </div>
        <div className="form-group mt-3">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
          {formik?.touched?.password && (
            <small className="text-danger">{formik?.errors?.password}</small>
          )}
        </div>

        <div className="mt-3">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
