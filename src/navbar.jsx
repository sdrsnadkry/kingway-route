import React from "react";
import { NavLink } from "react-router-dom";

const NavItems = ({ isActive, ...props }) => {
  return <strong className={isActive ? "active" : ""}>{props.title}</strong>;
};

const Navbar = () => {
  return (
    <div>
      <NavLink to="/dashboard/team">
        {(navProps) => <NavItems {...navProps} title="Team" />}
      </NavLink>
      <NavLink to="/dashboard/contact">
        {(navProps) => <NavItems {...navProps} title="Contact" />}
        <NavItems title="Home" />
      </NavLink>
    </div>
  );
};

export default Navbar;
