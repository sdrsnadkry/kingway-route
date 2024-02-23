import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { logoutAction } from "./redux/slice/authSlice";

const NavItems = ({ isActive, ...props }) => {
  return <strong className={isActive ? "active" : ""}>{props.title}</strong>;
};

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");

    dispatch(logoutAction());
    navigate("/");
  };

  return (
    <div>
      <NavLink to="/home">
        {(navProps) => <NavItems {...navProps} title="Home" />}
      </NavLink>
      <NavLink to="/products" className={"mx-4"}>
        {(navProps) => <NavItems {...navProps} title="Products" />}
      </NavLink>

      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Navbar;
