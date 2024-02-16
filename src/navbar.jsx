import React from "react";
import { NavLink } from "react-router-dom";

const NavItems = ({ isActive, ...props }) => {
  return <strong className={isActive ? "active" : ""}>{props.title}</strong>;
};

const Navbar = () => {
  return (
    <div>
      <NavLink to="/home">
        {(navProps) => <NavItems {...navProps} title="Home" />}
      </NavLink>
      <NavLink to="/products" className={"mx-4"}>
        {(navProps) => <NavItems {...navProps} title="Products" />}
      </NavLink>
    </div>
  );
};

export default Navbar;
